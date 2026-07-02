'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, EyeOff, Loader2, UserPlus, CheckCircle2 } from 'lucide-react'

interface FieldErrors {
  name?: string
  email?: string
  password?: string
  confirm?: string
}

export function RegisterForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const redirectTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (redirectTimer.current) clearTimeout(redirectTimer.current)
    }
  }, [])

  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setServerError(null)
  }

  const validate = (): boolean => {
    const next: FieldErrors = {}
    if (!fields.name.trim() || fields.name.trim().length < 2)
      next.name = 'Please enter your full name'
    if (!fields.email || !/\S+@\S+\.\S+/.test(fields.email))
      next.email = 'Please enter a valid email'
    if (!fields.password || fields.password.length < 8)
      next.password = 'Password must be at least 8 characters'
    else if (!/[A-Z]/.test(fields.password))
      next.password = 'Password must contain at least one uppercase letter'
    else if (!/[0-9]/.test(fields.password))
      next.password = 'Password must contain at least one number'
    if (fields.confirm !== fields.password)
      next.confirm = 'Passwords do not match'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    setServerError(null)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          password: fields.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.message ?? 'Registration failed. Please try again.')
        return
      }

      setSuccess(true)
      redirectTimer.current = setTimeout(() => router.push('/auth/login'), 2000)
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center bg-white rounded-2xl shadow-lg border border-border p-10"
      >
        <CheckCircle2 className="w-14 h-14 text-[var(--teal)] mx-auto mb-4" />
        <h2 className="text-2xl font-extrabold text-foreground mb-2">Account Created!</h2>
        <p className="text-muted-foreground text-sm">
          Redirecting you to the login page...
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-foreground mb-1">Create an Account</h1>
          <p className="text-sm text-muted-foreground">
            Join thousands of students learning the Quran online
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3"
              role="alert"
            >
              {serverError}
            </motion.div>
          )}

          {/* Full name */}
          <div className="space-y-1.5">
            <label htmlFor="reg-name" className="block text-sm font-semibold text-foreground">
              Full Name
            </label>
            <input
              id="reg-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={fields.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--teal)] transition-shadow bg-white ${
                errors.name ? 'border-red-400' : 'border-input'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="reg-email" className="block text-sm font-semibold text-foreground">
              Email Address
            </label>
            <input
              id="reg-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={fields.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--teal)] transition-shadow bg-white ${
                errors.email ? 'border-red-400' : 'border-input'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label htmlFor="reg-password" className="block text-sm font-semibold text-foreground">
              Password
            </label>
            <div className="relative">
              <input
                id="reg-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={fields.password}
                onChange={handleChange}
                placeholder="Min 8 chars, 1 uppercase, 1 number"
                className={`w-full border rounded-lg px-4 py-3 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--teal)] transition-shadow bg-white ${
                  errors.password ? 'border-red-400' : 'border-input'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Confirm password */}
          <div className="space-y-1.5">
            <label htmlFor="reg-confirm" className="block text-sm font-semibold text-foreground">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="reg-confirm"
                name="confirm"
                type={showConfirm ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={fields.confirm}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className={`w-full border rounded-lg px-4 py-3 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--teal)] transition-shadow bg-white ${
                  errors.confirm ? 'border-red-400' : 'border-input'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirm && (
              <p className="text-xs text-red-600">{errors.confirm}</p>
            )}
          </div>

          {/* Terms */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            By registering you agree to our{' '}
            <Link href="/terms" className="text-[var(--teal)] hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[var(--teal)] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[var(--teal)] hover:bg-[var(--teal-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg transition-colors text-sm"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <UserPlus className="w-4 h-4" />
            )}
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[var(--teal)] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
