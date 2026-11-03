import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="text-xl font-semibold text-content">Page not found</h1>
      <p className="max-w-md text-sm text-muted">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-strong"
      >
        Back to home
      </Link>
    </div>
  );
}
