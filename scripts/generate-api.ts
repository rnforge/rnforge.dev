#!/usr/bin/env bun
/**
 * Generates the TypeDoc API reference page for @rnforge/react-native-in-app-updates.
 *
 * Output: docs/packages/react-native-in-app-updates/api-generated.md
 * This is the committed drift snapshot — if gen:api changes it, the API surface changed.
 */

import { execSync } from "node:child_process"
import { readFileSync, writeFileSync, rmSync } from "node:fs"
import { join } from "node:path"

const TMP_DIR = join(import.meta.dirname, "..", "_api-tmp")
const OUT_FILE = join(
  import.meta.dirname,
  "..",
  "docs",
  "packages",
  "react-native-in-app-updates",
  "api-generated.md",
)
const CONFIG = join(import.meta.dirname, "..", "typedoc.json")

const HEADER = `---
title: API Reference (Generated)
sidebar_label: API (Generated)
description: Exhaustive auto-generated API reference for @rnforge/react-native-in-app-updates
---

> **This file is auto-generated. Do not edit by hand.**
>
> Source: \`@rnforge/react-native-in-app-updates/src\`  
> Source repository: \`https://github.com/rnforge/react-native-in-app-updates\`  
> Regenerate: \`bun run gen:api\`  
> Generated with: TypeDoc + typedoc-plugin-markdown

`

try {
  // Step 1: Run TypeDoc into temp directory
  execSync(`bun run typedoc --options "${CONFIG}" --out "${TMP_DIR}"`, {
    cwd: join(import.meta.dirname, ".."),
    stdio: "inherit",
  })

  // Step 2: Read generated README.md
  const generated = readFileSync(join(TMP_DIR, "README.md"), "utf-8")

  // Step 3: Write with header
  writeFileSync(OUT_FILE, HEADER + generated, "utf-8")

  // Step 4: Clean up
  rmSync(TMP_DIR, { recursive: true, force: true })

  console.log(`\n✓ Generated ${OUT_FILE}`)
} catch (e) {
  rmSync(TMP_DIR, { recursive: true, force: true })
  console.error("✗ Failed to generate API reference:", e)
  process.exit(1)
}
