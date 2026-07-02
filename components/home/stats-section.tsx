'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { STATS } from '@/lib/data'

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10)
  const suffix = value.replace(/[0-9,]/g, '')
  const animated = useCountUp(numericTarget, 2000, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
        <span className="text-2xl" aria-hidden>
          {['🎓', '👨‍🏫', '📖', '⭐'][index] ?? '✨'}
        </span>
      </div>
      <div className="text-4xl font-extrabold text-white mb-1">
        {inView ? `${animated.toLocaleString()}${suffix}` : '0'}
      </div>
      <div className="text-white/70 text-sm font-medium">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 text-balance">
            Alhamdulillah We Have Reached Over
          </h2>
          <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
            Each achievement is a testament to dedication, perseverance, and the divine blessings
            that have illuminated our path.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>

        {/* Trustpilot strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-xl font-extrabold text-white mb-2">
              Top Ratings On Trustpilot
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Our commitment to excellence has earned us top Trustpilot ratings, reflecting the
              trust and satisfaction of our students worldwide.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="text-center">
              <div className="text-[#00b67a] text-3xl font-extrabold">4.9</div>
              <div className="text-[#00b67a] text-xl">★★★★★</div>
              <div className="text-white/60 text-xs mt-1">On Trustpilot</div>
            </div>
            <div className="text-center">
              <div className="text-white text-3xl font-extrabold">10K+</div>
              <div className="text-white/70 text-sm font-semibold">Students Passed</div>
              <div className="text-white/50 text-xs mt-1">Across all programs</div>
            </div>
            <Link
              href="/auth/register"
              className="bg-[var(--gold)] hover:bg-amber-600 text-white font-bold text-sm px-6 py-3 rounded transition-colors"
            >
              JOIN OUR FAMILY TODAY
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
