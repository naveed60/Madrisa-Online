'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Is there a free trial available?',
    a: 'Yes! We offer a free trial class for all new students. No credit card is required to book your trial. Simply fill in the form and we will schedule your first class.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    q: 'What happens after the free trial?',
    a: "After your free trial class, you can choose a plan that suits your needs. There is no automatic charge — you decide when and how to continue.",
  },
  {
    q: 'Are the classes one-on-one?',
    a: 'Yes. All our classes are conducted in private, one-on-one sessions via Zoom or Skype. This ensures personalized attention and faster progress.',
  },
  {
    q: 'Can I request a specific teacher?',
    a: 'Yes. After your trial class, you can request to continue with the same teacher or select a different one based on availability.',
  },
  {
    q: 'Is there a contract or minimum commitment?',
    a: 'No contracts at all. Our plans are monthly and you can cancel at any time without any penalties.',
  },
  {
    q: 'What timings are available?',
    a: 'We are available 24/7 to accommodate students across all time zones — USA, UK, Canada, Australia, Europe, and beyond.',
  },
]

export function PricingFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Everything you need to know about our plans and classes.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[var(--cream)] transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-foreground text-sm leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4.5 h-4.5 text-[var(--teal)] shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
