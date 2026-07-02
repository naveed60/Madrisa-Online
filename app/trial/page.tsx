import type { Metadata } from 'next'
import { TopBar } from '@/components/layout/top-bar'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { TrialForm } from '@/components/trial/trial-form'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Trial Class – Online Madrasa',
  description:
    'Book your free Quran trial class. No credit card required. Learn from certified teachers at a time that suits you.',
}

const BENEFITS = [
  'Live one-on-one session with a certified teacher',
  'No credit card or payment required',
  'Choose a time that suits your timezone',
  'Assessment of your current level',
  'Guidance on which course is right for you',
  'Available for kids, adults, and ladies',
]

export default function TrialPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)] py-16">
          <div className="container-custom text-center text-white">
            <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
              100% Free
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Book Your Free Trial Class
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience our teaching method with a free one-on-one class. No commitment needed —
              just fill in the form and we will get in touch within 24 hours.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section className="py-20 bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                What to Expect
              </h2>
              <ul className="space-y-4 mb-10">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--teal)] shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Trust strip */}
              <div className="bg-[var(--cream)] rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-[#00b67a] text-2xl font-extrabold">4.9★</div>
                    <div className="text-xs text-muted-foreground">Trustpilot</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-[var(--teal)]">1,200+</div>
                    <div className="text-xs text-muted-foreground">Active Students</div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-[var(--teal)]">150+</div>
                    <div className="text-xs text-muted-foreground">Quran Teachers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl border border-border shadow-lg p-8">
              <h2 className="text-xl font-extrabold text-foreground mb-1">
                Request Your Free Class
              </h2>
              <p className="text-sm text-muted-foreground mb-7">
                We will contact you within 24 hours to confirm your slot.
              </p>
              <TrialForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
