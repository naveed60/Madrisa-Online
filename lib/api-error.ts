import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export function handleApiError(error: unknown, tag: string) {
  if (error instanceof ZodError) {
    return NextResponse.json(
      { success: false, errors: error.errors },
      { status: 422 }
    )
  }

  console.error(`[${tag}]`, error)
  return NextResponse.json(
    { success: false, message: 'Something went wrong. Please try again.' },
    { status: 500 }
  )
}
