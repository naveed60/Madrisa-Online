'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Clock, Users } from 'lucide-react'
import { COURSES } from '@/lib/data'

const categoryColors: Record<string, string> = {
  QURAN: 'bg-[var(--teal)]/10 text-[var(--teal)]',
  TAJWEED: 'bg-amber-100 text-amber-700',
  ARABIC: 'bg-emerald-100 text-emerald-700',
  ISLAMIC: 'bg-rose-100 text-rose-700',
  MEMORIZATION: 'bg-indigo-100 text-indigo-700',
}

export function CoursesSection() {
  const featured = COURSES.slice(0, 9)

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
            POPULAR COURSES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Our Arabic &amp; Islamic Courses
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore the richness of Arabic language and Islamic teachings with our comprehensive
            courses tailored for a profound understanding.
          </p>
        </motion.div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Course image / color band */}
              <div className="relative h-44 bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)] flex items-center justify-center overflow-hidden">
                <div className="text-6xl" aria-hidden>
                  {getCourseEmoji(course.category)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div
                  className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${
                    categoryColors[course.category] ?? 'bg-white/20 text-white'
                  } bg-white`}
                >
                  {course.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-extrabold text-foreground mb-2 group-hover:text-[var(--teal)] transition-colors">
                  {course.title}
                </h3>

                {/* Meta */}
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

                <Link
                  href={`/courses/${course.slug}`}
                  className="flex items-center gap-1 text-[var(--teal)] text-sm font-bold hover:text-[var(--teal-dark)] transition-colors mt-auto"
                >
                  Read More
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/courses"
            className="inline-block border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white font-bold px-8 py-3.5 rounded transition-colors"
          >
            View All Courses
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function getCourseEmoji(category: string): string {
  const map: Record<string, string> = {
    QURAN: '📖',
    TAJWEED: '🎙️',
    ARABIC: '🌙',
    ISLAMIC: '🤲',
    MEMORIZATION: '🧠',
  }
  return map[category] ?? '📚'
}
