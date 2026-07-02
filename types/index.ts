export type CourseCategory =
  | 'QURAN'
  | 'TAJWEED'
  | 'ARABIC'
  | 'ISLAMIC'
  | 'MEMORIZATION'

export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  image: string
  lessons: number
  duration: string
  enrolled: number
  category: CourseCategory
  level: CourseLevel
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  highlighted: boolean
}

export interface Testimonial {
  id: string
  name: string
  country: string
  rating: number
  review: string
  avatar: string | null
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  publishedAt: string
}
