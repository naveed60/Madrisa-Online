'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { BookOpen, Clock, Users } from 'lucide-react'
import { COURSES } from '@/lib/data'

const FILTERS = ['ALL', 'QURAN', 'TAJWEED', 'ARABIC', 'ISLAMIC', 'MEMORIZATION']

const categoryColors: Record<string, string> = {
  QURAN: 'bg-[var(--teal)]/10 text-[var(--teal)]',
  TAJWEED: 'bg-amber-100 text-amber-700',
  ARABIC: 'bg-emerald-100 text-emerald-700',
  ISLAMIC: 'bg-rose-100 text-rose-700',
  MEMORIZATION: 'bg-indigo-100 text-indigo-700',
}

const gradients: Record<string, string> = {
  QURAN: 'from-[var(--teal)] to-[var(--teal-dark)]',
  TAJWEED: 'from-amber-500 to-amber-700',
  ARABIC: 'from-emerald-500 to-emerald-700',
  ISLAMIC: 'from-rose-500 to-rose-700',
  MEMORIZATION: 'from-indigo-500 to-indigo-700',
}

function getCourseEmoji(category: string) {
  const map: Record<string, string> = {
    QURAN: '📖', TAJWEED: '🎙️', ARABIC: '🌙', ISLAMIC: '🤲', MEMORIZATION: '🧠',
  }
  return map[category] ?? '📚'
}

export function CoursesGrid() {
  const [active, setActive] = useState('ALL')

  const filtered = active === 'ALL' ? COURSES : COURSES.filter((c) => c.category === active)

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
                active === f
                  ? 'bg-[var(--teal)] text-white border-[var(--teal)]'
                  : 'bg-white text-foreground border-border hover:border-[var(--teal)] hover:text-[var(--teal)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((course, i) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.07 }}
              className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Banner */}
              <div
                className={`relative h-44 bg-gradient-to-br ${
                  gradients[course.category] ?? 'from-[var(--teal)] to-[var(--teal-dark)]'
                } flex items-center justify-center overflow-hidden`}
              >
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {getCourseEmoji(course.category)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-white ${
                    categoryColors[course.category] ?? 'text-[var(--teal)]'
                  }`}
                >
                  {course.category}
                </span>
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 text-foreground">
                  {course.level}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-extrabold text-foreground mb-2 group-hover:text-[var(--teal)] transition-colors leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <BookOpen className="w-3.5 h-3.5" />
                    {course.lessons} Lessons
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    {course.enrolled} Enrolled
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5 flex-1">
                  {course.description}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="flex-1 text-center bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white text-sm font-bold py-2.5 rounded transition-colors"
                  >
                    View Course
                  </Link>
                  <Link
                    href="/trial"
                    className="flex-1 text-center border border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white text-sm font-bold py-2.5 rounded transition-colors"
                  >
                    Free Trial
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
