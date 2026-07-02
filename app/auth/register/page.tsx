import type { Metadata } from 'next'
import { RegisterForm } from '@/components/auth/register-form'

export const metadata: Metadata = {
  title: 'Register – Online Madrasa',
  description: 'Create your free Online Madrasa account and start learning Quran today.',
}

export default function RegisterPage() {
  return <RegisterForm />
}
