#!/usr/bin/env bun

/**
 * Generate source snapshot from @rnforge/react-native-in-app-updates
 *
 * This script copies TypeScript source files from the sibling package
 * into the docs repo so that fumadocs-typescript can generate type tables
 * during build without requiring the package repo at build time.
 */

import { copyFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

const PACKAGE_SOURCE = '../react-native-in-app-updates/src';
const SNAPSHOT_DIR = 'generated/react-native-in-app-updates/src';

const FILES_TO_COPY = [
  'types.ts',
];

function main() {
  console.log('Generating source snapshot...');

  // Clean snapshot directory
  if (existsSync(SNAPSHOT_DIR)) {
    rmSync(SNAPSHOT_DIR, { recursive: true });
  }
  mkdirSync(SNAPSHOT_DIR, { recursive: true });

  // Copy each file
  for (const file of FILES_TO_COPY) {
    const sourcePath = join(PACKAGE_SOURCE, file);
    const destPath = join(SNAPSHOT_DIR, file);

    if (!existsSync(sourcePath)) {
      throw new Error(`Required source file not found: ${sourcePath}`);
    }

    copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file}`);
  }

  console.log('✓ Source snapshot generated successfully');
}

main();
