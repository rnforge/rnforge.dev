import { getLLMText } from '@/lib/get-llm-text';
import { source } from '@/lib/source';

const ORDER = [
  '/docs/in-app-updates',
  '/docs/in-app-updates/install',
  '/docs/in-app-updates/quickstart',
  '/docs/in-app-updates/app-integration',
  '/docs/in-app-updates/api',
  '/docs/in-app-updates/troubleshooting',
];

export function getInAppUpdatesPages() {
  return source
    .getPages()
    .filter((page) => page.url.startsWith('/docs/in-app-updates'))
    .sort((a, b) => ORDER.indexOf(a.url) - ORDER.indexOf(b.url));
}

export function getInAppUpdatesLLMIndex() {
  const pages = getInAppUpdatesPages();

  return [
    '# RNForge In-App Updates',
    '',
    '> React Native in-app update support with Android Play Core flows and iOS store fallback.',
    '',
    '## Docs',
    ...pages.map(
      (page) =>
        `- [${page.data.title}](https://rnforge.dev${page.url}): ${page.data.description ?? ''}`,
    ),
  ].join('\n');
}

export async function getInAppUpdatesLLMFull() {
  const pages = getInAppUpdatesPages();
  const rendered = await Promise.all(pages.map(getLLMText));

  return [
    '# RNForge In-App Updates',
    '',
    'Source: https://rnforge.dev/docs/in-app-updates',
    '',
    rendered.join('\n\n---\n\n'),
  ].join('\n');
}
