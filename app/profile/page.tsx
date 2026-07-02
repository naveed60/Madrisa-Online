import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { User, Mail } from 'lucide-react'

export default async function ProfilePage() {
  let session
  try {
    session = await auth()
  } catch (error) {
    console.error('[PROFILE_PAGE_ERROR]', error)
    redirect('/auth/login')
  }

  if (!session?.user) redirect('/auth/login')

  return (
    <div className="min-h-screen bg-[var(--cream)] py-16 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[var(--teal)] flex items-center justify-center text-white font-bold text-3xl mb-4">
              {session.user.name?.charAt(0)?.toUpperCase() || session.user.email?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <h1 className="text-2xl font-extrabold text-foreground">{session.user.name || 'User'}</h1>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[var(--cream)] rounded-lg">
              <Mail className="w-5 h-5 text-[var(--teal)]" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-semibold text-foreground">{session.user.email}</p>
              </div>
            </div>
            {(session.user as { role?: string }).role && (
              <div className="flex items-center gap-3 p-3 bg-[var(--cream)] rounded-lg">
                <User className="w-5 h-5 text-[var(--teal)]" />
                <div>
                  <p className="text-xs text-muted-foreground">Role</p>
                  <p className="text-sm font-semibold text-foreground capitalize">{(session.user as { role?: string }).role?.toLowerCase()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
