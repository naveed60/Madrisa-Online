import type { Metadata } from 'next'
import { TopBar } from '@/components/layout/top-bar'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { PricingSection } from '@/components/pricing/pricing-section'
import { PricingFaq } from '@/components/pricing/pricing-faq'

export const metadata: Metadata = {
  title: 'Fees & Plans – Online Madrasa',
  description:
    'Affordable Quran learning plans for individuals and families. Choose the plan that fits your schedule and budget.',
}

export default function PricingPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)] py-16">
          <div className="container-custom text-center text-white">
            <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
              Simple Pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Fees &amp; Plans
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent, affordable pricing with no hidden fees. Start with a free trial and
              upgrade whenever you are ready.
            </p>
          </div>
        </section>

        <PricingSection />
        <PricingFaq />
      </main>
      <Footer />
    </>
  )
}
