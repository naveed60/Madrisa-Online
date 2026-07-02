import type { Metadata } from 'next'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Sign In – Online Madrasa',
  description: 'Sign in to your Online Madrasa account.',
}

export default function LoginPage() {
  return <LoginForm />
}
