import { getLLMText } from '@/lib/get-llm-text';
import { source } from '@/lib/source';

type Page = (typeof source)['$inferPage'];

const BASE_URL = 'https://rnforge.dev';

const ORDER = [
  '/docs/rnforge',
  '/docs/in-app-updates',
  '/docs/in-app-updates/install',
  '/docs/in-app-updates/quickstart',
  '/docs/in-app-updates/app-integration',
  '/docs/in-app-updates/api',
  '/docs/in-app-updates/troubleshooting',
];

function pageRank(url: string): number {
  const idx = ORDER.indexOf(url);
  return idx === -1 ? ORDER.length : idx;
}

export function getSitePages() {
  return [...source.getPages()].sort((a, b) => pageRank(a.url) - pageRank(b.url));
}

export function getSiteLLMIndex() {
  const pages = getSitePages();

  const docsLinks = pages.map(
    (page) =>
      `- [${page.data.title}](${BASE_URL}${page.url}): ${page.data.description ?? ''}`,
  );

  const llmFiles = [
    `- [In-App Updates llms.txt](${BASE_URL}/docs/in-app-updates/llms.txt): Package-scoped LLM index.`,
    `- [In-App Updates llms-full.txt](${BASE_URL}/docs/in-app-updates/llms-full.txt): Package-scoped full Markdown docs.`,
  ];

  return [
    '# RNForge',
    '',
    '> RNForge provides small React Native native packages with clear platform behavior and typed results.',
    '',
    '## Docs',
    ...docsLinks,
    '',
    '## LLM Files',
    ...llmFiles,
  ].join('\n');
}

export async function getSiteLLMFull() {
  const pages = getSitePages();
  const rendered = await Promise.all(pages.map(getLLMText));

  return [
    '# RNForge',
    '',
    `Source: ${BASE_URL}`,
    '',
    rendered.join('\n\n---\n\n'),
  ].join('\n');
}
