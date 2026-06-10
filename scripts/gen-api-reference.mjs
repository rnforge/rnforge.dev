#!/usr/bin/env bun

/**
 * Generate split API reference pages from @rnforge/react-native-in-app-updates
 *
 * This script:
 * 1. Runs TypeDoc to generate markdown in a temp directory
 * 2. Groups generated files by category (classes, functions, type-aliases)
 * 3. Produces separate pages:
 *    - reference/functions.mdx
 *    - reference/types.mdx
 *    - reference/classes.mdx
 * 4. Sanitizes output and adds headers
 * 5. Cleans up the temp directory
 */

import { spawnSync } from "child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, statSync, existsSync } from "fs";
import { join } from "path";

const PACKAGE_NAME = "@rnforge/react-native-in-app-updates";
const TEMP_DIR = ".typedoc-temp";
const OUTPUT_DIR = "content/docs/packages/react-native-in-app-updates/reference";

const PAGES = {
  functions: {
    title: "Functions",
    description: "API functions for checking update status and starting update flows",
    sourceDir: "functions",
    outputFile: "functions.mdx",
  },
  types: {
    title: "Types",
    description: "TypeScript type definitions for update status, events, and options",
    sourceDir: "type-aliases",
    outputFile: "types.mdx",
  },
  classes: {
    title: "Classes",
    description: "Error classes thrown by the API",
    sourceDir: "classes",
    outputFile: "classes.mdx",
  },
};

function runTypedoc() {
  console.log("Running TypeDoc...");

  if (existsSync(TEMP_DIR)) {
    rmSync(TEMP_DIR, { recursive: true });
  }
  mkdirSync(TEMP_DIR, { recursive: true });

  const result = spawnSync("bunx", ["typedoc", "--options", "typedoc.json", "--out", TEMP_DIR], {
    stdio: "inherit",
    cwd: process.cwd(),
  });

  if (result.status !== 0) {
    console.error("TypeDoc failed");
    process.exit(1);
  }
}

function readCategoryFiles(categoryDir) {
  const fullPath = join(TEMP_DIR, categoryDir);

  if (!existsSync(fullPath)) {
    return [];
  }

  const files = readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => ({
      name: f.replace(/\.(mdx|md)$/, ""),
      path: join(fullPath, f),
      content: readFileSync(join(fullPath, f), "utf-8"),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return files;
}

function stripTypeDocLinks(content) {
  let result = content;

  // Handle links with backticks inside: [`Name`](path) -> `Name`
  result = result.replace(/\[`([^`]+)`\]\([^)]+\)/g, '`$1`');

  // Handle links with directory prefixes: [Name](classes/...), [Name](type-aliases/...), etc.
  result = result.replace(/\[([^\]]+)\]\((?:classes|type-aliases|functions|\.\.\/)[^)]+\)/g, '$1');

  // Handle same-directory links: [Name](Name.mdx) -> Name
  result = result.replace(/\[([^\]]+)\]\([^)]+\.mdx\)/g, '$1');

  return result;
}

function stripSection(content, heading) {
  const lines = content.split('\n');
  const output = [];
  let skipping = false;

  for (const line of lines) {
    if (line === `### ${heading}`) {
      skipping = true;
      continue;
    }

    if (skipping && line.startsWith('#')) {
      skipping = false;
    }

    if (!skipping) {
      output.push(line);
    }
  }

  return output.join('\n');
}

function stripClassMethodsSection(content) {
  const lines = content.split('\n');
  const output = [];
  let skipping = false;

  for (const line of lines) {
    if (line === '## Methods') {
      skipping = true;
      continue;
    }

    if (skipping && line.startsWith('# Function:')) {
      skipping = false;
    }

    if (!skipping) {
      output.push(line);
    }
  }

  return output.join('\n');
}

function sanitizeTypeDocOutput(content) {
  let result = content;

  // Built-in Error members are inherited from TypeScript/Node globals and add noisy source paths.
  for (const heading of ['cause?', 'message', 'name', 'stack?', 'stackTraceLimit', 'captureStackTrace()', 'isError()', 'prepareStackTrace()']) {
    result = stripSection(result, heading);
  }

  result = stripClassMethodsSection(result);

  result = result
    .split('\n')
    .filter((line) => !line.startsWith('Defined in:'))
    .filter((line) => line.trim() !== '#### Inherited from')
    .filter((line) => line.trim() !== '#### Overrides')
    .filter((line, index, lines) => !(line.trim() === '***' && lines[index - 1]?.trim() === '***'))
    .filter((line) => !line.trim().startsWith('`Error.'))
    .filter((line) => line.trim() !== '`Error.constructor`')
    .join('\n');

  result = collapseRepeatedSeparators(result);
  return result.replace(/\n{3,}/g, '\n\n');
}

function collapseRepeatedSeparators(content) {
  const lines = content.split('\n');
  const output = [];
  let lastMeaningfulWasSeparator = false;

  for (const line of lines) {
    if (line.trim() === '***') {
      if (lastMeaningfulWasSeparator) continue;
      output.push(line);
      lastMeaningfulWasSeparator = true;
      continue;
    }

    output.push(line);
    if (line.trim() !== "") {
      lastMeaningfulWasSeparator = false;
    }
  }

  return output.join('\n');
}

function assertCleanReference(content, pageName) {
  const forbidden = [
    'node_modules',
    'Defined in:',
    'Inherited from',
    '#### Overrides',
    'Error.cause',
    'Error.message',
    'Error.name',
    'Error.stack',
    'captureStackTrace',
    'prepareStackTrace',
    'stackTraceLimit',
    '## Methods',
    '.mdx)',
    '.md)',
  ];

  const found = forbidden.filter((marker) => content.includes(marker));
  if (found.length > 0) {
    throw new Error(`Generated ${pageName} contains TypeDoc artifacts: ${found.join(', ')}`);
  }
}

function addPageHeader(content, title, description) {
  const header = `---
title: ${title}
description: ${description}
---

{/*
  AUTO-GENERATED FILE - DO NOT EDIT MANUALLY

  Package: ${PACKAGE_NAME}
  Source: ${PACKAGE_NAME}/src
  Source repository: https://github.com/rnforge/react-native-in-app-updates

  This file was generated by TypeDoc from the package's TypeScript definitions.
  To regenerate, run: bun run gen:api-reference
*/}

# ${title}

`;

  return header + content;
}

function concatenateCategoryFiles(files) {
  if (files.length === 0) {
    return "";
  }

  let output = "";

  for (const file of files) {
    const lines = file.content.split('\n');
    const firstLine = lines[0] || '';

    // Extract name from heading like "# Class: InAppUpdatesError" or "# Function: getUpdateStatus()"
    let nameHeading = '';
    if (firstLine.startsWith('# Class: ') || firstLine.startsWith('# Function: ') || firstLine.startsWith('# Type Alias: ')) {
      const name = firstLine.replace(/^# (Class|Function|Type Alias): /, '');
      nameHeading = `## ${name}\n\n`;
    }

    // Strip the top-level heading
    const startIndex = firstLine.startsWith('# ') ? 1 : 0;
    const content = lines.slice(startIndex).join('\n').trim();

    if (content) {
      output += nameHeading + content + "\n\n";
    }
  }

  return output;
}

function generatePage(pageKey) {
  const page = PAGES[pageKey];
  console.log(`Generating ${page.title}...`);

  const files = readCategoryFiles(page.sourceDir);
  console.log(`  Found ${files.length} ${page.sourceDir} files`);

  const concatenated = concatenateCategoryFiles(files);

  if (!concatenated.trim()) {
    console.log(`  Warning: No content for ${page.title}`);
    return;
  }

  console.log("  Stripping TypeDoc cross-links...");
  const withoutLinks = stripTypeDocLinks(concatenated);

  console.log("  Sanitizing TypeDoc output...");
  const cleaned = sanitizeTypeDocOutput(withoutLinks);

  console.log("  Adding header...");
  const withHeader = addPageHeader(cleaned, page.title, page.description);

  console.log("  Checking for TypeDoc artifacts...");
  assertCleanReference(withHeader, page.title);

  const outputPath = join(OUTPUT_DIR, page.outputFile);
  console.log(`  Writing to ${outputPath}...`);
  writeFileSync(outputPath, withHeader);
}

function main() {
  try {
    runTypedoc();

    // Ensure output directory exists
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate each page
    for (const pageKey of Object.keys(PAGES)) {
      generatePage(pageKey);
    }

    console.log("Cleaning up...");
    rmSync(TEMP_DIR, { recursive: true });

    console.log("✓ Split API reference generated successfully");
    console.log(`  - ${OUTPUT_DIR}/functions.mdx`);
    console.log(`  - ${OUTPUT_DIR}/types.mdx`);
    console.log(`  - ${OUTPUT_DIR}/classes.mdx`);
  } catch (error) {
    console.error("Error:", error);
    if (existsSync(TEMP_DIR)) {
      rmSync(TEMP_DIR, { recursive: true });
    }
    process.exit(1);
  }
}

main();
