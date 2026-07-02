'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, GraduationCap, Globe, Shield, Award } from 'lucide-react'

const VALUES = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description:
      'All our teachers hold Ijaza — a formal certification with a chain back to the Prophet (PBUH). We never compromise on quality.',
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description:
      'We serve students in the USA, UK, Canada, Australia, Europe, and beyond. Our platform is built for every timezone.',
  },
  {
    icon: Shield,
    title: 'Safe & Trusted',
    description:
      'Every teacher is background-checked and vetted. All sessions are supervised to ensure a safe learning environment.',
  },
  {
    icon: Award,
    title: 'Certified Outcomes',
    description:
      'Students receive certificates upon course completion, recognized by Islamic institutions worldwide.',
  },
]

const TEACHERS = [
  {
    name: 'Ustadh Ahmed Ali',
    title: 'Head of Quran Department',
    bio: 'Hafiz ul Quran with over 15 years of teaching experience. Certified in Tajweed and Tafseer.',
    initials: 'AA',
  },
  {
    name: 'Ustadha Fatima Hassan',
    title: 'Senior Female Quran Teacher',
    bio: 'Specialist in teaching children and ladies. Known for her patience and creative teaching methods.',
    initials: 'FH',
  },
  {
    name: 'Sheikh Omar Rashid',
    title: 'Arabic Language Specialist',
    bio: 'Native Arabic speaker with a degree in Islamic Studies. Teaches Arabic, Tafseer, and Ten Qirat.',
    initials: 'OR',
  },
  {
    name: 'Ustadh Bilal Khan',
    title: 'Tajweed Expert',
    bio: 'Certified in multiple recitation styles with Ijaza. Expert in teaching Tajweed rules with clarity.',
    initials: 'BK',
  },
]

export function AboutPageContent() {
  return (
    <>
      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5 text-balance">
              Making Authentic Quran Education Accessible to All
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Online Madrasa was founded to bridge the gap between students who want to learn the
              Quran and qualified teachers who can guide them properly. We believe every Muslim
              deserves access to authentic Islamic education, regardless of where they live.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through our platform, students receive live, one-on-one instruction from certified
              teachers who hold Ijaza — a formal chain of transmission that connects all the way
              back to the Prophet Muhammad (peace be upon him).
            </p>
            <ul className="space-y-3">
              {[
                'Over 1,200 active students in 50+ countries',
                '150+ certified and vetted Quran teachers',
                'Available 24/7 across all time zones',
                '4.9-star rated on Trustpilot',
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[var(--teal)] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { value: '1,200+', label: 'Active Students' },
              { value: '150+', label: 'Quran Teachers' },
              { value: '113K+', label: 'Classes Conducted' },
              { value: '10K+', label: 'Students Passed' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="bg-[var(--cream)] rounded-2xl p-6 text-center border border-border"
              >
                <div className="text-3xl font-extrabold text-[var(--teal)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 text-balance">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Everything we do is guided by our commitment to authentic Islamic education.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--teal)]/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-[var(--teal)]" />
                </div>
                <h3 className="font-extrabold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 text-balance">
              Meet Our Teachers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              All our teachers are certified, experienced, and passionate about helping students
              connect with the Quran.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEACHERS.map((teacher, i) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[var(--cream)] rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--teal)] text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {teacher.initials}
                </div>
                <h3 className="font-extrabold text-foreground mb-0.5">{teacher.name}</h3>
                <p className="text-xs font-semibold text-[var(--gold)] mb-3">{teacher.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{teacher.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-balance">
            Start Learning with Our Expert Teachers
          </h2>
          <p className="text-white/75 max-w-lg mx-auto leading-relaxed mb-8">
            Book a free trial class today and experience the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/trial"
              className="bg-[var(--gold)] hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Book Free Trial
            </Link>
            <Link
              href="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--teal)] font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
