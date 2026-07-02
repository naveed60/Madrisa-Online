export default function CoursesLoading() {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-[var(--teal)] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground font-medium">Loading courses...</p>
      </div>
    </div>
  )
}
