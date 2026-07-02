'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ClipboardList, GraduationCap, BookOpen } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Book a Free Trial Class',
    description:
      'Fill out the form to book a free online Quran class. We will get back to you on WhatsApp to schedule your trial class.',
    cta: 'BOOK TRIAL',
    href: '/trial',
    color: 'bg-[var(--teal)]',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Take Your Free Lesson',
    description:
      'Take your free Quran lesson with a highly qualified teacher at your scheduled time — no payment or credit card required.',
    cta: 'CLAIM FREE LESSON',
    href: '/trial',
    color: 'bg-[var(--gold)]',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Enroll in Full Course',
    description:
      'After the demo class, easily choose a monthly plan, complete the registration, and unlock the full Online Quran Course.',
    cta: 'ENROLL NOW',
    href: '/pricing',
    color: 'bg-[var(--teal-dark)]',
  },
]

export function StepsSection() {
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Start to Learn Quran Online in{' '}
            <span className="text-[var(--teal)]">3 Easy Steps!</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Embark on your Quranic journey effortlessly. Begin learning Quran online in just three
            simple steps — making Quran education accessible like never before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-border" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-7 flex flex-col items-center text-center"
              >
                {/* Step number badge */}
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 ${step.color} text-white text-xs font-extrabold px-3 py-1 rounded-full`}
                >
                  {step.number}
                </div>

                <div
                  className={`w-16 h-16 rounded-full ${step.color}/10 flex items-center justify-center mb-5 mt-3`}
                >
                  <Icon className={`w-7 h-7 text-[var(--teal)]`} style={i === 1 ? { color: 'var(--gold)' } : i === 2 ? { color: 'var(--teal-dark)' } : {}} />
                </div>

                <h3 className="text-lg font-extrabold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{step.description}</p>

                <Link
                  href={step.href}
                  className={`mt-auto ${step.color} text-white text-xs font-bold px-5 py-2.5 rounded transition-opacity hover:opacity-90`}
                >
                  {step.cta}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
