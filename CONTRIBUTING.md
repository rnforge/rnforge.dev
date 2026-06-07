# Contributing to RNForge

Thanks for your interest in contributing to RNForge.

## Getting Started

This is the `rnforge.dev` docs website. For package contributions, see the
individual package repositories under https://github.com/rnforge.

### Local Development

```bash
bun install
bun run start
```

The site runs at http://localhost:3000. Most changes are reflected live without
restarting the server.

### Build

```bash
bun run build
bun run typecheck
```

Both must pass before submitting a PR.

## Docs Content

Docs pages live in `docs/`. Each package has its own section under
`docs/packages/<package-name>/`.

- Write in MDX (Markdown with JSX support)
- Follow the existing tone: technical, concise, capability-first
- Include platform-specific notes where behavior differs between Android and iOS
- Do not add fake/mock public package pages

## Release Notes

Release notes live in `updates/`. Use the format `YYYY-MM-DD-<title>.mdx` or
`YYYY-MM-DD-<version>.mdx`.

## Pull Request Process

1. Run `bun run build` and `bun run typecheck` before submitting
2. Keep PRs focused — one logical change per PR
3. Link relevant issues in the PR description
4. PRs are reviewed by maintainers before merge

## Code Style

- Use TypeScript for config and React components
- Follow existing patterns in `docusaurus.config.ts` and `sidebars.ts`
- No analytics, no external search services, no deployment config in PRs
