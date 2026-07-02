'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--teal)] via-[var(--teal)] to-[var(--teal-dark)] p-10 md:p-16 text-center"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
              Start Your Journey Today
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 text-balance">
              We Prioritize Quality &amp; Strive for Student Satisfaction
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Join over 1,200 students worldwide who have transformed their Quran recitation with
              Online Madrasa. Your first week is completely free — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/trial"
                className="bg-[var(--gold)] hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Start Your Journey
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--teal)] font-bold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
