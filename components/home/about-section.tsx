'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'Certified Quran teachers with Ijaza',
  'One-on-one personalized classes',
  'Flexible scheduling 24/7',
  'Free trial class – no credit card needed',
  'Classes for all ages: kids, adults, ladies',
  'Students across USA, UK, Canada, Australia',
]

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
        {/* Left visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)] aspect-[4/3] flex items-center justify-center shadow-xl">
            <div className="text-center text-white p-10">
              <div className="text-5xl mb-5" aria-hidden>🕌</div>
              <p className="text-3xl font-bold mb-2">اَلْقُرْآنُ</p>
              <p className="text-base opacity-80 leading-relaxed">
                &ldquo;Indeed, it is We who sent down the Quran<br />and indeed, We will be its guardian.&rdquo;
              </p>
              <p className="text-sm opacity-60 mt-1">— Al-Hijr 15:9</p>
            </div>
          </div>

          {/* Stats overlay card */}
          <div className="absolute -bottom-6 -right-4 bg-white rounded-xl shadow-lg p-4 flex gap-5">
            {[
              { value: '1,200+', label: 'Students' },
              { value: '150+', label: 'Teachers' },
              { value: '113K+', label: 'Classes' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg font-extrabold text-[var(--teal)]">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
            DISCOVER THE JOY OF
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 text-balance">
            Learning Quran Online
          </h2>
          <div className="w-12 h-1 bg-[var(--gold)] rounded mb-5" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            We take you step by step with your children to learn Quran online with Tajweed. Online
            Madrasa takes pride in being the premier online Quran teaching service with 1,100+
            registered students, 150+ Quran tutors, and 113,000+ Quran classes conducted.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our platform serves as a beacon of knowledge, providing Quran courses to kids, ladies,
            adults, and new Muslims across the United States, United Kingdom, Australia, and Canada.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/trial"
            className="inline-block bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white font-bold px-7 py-3.5 rounded transition-colors"
          >
            Start One Week Free Trial
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
