# Security Policy

## Supported Versions

This is the `rnforge.dev` docs website. Security concerns should be directed to
the relevant package repository, not the docs site.

For package security, see the `SECURITY.md` in the package repository at
https://github.com/rnforge.

## Reporting a Vulnerability

If you discover a security vulnerability in an RNForge package:

1. **Do not** open a public issue.
2. Email the maintainer with details.
3. Allow time for the issue to be addressed before public disclosure.

## Docs Site

The `rnforge.dev` site is a static Docusaurus site with no backend, no user
data, no authentication, and no server-side execution. Security concerns related
to the docs site are limited to:

- Supply-chain risks from npm dependencies (addressed via lockfile + CI)
- Docusaurus framework vulnerabilities (addressed via version updates)

To report a docs site vulnerability, open a GitHub issue in the `rnforge.dev`
repository.
