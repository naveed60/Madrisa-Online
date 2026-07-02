import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from '@/components/providers/session-provider'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Online Madrasa – Learn Quran Online for Kids & Adults',
  description:
    'Learn Quran online with Tajweed. Expert Quran tutors for kids, adults & ladies. Start your free trial today.',
  keywords: [
    'online quran classes',
    'learn quran online',
    'quran for kids',
    'tajweed',
    'online madrasa',
  ],
  openGraph: {
    title: 'Online Madrasa – Learn Quran Online',
    description: 'Learn Quran online with Tajweed for kids & adults.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a6b7c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-body antialiased">
        <SessionProvider>{children}</SessionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
