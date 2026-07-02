import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-border p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl">🔍</span>
        </div>
        <h1 className="text-2xl font-extrabold text-foreground mb-2">
          Page not found
        </h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Please check the URL or navigate back home.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
