import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header style={{
        padding: '4rem 0',
        textAlign: 'center',
      }}>
        <h1 style={{fontSize: '3rem'}}>{siteConfig.title}</h1>
        <p style={{fontSize: '1.25rem', color: 'var(--ifm-color-secondary-contrast-foreground)'}}>
          {siteConfig.tagline}
        </p>
        <div style={{marginTop: '2rem'}}>
          <Link
            className="button button--primary button--lg"
            to="/docs">
            Read the Docs
          </Link>
        </div>
      </header>
    </Layout>
  );
}
