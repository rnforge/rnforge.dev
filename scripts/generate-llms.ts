#!/usr/bin/env bun
/**
 * Generates llms.txt and llms-full.txt from committed docs source files.
 *
 * Output: static/llms.txt (compact), static/llms-full.txt (full)
 * These are the committed LLM context files.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { readdirSync } from "node:fs"
import { join, dirname, resolve } from "node:path"
import { existsSync } from "node:fs"

const SITE_URL = "https://rnforge.dev"
const STATIC_DIR = join(import.meta.dirname, "..", "static")
const DOCS_DIR = join(import.meta.dirname, "..", "docs")
const UPDATES_DIR = join(import.meta.dirname, "..", "updates")

interface DocFile {
  /** Relative path from repo root, e.g. "docs/packages/react-native-in-app-updates/index.mdx" */
  path: string
  /** Full file system path */
  fsPath: string
  /** Content after frontmatter stripping */
  content: string
  /** Extracted title (first # heading) */
  title: string
}

// -- Files to include (order matters) --

const SOURCE_FILES: { fsPath: string; relPath: string }[] = [
  {
    fsPath: join(DOCS_DIR, "index.mdx"),
    relPath: "docs/index.mdx",
  },
  {
    fsPath: join(DOCS_DIR, "packages", "react-native-in-app-updates", "index.mdx"),
    relPath: "docs/packages/react-native-in-app-updates/index.mdx",
  },
  {
    fsPath: join(DOCS_DIR, "packages", "react-native-in-app-updates", "install.mdx"),
    relPath: "docs/packages/react-native-in-app-updates/install.mdx",
  },
  {
    fsPath: join(DOCS_DIR, "packages", "react-native-in-app-updates", "quickstart.mdx"),
    relPath: "docs/packages/react-native-in-app-updates/quickstart.mdx",
  },
  {
    fsPath: join(DOCS_DIR, "packages", "react-native-in-app-updates", "api.mdx"),
    relPath: "docs/packages/react-native-in-app-updates/api.mdx",
  },
  {
    fsPath: join(DOCS_DIR, "packages", "react-native-in-app-updates", "api-generated.md"),
    relPath: "docs/packages/react-native-in-app-updates/api-generated.md",
  },
]

// Find latest release note
function findLatestReleaseNote(): { fsPath: string; relPath: string } | null {
  if (!existsSync(UPDATES_DIR)) return null
  const files = readdirSync(UPDATES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .sort()
    .reverse()
  if (files.length === 0) return null
  const f = files[0]!
  return {
    fsPath: join(UPDATES_DIR, f),
    relPath: `updates/${f}`,
  }
}

// -- Processing --

function stripFrontmatter(raw: string): { body: string; title?: string } {
  const trimmed = raw.trimStart()
  if (!trimmed.startsWith("---")) return { body: raw }
  const end = trimmed.indexOf("---", 3)
  if (end === -1) return { body: raw }

  const fm = trimmed.slice(3, end)
  // Extract title from frontmatter (e.g., 'title: "Foo"' or "title: Foo")
  const titleMatch = fm.match(/^title:\s*["']?(.+?)["']?\s*$/m)
  const body = trimmed.slice(end + 3).trimStart()

  return { body, title: titleMatch ? titleMatch[1]!.trim() : undefined }
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1]!.trim() : "Untitled"
}

/**
 * Strips the first H1 heading from content (used in full output
 * where the section divider already provides the heading).
 */
function stripFirstH1(content: string): string {
  const lines = content.split("\n")
  const result: string[] = []
  let found = false
  for (const line of lines) {
    if (!found && /^#\s+/.test(line)) {
      found = true
      continue
    }
    result.push(line)
  }
  return result.join("\n").replace(/^\n+/, "")
}

/**
 * Rewrites a markdown link target relative to a doc's directory
 * to an absolute https://rnforge.dev URL.
 *
 * Handles:
 *   - ./foo       → relative to doc dir
 *   - ../foo       → parent of doc dir
 *   - /docs/foo    → absolute from site root (already starts with /)
 *   - https://...  → leave as-is
 */
function rewriteLink(href: string, docRelPath: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) return href
  if (href.startsWith("/")) return `${SITE_URL}${href}`

  // Relative link — resolve against the doc's directory
  const docDir = dirname(docRelPath)
  const resolved = resolve("/" + docDir, href) // Resolves on a virtual root
  // resolved is like "/docs/packages/.../install" — strip leading /
  const urlPath = resolved.startsWith("/") ? resolved : "/" + resolved
  return `${SITE_URL}${urlPath}`
}

function rewriteLinksInLine(line: string, docRelPath: string): string {
  // Match markdown links: [text](url)
  return line.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (_match, text, href) => `[${text}](${rewriteLink(href, docRelPath)})`,
  )
}

function processContent(raw: string, docRelPath: string): { content: string; title: string } {
  const { body, title: fmTitle } = stripFrontmatter(raw)
  let content = body

  // Strip auto-generated header block (the blockquote after frontmatter)
  content = content.replace(/^>\s*\*\*This file is auto-generated[^]*?\n\n/m, "")

  // Remove Docusaurus-specific code block modifiers (e.g., ```bash npm2yarn → ```bash)
  content = content.replace(/^```(\w+)\s+npm2yarn/gm, "```$1")

  // Remove TSX/JSX blocks that are Docusaurus-only imports
  // e.g. import Tabs from '@theme/Tabs'
  content = content.replace(/^import\s+.*from\s+['"]@theme\/.*['"]\s*;?\s*$/gm, "")
  content = content.replace(/^<Tabs[^>]*>\s*$/gm, "")
  content = content.replace(/^<TabItem[^>]*>\s*$/gm, "")
  content = content.replace(/^<\/TabItem>\s*$/gm, "")
  content = content.replace(/^<\/Tabs>\s*$/gm, "")

  // Remove navigation footer links (Docusaurus doc links to next/previous)
  // Remove empty "## Next" or "## See Also" sections
  // Keep them for now — they're useful context

  // Rewrite markdown links to absolute URLs
  const lines = content.split("\n")
  const rewritten = lines.map((line) => rewriteLinksInLine(line, docRelPath))

  // Collapse consecutive blank lines (max 2), strip trailing whitespace
  const collapsed: string[] = []
  let blankCount = 0
  for (const line of rewritten) {
    if (line.trim() === "") {
      blankCount++
      if (blankCount <= 2) collapsed.push("")
    } else {
      blankCount = 0
      collapsed.push(line.trimEnd())
    }
  }

  const final = collapsed.join("\n").trim()
  const title = fmTitle ?? extractTitle(final)
  return { content: final, title }
}

function readDoc(file: { fsPath: string; relPath: string }): DocFile | null {
  if (!existsSync(file.fsPath)) {
    console.warn(`  ⚠ Skipping missing file: ${file.relPath}`)
    return null
  }
  const raw = readFileSync(file.fsPath, "utf-8")
  const { content, title } = processContent(raw, file.relPath)
  return {
    path: file.relPath,
    fsPath: file.fsPath,
    content,
    title,
  }
}

// -- Compact llms.txt generator --

function generateCompact(docs: DocFile[], releaseNote: DocFile | null): string {
  const lines: string[] = []

  lines.push(`# RNForge Docs — LLM Context (Summary)`)
  lines.push(``)
  lines.push(`> Compact context for LLM ingestion. Use \`/llms-full.txt\` for complete content.`)
  lines.push(``)
  lines.push(`## Site`)
  lines.push(``)
  lines.push(`- **URL:** ${SITE_URL}`)
  lines.push(`- **Purpose:** Native-layer wrapper packages for React Native.`)
  lines.push(``)
  lines.push(`## Doc Pages`)
  lines.push(``)

  for (const doc of docs) {
    const urlPath = doc.path
      .replace(/^docs\//, "/docs/")
      .replace(/\.(mdx?)$/, "")
      .replace(/\/index$/, "")
    lines.push(`- [${doc.title}](${SITE_URL}${urlPath})`)
  }

  if (releaseNote) {
    lines.push(
      `- [Release Notes](${SITE_URL}/updates) (latest: ${releaseNote.title})`,
    )
  }

  lines.push(``)
  lines.push(`## Key Facts`)
  lines.push(``)
  lines.push(`- Package: @rnforge/react-native-in-app-updates`)
  lines.push(`- 6 main functions: getUpdateStatus, startImmediateUpdate, startFlexibleUpdate, completeFlexibleUpdate, addInstallStateListener, openStorePage`)
  lines.push(`- 6 helper predicates: isUpdateAvailable, canStartImmediateUpdate, canStartFlexibleUpdate, canCompleteFlexibleUpdate, canOpenStorePage, supportsInstallStateListener`)
  lines.push(`- Android: Play Core immediate + flexible update flows`)
  lines.push(`- iOS: Store page helpers, Play-style flows reported as unsupported`)
  lines.push(`- Built with Nitro for type-safe native bridging`)
  lines.push(``)

  // Include the auto-generated header note
  lines.push(`## Auto-Generated Content`)
  lines.push(``)
  lines.push(`This file is generated by \`scripts/generate-llms.ts\`.`)
  lines.push(`Regenerate: \`bun run gen:llms\``)

  return lines.join("\n") + "\n"
}

// -- Full llms-full.txt generator --

function generateFull(docs: DocFile[], releaseNote: DocFile | null): string {
  const lines: string[] = []

  lines.push(`# RNForge Docs — Full LLM Context`)
  lines.push(``)
  lines.push(`> Complete documentation content for LLM ingestion.`)
  lines.push(`> Generated from rnforge.dev source docs.`)
  lines.push(`> URL: ${SITE_URL}`)
  lines.push(`> Regenerate: \`bun run gen:llms\``)
  lines.push(``)

  lines.push(`---`)
  lines.push(``)

  for (const doc of docs) {
    lines.push(`## ${doc.title}`)
    lines.push(``)
    lines.push(stripFirstH1(doc.content))
    lines.push(``)
    lines.push(`---`)
    lines.push(``)
  }

  if (releaseNote) {
    lines.push(`## ${releaseNote.title}`)
    lines.push(``)
    lines.push(stripFirstH1(releaseNote.content))
    lines.push(``)
    lines.push(`---`)
    lines.push(``)
  }

  lines.push(`*End of RNForge LLM context.*`)
  lines.push(``)

  return lines.join("\n")
}

// -- Main --

function main() {
  console.log("Generating LLM files from docs source...")

  const docs = SOURCE_FILES.map(readDoc).filter((d): d is DocFile => d !== null)
  const releaseFile = findLatestReleaseNote()
  const releaseNote = releaseFile ? readDoc(releaseFile) : null

  if (docs.length === 0) {
    console.error("✗ No docs found. Check SOURCE_FILES paths.")
    process.exit(1)
  }

  // Generate compact
  const compact = generateCompact(docs, releaseNote)
  writeFileSync(join(STATIC_DIR, "llms.txt"), compact, "utf-8")
  console.log(`  ✓ static/llms.txt (${compact.split("\n").length} lines)`)

  // Generate full
  const full = generateFull(docs, releaseNote)
  writeFileSync(join(STATIC_DIR, "llms-full.txt"), full, "utf-8")
  console.log(`  ✓ static/llms-full.txt (${full.split("\n").length} lines)`)

  console.log("\n✓ Done.")
}

main()
