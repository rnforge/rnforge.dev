import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: 'RNForge',
      }}
      links={[
        { text: 'Docs', url: '/docs' },
        { text: 'Changelog', url: '/changelog' },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
