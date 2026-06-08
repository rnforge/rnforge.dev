import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: 'RNForge',
      }}
      links={[
        { text: 'Docs', url: '/docs' },
        { text: 'Changelog', url: '/changelog' },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
