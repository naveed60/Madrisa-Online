'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, User, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { NAV_LINKS } from '@/lib/data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setUserMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-full bg-[var(--teal)] flex items-center justify-center text-white font-bold text-lg">
            OM
          </div>
          <div className="hidden sm:block">
            <div className="text-[var(--teal)] font-bold text-base leading-tight">Online</div>
            <div className="text-[var(--gold)] font-bold text-base leading-tight">Madrasa</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-0.5 px-3 py-2 text-sm font-semibold tracking-wide transition-colors rounded ${
                  pathname === link.href
                    ? 'text-[var(--teal)]'
                    : 'text-foreground hover:text-[var(--teal)]'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg rounded-md border border-border overflow-hidden z-50"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-[var(--cream)] hover:text-[var(--teal)] transition-colors border-b border-border/40 last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA buttons / User menu */}
        <div className="hidden lg:flex items-center gap-3">
          {status === 'authenticated' && session?.user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground hover:text-[var(--teal)] transition-colors rounded"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--teal)] flex items-center justify-center text-white font-bold text-sm">
                  {session.user.name?.charAt(0)?.toUpperCase() || session.user.email?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <span className="max-w-[120px] truncate">{session.user.name || session.user.email}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md border border-border overflow-hidden z-50"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:bg-[var(--cream)] hover:text-[var(--teal)] transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <button
                      onClick={async () => {
                        setUserMenuOpen(false)
                        setSigningOut(true)
                        try {
                          await signOut({ callbackUrl: '/' })
                        } catch (error) {
                          console.error('[SIGNOUT_ERROR]', error)
                        } finally {
                          setSigningOut(false)
                        }
                      }}
                      disabled={signingOut}
                      className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-foreground hover:bg-[var(--cream)] hover:text-red-600 transition-colors border-t border-border/40 disabled:opacity-50"
                    >
                      <LogOut className="w-4 h-4" />
                      {signingOut ? 'Signing out...' : 'Logout'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-sm font-semibold text-[var(--teal)] hover:text-[var(--teal-dark)] transition-colors"
              >
                LOGIN
              </Link>
              <Link
                href="/auth/register"
                className="bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
              >
                REGISTER NOW
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      link.dropdown
                        ? setOpenDropdown(openDropdown === link.label ? null : link.label)
                        : undefined
                    }
                  >
                    <Link
                      href={link.href}
                      className="flex-1 py-2.5 text-sm font-semibold text-foreground hover:text-[var(--teal)] transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                  <AnimatePresence>
                    {link.dropdown && openDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden pl-4 border-l-2 border-[var(--teal)]/30 ml-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-[var(--teal)] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-3 flex flex-col gap-2 border-t border-border mt-2">
                {status === 'authenticated' && session?.user ? (
                  <>
                    <div className="flex items-center gap-3 px-1 py-2">
                      <div className="w-9 h-9 rounded-full bg-[var(--teal)] flex items-center justify-center text-white font-bold text-sm">
                        {session.user.name?.charAt(0)?.toUpperCase() || session.user.email?.charAt(0)?.toUpperCase() || 'U'}
                      </div>
                      <div className="text-sm font-semibold text-foreground truncate">
                        {session.user.name || session.user.email}
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      className="flex items-center justify-center gap-2 py-2.5 border border-[var(--teal)] text-[var(--teal)] text-sm font-bold rounded transition-colors hover:bg-[var(--teal)] hover:text-white"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <button
                      onClick={async () => {
                        setSigningOut(true)
                        try {
                          await signOut({ callbackUrl: '/' })
                        } catch (error) {
                          console.error('[SIGNOUT_ERROR]', error)
                        } finally {
                          setSigningOut(false)
                        }
                      }}
                      disabled={signingOut}
                      className="flex items-center justify-center gap-2 py-2.5 bg-red-500 text-white text-sm font-bold rounded transition-colors hover:bg-red-600 disabled:opacity-50"
                    >
                      <LogOut className="w-4 h-4" />
                      {signingOut ? 'Signing out...' : 'Logout'}
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      className="text-center py-2.5 border border-[var(--teal)] text-[var(--teal)] text-sm font-bold rounded transition-colors hover:bg-[var(--teal)] hover:text-white"
                    >
                      LOGIN
                    </Link>
                    <Link
                      href="/auth/register"
                      className="text-center py-2.5 bg-[var(--teal)] text-white text-sm font-bold rounded transition-colors hover:bg-[var(--teal-dark)]"
                    >
                      REGISTER NOW
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
