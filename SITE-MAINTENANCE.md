# Site Maintenance Notes

Internal reference for `rnforge.dev` maintainers. Not part of public docs.

## Docusaurus v4 Future Flag

Configured `future: { v4: true }` in `docusaurus.config.ts`. This enables
Docusaurus v4-compatible behavior ahead of the v4 release. Watch for breaking
changes in Docusaurus changelogs. If we upgrade to v4 before this flag is
removed, remove the `future` block.

## Search Plugin

Using `@easyops-cn/docusaurus-search-local` (v0.55.2). **Fallback plan:**

If the plugin goes unmaintained or breaks on a Docusaurus major upgrade:

1. Try `docusaurus-lunr-search` as alternative local search.
2. If both fail, fall back to Docusaurus built-in Algolia DocSearch (external
   service, requires approval per project decisions).
3. Migration cost: swap theme entry in `docusaurus.config.ts` + rebuild.

## LLM Files

`static/llms.txt` and `static/llms-full.txt` are **manual proof files**. They
must be regenerated when docs content changes. Automation plan:

1. Add a post-build script that concatenates source MDX files into
   `static/llms-full.txt`.
2. Generate `static/llms.txt` from the sidebar structure.
3. Consider a Docusaurus plugin or `scripts/generate-llms-files.ts`.

## Fumadocs Fallback Criteria

Docusaurus is the accepted proof for this scaffold and **passes** all Phase 1–4
criteria. Switch to Fumadocs only if **all** of the following occur:

1. Docusaurus cannot produce acceptable LLM output files after automation is
   attempted.
2. API extraction pipeline (TypeDoc or similar) cannot be integrated with
   Docusaurus without unacceptable fragility.
3. Docusaurus v4 upgrade path introduces breaking changes that cost more to fix
   than migrating to Fumadocs.

Until then, Docusaurus remains the active framework.
