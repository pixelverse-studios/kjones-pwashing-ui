const christmasDay = Date.UTC(2026, 11, 25)
const millisecondsPerDay = 24 * 60 * 60 * 1000

export function getChristmasCountdownLabel(now: Date): string | null {
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).formatToParts(now)

  const year = Number(dateParts.find(part => part.type === 'year')?.value)
  const month = Number(dateParts.find(part => part.type === 'month')?.value)
  const day = Number(dateParts.find(part => part.type === 'day')?.value)
  const today = Date.UTC(year, month - 1, day)
  const daysRemaining = Math.round((christmasDay - today) / millisecondsPerDay)

  if (daysRemaining < 0) return null
  if (daysRemaining === 0) return 'Christmas Day'

  return `${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} until Christmas`
}
