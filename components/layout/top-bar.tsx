'use client'

import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function TopBar() {
  return (
    <div className="bg-[var(--teal-dark)] text-white text-sm py-2">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Contact info */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <a
            href="mailto:info@onlinemadrasa.org"
            className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@onlinemadrasa.org</span>
          </a>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>UK: +44 749 132 2041</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>USA: +1 713 534 5990</span>
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { label: 'Facebook', href: 'https://facebook.com', icon: 'f' },
            { label: 'X / Twitter', href: 'https://twitter.com', icon: 'x' },
            { label: 'Instagram', href: 'https://instagram.com', icon: 'in' },
            { label: 'YouTube', href: 'https://youtube.com', icon: 'yt' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[var(--gold)] flex items-center justify-center text-xs font-bold transition-colors"
            >
              {social.icon === 'f' && (
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              )}
              {social.icon === 'x' && (
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )}
              {social.icon === 'in' && (
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" className="fill-[var(--teal-dark)]" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" className="stroke-[var(--teal-dark)] stroke-2" />
                </svg>
              )}
              {social.icon === 'yt' && (
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" className="fill-[var(--teal-dark)]" />
                </svg>
              )}
            </a>
          ))}
          <Link
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-[#00b67a] px-2 py-0.5 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            Trustpilot ★★★★★
          </Link>
        </div>
      </div>
    </div>
  )
}
