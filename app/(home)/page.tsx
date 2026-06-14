import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'RNForge',
  },
  description:
    'Native React Native packages with small APIs and clear platform behavior.',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        RNForge
      </h1>
      <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">
        Native React Native packages with small APIs, typed status results, and clear Android/iOS behavior.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/docs/rnforge"
          className="rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground"
        >
          Open Docs
        </a>
        <a
          href="/docs/in-app-updates"
          className="rounded-lg border border-fd-border px-6 py-3 font-medium text-fd-foreground"
        >
          In-App Updates
        </a>
      </div>
    </main>
  );
}
