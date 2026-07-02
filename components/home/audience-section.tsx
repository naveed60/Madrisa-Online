'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const audiences = [
  {
    title: 'Online Quran Classes for Kids',
    description:
      'The Basic Online Quran classes for beginners or kids are specially designed for children who are either beginners or have little prior knowledge. Patient, engaging teachers make learning fun.',
    emoji: '👦',
    href: '/courses?audience=kids',
    color: 'from-[var(--teal)] to-[var(--teal-dark)]',
  },
  {
    title: 'Online Quran Classes for Adults',
    description:
      'The Online Quran classes for Adults are equally suitable for brothers and sisters who want to learn Quran with Tajweed and enhance their recitation skills at any stage of life.',
    emoji: '👨',
    href: '/courses?audience=adults',
    color: 'from-amber-500 to-amber-700',
  },
  {
    title: 'Online Quran Classes for Ladies',
    description:
      'Designed for Muslim sisters who want to enhance their understanding of the Quran. Learn from qualified female Quran teachers in a comfortable, private environment.',
    emoji: '👩',
    href: '/courses?audience=ladies',
    color: 'from-rose-500 to-rose-700',
  },
]

export function AudienceSection() {
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
          <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
            FOR EVERY AGE GROUP
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Quran Classes For Kids, Adults, &amp; Ladies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Discover Quranic teachings online with personalized Quran courses for kids, adults, and
            ladies — offering tailored curricula for an engaging and insightful learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* Color band */}
              <div
                className={`h-44 bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold text-foreground mb-3 group-hover:text-[var(--teal)] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[var(--teal)] text-sm font-bold hover:gap-3 transition-all"
                >
                  Read More
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
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
      </div>
    </section>
  )
}
