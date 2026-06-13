'use client'

export default function Duration({ from }: { from: string }) {
  const start = new Date(from)
  const now = new Date()

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  const parts: string[] = []
  if (years > 0) parts.push(`${years} yr${years !== 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} mo${months !== 1 ? 's' : ''}`)

  return <>{parts.join(' ')}</>
}
