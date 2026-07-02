'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen,
  Clock,
  Users,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Globe,
  Star,
} from 'lucide-react'
import type { Course } from '@/types'

const gradients: Record<string, string> = {
  QURAN: 'from-[var(--teal)] to-[var(--teal-dark)]',
  TAJWEED: 'from-amber-500 to-amber-700',
  ARABIC: 'from-emerald-500 to-emerald-700',
  ISLAMIC: 'from-rose-500 to-rose-700',
  MEMORIZATION: 'from-indigo-500 to-indigo-700',
}

const courseEmoji: Record<string, string> = {
  QURAN: '📖',
  TAJWEED: '🎙️',
  ARABIC: '🌙',
  ISLAMIC: '🤲',
  MEMORIZATION: '🧠',
}

const WHAT_YOU_LEARN = [
  'Proper Arabic letter pronunciation and articulation',
  'Tajweed rules applied to Quranic recitation',
  'Fluent reading with correct rhythm and flow',
  'Understanding key vocabulary and meanings',
  'Daily practice routines for consistent improvement',
  'Recitation assessment and progress tracking',
]

const CURRICULUM = [
  { week: 'Week 1–2', topic: 'Foundations & Arabic Alphabet' },
  { week: 'Week 3–4', topic: 'Basic Tajweed Rules' },
  { week: 'Week 5–6', topic: 'Applied Recitation Practice' },
  { week: 'Week 7–8', topic: 'Intermediate Fluency Building' },
  { week: 'Week 9–10', topic: 'Assessment & Certification' },
]

interface Props {
  course: Course
  related: Course[]
}

export function CourseDetail({ course, related }: Props) {
  if (!course) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-muted-foreground">
        Course not found.
      </div>
    )
  }

  const gradient = gradients[course.category] ?? 'from-[var(--teal)] to-[var(--teal-dark)]'
  const emoji = courseEmoji[course.category] ?? '📚'

  return (
    <>
      {/* Hero banner */}
      <section
        className={`relative bg-gradient-to-br ${gradient} py-20 overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-end pr-16">
          <span className="text-[20rem] leading-none">{emoji}</span>
        </div>
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{course.title}</span>
            </nav>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {course.category}
              </span>
              <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {course.level}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-balance leading-tight">
              {course.title}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: BookOpen, label: `${course.lessons} Lessons` },
                { icon: Clock, label: course.duration },
                { icon: Users, label: `${course.enrolled}+ Enrolled` },
                { icon: Star, label: '4.9 Rated' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/trial"
                className="bg-[var(--gold)] hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded transition-colors text-base"
              >
                Start Free Trial
              </Link>
              <Link
                href="/auth/register"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-3.5 rounded transition-colors text-base border border-white/30"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>

          {/* Side card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-white font-extrabold text-lg mb-6">Course Includes</h3>
              <ul className="space-y-4">
                {[
                  { icon: BookOpen, text: `${course.lessons} structured lessons` },
                  { icon: Clock, text: `${course.duration} program` },
                  { icon: GraduationCap, text: 'Certificate on completion' },
                  { icon: Globe, text: 'Learn from anywhere, any device' },
                  { icon: Users, text: 'One-on-one sessions with certified teacher' },
                  { icon: Star, text: 'Lifetime access to course materials' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-white/85 text-sm">
                    <Icon className="w-4 h-4 shrink-0 text-[var(--gold)]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-16 bg-white">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">
            {/* What you'll learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                What You&apos;ll Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {WHAT_YOU_LEARN.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Curriculum */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-extrabold text-foreground mb-6">Course Curriculum</h2>
              <div className="border border-border rounded-xl overflow-hidden divide-y divide-border">
                {CURRICULUM.map((item, i) => (
                  <div
                    key={item.week}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-[var(--cream)] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{item.week}</p>
                      <p className="text-sm font-semibold text-foreground">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Who is this for */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-2xl font-extrabold text-foreground mb-4">Who Is This For?</h2>
              <p className="text-muted-foreground leading-relaxed">
                This course is designed for students of all ages — from young children taking their
                first steps in Quran education to adults who want to strengthen their recitation and
                understanding. Whether you are a complete beginner or looking to refine existing
                skills, our certified teachers will tailor the sessions to your pace.
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enroll card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-border rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Starting from</span>
                <span className="text-2xl font-extrabold text-[var(--teal)]">$29<span className="text-sm text-muted-foreground font-normal">/mo</span></span>
              </div>
              <Link
                href="/trial"
                className="block w-full text-center bg-[var(--gold)] hover:bg-amber-600 text-white font-bold py-3.5 rounded-lg transition-colors mb-3"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="block w-full text-center border border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white font-bold py-3.5 rounded-lg transition-colors"
              >
                View Pricing Plans
              </Link>
              <p className="text-xs text-muted-foreground text-center mt-4">
                No credit card required for trial
              </p>

              <div className="mt-6 pt-5 border-t border-border space-y-3">
                {[
                  'Certified & experienced teachers',
                  'Flexible class timings',
                  'One-on-one live sessions',
                  'Progress reports',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[var(--teal)] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related courses */}
      {related && related.length > 0 && (
        <section className="py-16 bg-[var(--cream)]">
          <div className="container-custom">
            <h2 className="text-2xl font-extrabold text-foreground mb-8">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div
                    className={`h-36 bg-gradient-to-br ${
                      gradients[c.category] ?? 'from-[var(--teal)] to-[var(--teal-dark)]'
                    } flex items-center justify-center text-5xl`}
                  >
                    {courseEmoji[c.category] ?? '📚'}
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-foreground group-hover:text-[var(--teal)] transition-colors mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{c.description}</p>
                    <Link
                      href={`/courses/${c.slug}`}
                      className="text-sm font-bold text-[var(--teal)] hover:underline"
                    >
                      View Course &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
