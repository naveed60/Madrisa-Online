import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { handleApiError } from '@/lib/api-error'

const trialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  country: z.string().optional(),
  courseId: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = trialSchema.parse(body)

    const booking = await prisma.trialBooking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone ?? '',
        country: data.country,
        courseId: data.courseId,
      },
    })

    return NextResponse.json({ success: true, id: booking.id }, { status: 201 })
  } catch (error) {
    return handleApiError(error, 'trial/POST')
  }
}
