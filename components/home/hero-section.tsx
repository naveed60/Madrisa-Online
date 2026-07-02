'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--cream)]" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-block bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
            #1 Online Quran Academy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-foreground leading-tight mb-5 text-balance">
            Begin Your Journey{' '}
            <span className="text-[var(--teal)]">with Tajweed</span> in Our
            Online Quran Classes
            <br />
            <span className="text-[var(--gold)]">for Kids &amp; Adults</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
            Learn Quran online with certified teachers. Flexible timings, one-on-one sessions, and
            a free trial class available for students worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/trial"
              className="bg-[var(--gold)] hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded transition-colors text-base"
            >
              Start One Week For Free
            </Link>
            <Link
              href="/courses"
              className="flex items-center gap-2 border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white font-bold px-7 py-3.5 rounded transition-colors text-base"
            >
              Explore Courses
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {[
              { value: '1,200+', label: 'Active Students' },
              { value: '150+', label: 'Quran Teachers' },
              { value: '10K+', label: 'Students Passed' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-[var(--teal)]">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Main illustration card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)] aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4" aria-hidden>📖</div>
                <p className="text-2xl font-bold mb-1">بِسْمِ اللَّهِ</p>
                <p className="text-sm opacity-80">الرَّحْمَٰنِ الرَّحِيمِ</p>
              </div>
              {/* Play button overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Watch introduction video"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-all">
                  <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                </div>
              </button>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--teal)]/10 flex items-center justify-center">
                <span className="text-[var(--teal)] text-sm font-bold">★</span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Trustpilot Rated</p>
                <p className="text-xs text-muted-foreground">4.9 / 5 Stars</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-3"
            >
              <p className="text-xs font-bold text-[var(--teal)]">Free Trial</p>
              <p className="text-xs text-muted-foreground">No credit card needed</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Feature cards strip */}
      <div className="border-t border-border bg-white">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { title: 'Fast-track Your Quran Learning', icon: '⚡', href: '/courses' },
            { title: 'Online Quran Classes for Ladies', icon: '🌸', href: '/courses?audience=ladies' },
            { title: 'Online Quran Classes for Adults', icon: '📚', href: '/courses?audience=adults' },
          ].map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 p-5 hover:bg-[var(--cream)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--teal)]/10 group-hover:bg-[var(--teal)]/20 flex items-center justify-center text-xl transition-colors shrink-0">
                {card.icon}
              </div>
              <h3 className="font-bold text-sm text-foreground group-hover:text-[var(--teal)] transition-colors leading-snug">
                {card.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
