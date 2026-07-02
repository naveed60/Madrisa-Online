import { TopBar } from '@/components/layout/top-bar'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CoursesGrid } from '@/components/courses/courses-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online Quran Courses – Online Madrasa',
  description:
    'Browse all our Quran and Islamic courses including Noorani Qaida, Tajweed, Memorization, Tafseer, and Arabic Language.',
}

export default function CoursesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-gradient-to-br from-[var(--teal)] to-[var(--teal-dark)] py-16">
          <div className="container-custom text-center text-white">
            <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
              All Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Our Quran &amp; Islamic Courses
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive, structured courses taught by certified teachers. Start with a free
              trial and learn at your own pace from anywhere in the world.
            </p>
          </div>
        </section>

        <CoursesGrid />
      </main>
      <Footer />
    </>
  )
}
