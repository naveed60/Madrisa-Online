import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  courses: [
    { label: 'Noorani Qaida', href: '/courses/noorani-qaida' },
    { label: 'Tajweed ul Quran', href: '/courses/tajweed-ul-quran' },
    { label: 'Quran Reading', href: '/courses/quran-reading' },
    { label: 'Quran Memorization', href: '/courses/quran-memorization' },
    { label: 'Quran Tafseer', href: '/courses/quran-tafseer' },
    { label: 'Arabic Language', href: '/courses/arabic-language' },
    { label: 'Quran Ijaza', href: '/courses/quran-ijaza' },
    { label: 'Ten Qirat', href: '/courses/ten-qirat' },
  ],
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Teachers', href: '/about/teachers' },
    { label: 'Fees & Plans', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  programs: [
    { label: 'Classes for Kids', href: '/courses?audience=kids' },
    { label: 'Classes for Adults', href: '/courses?audience=adults' },
    { label: 'Classes for Ladies', href: '/courses?audience=ladies' },
    { label: 'Free Trial Class', href: '/trial' },
    { label: 'Register Now', href: '/auth/register' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--teal-dark)] text-white">
      {/* Main footer */}
      <div className="container-custom py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-white font-bold text-lg">
              OM
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight">Online</div>
              <div className="text-[var(--gold)] font-bold text-base leading-tight">Madrasa</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Learn Quran online with Tajweed. We serve students across the UK, USA, Canada,
            Australia, and worldwide with certified Quran teachers.
          </p>
          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:info@onlinemadrasa.org"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-[var(--gold)] transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              info@onlinemadrasa.org
            </a>
            <span className="flex items-center gap-2 text-sm text-white/70">
              <Phone className="w-4 h-4 shrink-0" />
              UK: +44 749 132 2041
            </span>
            <span className="flex items-center gap-2 text-sm text-white/70">
              <Phone className="w-4 h-4 shrink-0" />
              USA: +1 713 534 5990
            </span>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wide">
            Our Courses
          </h3>
          <ul className="flex flex-col gap-2">
            {footerLinks.courses.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 text-sm hover:text-[var(--gold)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 text-sm hover:text-[var(--gold)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wide">
            Programs
          </h3>
          <ul className="flex flex-col gap-2 mb-6">
            {footerLinks.programs.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 text-sm hover:text-[var(--gold)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/trial"
            className="inline-block bg-[var(--gold)] hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/50">
          <span>Copyright &copy; {new Date().getFullYear()} Online Madrasa. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
