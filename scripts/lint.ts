import { type FileObject, printErrors, scanURLs, validateFiles } from 'next-validate-link';
import { source } from '@/lib/source';

async function checkLinks() {
  const pages = source.getPages();
  const pagesWithHeadings = await Promise.all(
    pages.map(async (page) => ({
      page,
      headings: await getHeadings(page),
    })),
  );

  const scanned = await scanURLs({
    preset: 'next',
    populate: {
      'docs/[[...slug]]': pagesWithHeadings.map(({ page, headings }) => ({
        value: {
          slug: page.slugs,
        },
        hashes: headings,
      })),
    },
  });

  printErrors(
    await validateFiles(await getFiles(), {
      scanned,
      checkRelativePaths: 'as-url',
    }),
    true,
  );
}

async function getHeadings(page: (typeof source)['$inferPage']): Promise<string[]> {
  const raw = await page.data.getText('raw');
  const headingRegex = /^#{1,6}\s+(.+)$/gm;
  const headings: string[] = [];
  let match;
  while ((match = headingRegex.exec(raw)) !== null) {
    const heading = match[1].trim();
    const slug = heading
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    headings.push(slug);
  }
  return headings;
}

function getFiles() {
  const promises = source.getPages().map(
    async (page): Promise<FileObject> => ({
      path: page.absolutePath || page.path,
      content: await page.data.getText('raw'),
      url: page.url,
      data: page.data,
    }),
  );

  return Promise.all(promises);
}

void checkLinks();
