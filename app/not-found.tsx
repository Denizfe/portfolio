import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid-bg flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        This page doesn&apos;t compile.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-muted">
        The route you followed doesn&apos;t exist. Head back and try another
        path.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-[1.03]"
      >
        Back to home
      </Link>
    </main>
  );
}
