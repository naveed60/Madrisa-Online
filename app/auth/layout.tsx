import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Account – Online Madrasa',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex flex-col">
      {/* Minimal header */}
      <header className="bg-white border-b border-border">
        <div className="container-custom h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[var(--teal)] flex items-center justify-center text-white font-bold text-base">
              OM
            </div>
            <div>
              <div className="text-[var(--teal)] font-bold text-sm leading-tight">Online</div>
              <div className="text-[var(--gold)] font-bold text-sm leading-tight">Madrasa</div>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        {children}
      </main>

      <footer className="text-center py-4 text-xs text-muted-foreground border-t border-border bg-white">
        &copy; {new Date().getFullYear()} Online Madrasa. All rights reserved.
      </footer>
    </div>
  )
}
