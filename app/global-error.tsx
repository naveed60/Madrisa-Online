'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error('[GLOBAL_ERROR]', error)

  return (
    <html>
      <body className="font-body antialiased bg-[var(--cream)]">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-border p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-extrabold text-foreground mb-2">
              Critical Error
            </h1>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              A critical error occurred. Please refresh the page or try again later.
            </p>
            <button
              onClick={reset}
              className="bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
