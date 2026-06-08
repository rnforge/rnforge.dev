import { changelogSource } from '@/lib/changelog-source';
import defaultMdxComponents from 'fumadocs-ui/mdx';

export default function ChangelogPage() {
  const pages = changelogSource.getPages();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
      <p className="mt-2 text-fd-muted-foreground">
        Release notes for RNForge packages.
      </p>
      <div className="mt-8 space-y-12">
        {pages.map((page) => {
          const MDX = page.data.body;
          return (
            <article
              key={page.url}
              className="border-b border-fd-border pb-12 last:border-b-0"
            >
              <MDX components={{ ...defaultMdxComponents }} />
            </article>
          );
        })}
      </div>
    </main>
  );
}
