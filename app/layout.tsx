import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import './global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | RNForge',
    default: 'RNForge',
  },
  description:
    'Native React Native packages with small APIs and clear platform behavior.',
  metadataBase: new URL('https://rnforge.dev'),
  openGraph: {
    siteName: 'RNForge',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            options: {
              type: 'static',
              api: '/api/search',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
