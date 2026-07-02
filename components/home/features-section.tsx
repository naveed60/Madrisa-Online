'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Globe, Shield, Award } from 'lucide-react'
import { FEATURES } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Clock,
  Users,
  Globe,
  Shield,
  Award,
}

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Why Online Madrasa?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide a world-class Quran learning experience with certified teachers, flexible
            scheduling, and a safe learning environment for students of all ages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? BookOpen
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
                className="group flex gap-5 p-6 rounded-2xl border border-border hover:border-[var(--teal)]/40 hover:shadow-md transition-all bg-white"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--teal)]/10 group-hover:bg-[var(--teal)] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[var(--teal)] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
