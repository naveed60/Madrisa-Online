'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { PRICING_PLANS } from '@/lib/data'

export function PricingSection() {
  return (
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
            Choose Your Learning Plan
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            All plans include a free trial class. No contracts, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border overflow-hidden flex flex-col ${
                plan.highlighted
                  ? 'border-[var(--teal)] shadow-2xl bg-[var(--teal)]'
                  : 'border-border shadow-md bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 text-center py-1.5 bg-[var(--gold)] text-white text-xs font-extrabold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.highlighted ? 'pt-12' : ''}`}>
                <h3
                  className={`text-xl font-extrabold mb-1 ${
                    plan.highlighted ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? 'text-white/70' : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="flex items-end gap-1 mb-8">
                  <span
                    className={`text-5xl font-extrabold leading-none ${
                      plan.highlighted ? 'text-white' : 'text-foreground'
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm pb-1 ${
                      plan.highlighted ? 'text-white/60' : 'text-muted-foreground'
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-[var(--gold)]' : 'text-[var(--teal)]'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-white/90' : 'text-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/trial"
                  className={`block w-full text-center font-bold py-3.5 rounded-lg transition-colors text-sm ${
                    plan.highlighted
                      ? 'bg-[var(--gold)] hover:bg-amber-600 text-white'
                      : 'bg-[var(--teal)] hover:bg-[var(--teal-dark)] text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/auth/register"
                  className={`mt-3 block w-full text-center font-bold py-3 rounded-lg transition-colors text-sm border ${
                    plan.highlighted
                      ? 'border-white/30 text-white hover:bg-white/10'
                      : 'border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white'
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 bg-white rounded-2xl border border-border p-8 text-center"
        >
          <h3 className="text-xl font-extrabold text-foreground mb-2">
            Not sure which plan to pick?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-lg mx-auto">
            Start with a free trial class — no credit card required. Our team will help you choose
            the right plan based on your goals and schedule.
          </p>
          <Link
            href="/trial"
            className="inline-block bg-[var(--gold)] hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
          >
            Book Your Free Class Today
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
