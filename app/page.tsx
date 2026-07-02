import { TopBar } from '@/components/layout/top-bar'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { StepsSection } from '@/components/home/steps-section'
import { AudienceSection } from '@/components/home/audience-section'
import { CoursesSection } from '@/components/home/courses-section'
import { StatsSection } from '@/components/home/stats-section'
import { FeaturesSection } from '@/components/home/features-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'
import { BlogSection } from '@/components/home/blog-section'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StepsSection />
        <AudienceSection />
        <CoursesSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}
