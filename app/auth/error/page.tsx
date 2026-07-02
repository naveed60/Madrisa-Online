import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication Error – Online Madrasa',
}

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  const messages: Record<string, { title: string; description: string }> = {
    Configuration: {
      title: 'Server configuration error',
      description: 'There is a problem with the server configuration. Please contact support.',
    },
    AccessDenied: {
      title: 'Access denied',
      description: 'You do not have permission to access this resource.',
    },
    Verification: {
      title: 'Verification failed',
      description: 'The verification link is invalid or has expired. Please try again.',
    },
    Default: {
      title: 'Authentication error',
      description: 'An error occurred during authentication. Please try again.',
    },
  }

  const { title, description } = messages[error ?? ''] ?? messages.Default

  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-border p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl">🔒</span>
        </div>
        <h1 className="text-2xl font-extrabold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-col gap-3">
          <Link
            href="/auth/login"
            className="bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--teal)] hover:underline font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
