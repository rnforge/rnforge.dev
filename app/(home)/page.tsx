export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        RNForge
      </h1>
      <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">
        React Native packages for in-app updates and more.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/docs"
          className="rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground"
        >
          Documentation
        </a>
        <a
          href="/changelog"
          className="rounded-lg border border-fd-border px-6 py-3 font-medium"
        >
          Changelog
        </a>
      </div>
    </main>
  );
}
