import type { Metadata } from 'next'
import { TopBar } from '@/components/layout/top-bar'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AboutPageContent } from '@/components/about/about-page-content'

export const metadata: Metadata = {
  title: 'About Us – Online Madrasa',
  description:
    'Learn about Online Madrasa — our mission, values, and team of certified Quran teachers dedicated to helping students worldwide.',
}

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)] py-16">
          <div className="container-custom text-center text-white">
            <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              About Online Madrasa
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Founded with a mission to make authentic Quran education accessible to every Muslim,
              wherever they are in the world.
            </p>
          </div>
        </section>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  )
}
