const christmasDay = Date.UTC(2026, 11, 25)
const millisecondsPerDay = 24 * 60 * 60 * 1000

export function getDaysUntilChristmas(now: Date): number {
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
  return Math.round((christmasDay - today) / millisecondsPerDay)
}
