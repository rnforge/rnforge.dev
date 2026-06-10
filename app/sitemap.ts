import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const baseUrl = 'https://rnforge.dev';

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const docsPages = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    ...docsPages,
  ];
}
