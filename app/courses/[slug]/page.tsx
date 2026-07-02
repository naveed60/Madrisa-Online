import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { TopBar } from '@/components/layout/top-bar'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { CourseDetail } from '@/components/courses/course-detail'
import { COURSES } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)
  if (!course) return {}
  return {
    title: `${course.title} – Online Madrasa`,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)
  if (!course) notFound()

  const related = COURSES.filter((c) => c.slug !== slug && c.category === course.category).slice(0, 3)

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <CourseDetail course={course} related={related} />
      </main>
      <Footer />
    </>
  )
}
