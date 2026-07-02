'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle2, SendHorizonal } from 'lucide-react'
import { COURSES } from '@/lib/data'

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
}

export function TrialForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    courseId: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
      next.email = 'Please enter a valid email address'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    setServerError(null)

    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.message ?? 'Submission failed. Please try again.')
        return
      }

      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle2 className="w-16 h-16 text-[var(--teal)] mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold text-foreground mb-2">
          Request Received!
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Thank you, <strong>{fields.name}</strong>! Our team will contact you within 24 hours to
          schedule your free trial class.
        </p>
      </motion.div>
    )
  }

  return (
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

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Full name */}
        <div className="space-y-1.5">
          <label htmlFor="trial-name" className="block text-sm font-semibold text-foreground">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="trial-name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] bg-white placeholder:text-muted-foreground ${
              errors.name ? 'border-red-400' : 'border-input'
            }`}
          />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="trial-email" className="block text-sm font-semibold text-foreground">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="trial-email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] bg-white placeholder:text-muted-foreground ${
              errors.email ? 'border-red-400' : 'border-input'
            }`}
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="trial-phone" className="block text-sm font-semibold text-foreground">
            Phone Number
          </label>
          <input
            id="trial-phone"
            name="phone"
            type="tel"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            className="w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] bg-white placeholder:text-muted-foreground"
          />
        </div>

        {/* Country */}
        <div className="space-y-1.5">
          <label htmlFor="trial-country" className="block text-sm font-semibold text-foreground">
            Country
          </label>
          <input
            id="trial-country"
            name="country"
            type="text"
            value={fields.country}
            onChange={handleChange}
            placeholder="United Kingdom"
            className="w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] bg-white placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Course */}
      <div className="space-y-1.5">
        <label htmlFor="trial-course" className="block text-sm font-semibold text-foreground">
          Course of Interest
        </label>
        <select
          id="trial-course"
          name="courseId"
          value={fields.courseId}
          onChange={handleChange}
          className="w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] bg-white text-foreground"
        >
          <option value="">Select a course (optional)</option>
          {COURSES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 bg-[var(--gold)] hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors"
      >
        {isLoading ? (
          <Loader2 className="w-4.5 h-4.5 animate-spin" />
        ) : (
          <SendHorizonal className="w-4.5 h-4.5" />
        )}
        {isLoading ? 'Submitting...' : 'Book My Free Trial Class'}
      </button>
    </form>
  )
}
