const siteUrl = (
  process.env.SITE_URL || 'https://www.jonespressurewashing.com'
).replace(/\/$/, '')

const priorityMap = new Map([
  ['/', 0.85],
  ['/about', 0.7],
  ['/faqs', 0.65],
  ['/services/pressure-washing', 0.8],
  ['/services/soft-washing', 0.78],
  ['/services/additional', 0.65],
  ['/services/holiday-lighting', 1],
  ['/services/holiday-lighting/bergen-county', 0.98],
  ['/services/holiday-lighting/essex-county', 0.98]
])

const changefreqMap = new Map([
  ['/', 'weekly'],
  ['/about', 'monthly'],
  ['/faqs', 'monthly'],
  ['/services/pressure-washing', 'monthly'],
  ['/services/soft-washing', 'monthly'],
  ['/services/additional', 'monthly'],
  ['/services/holiday-lighting', 'yearly'],
  ['/services/holiday-lighting/bergen-county', 'yearly'],
  ['/services/holiday-lighting/essex-county', 'yearly']
])

const staticPaths = Array.from(
  new Set([...priorityMap.keys(), ...changefreqMap.keys()])
)

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.6,
  sitemapSize: 5000,
  transform: async (config, path) => {
    const priority = priorityMap.get(path) ?? config.priority
    const changefreq = changefreqMap.get(path) ?? config.changefreq
    const lastmod = config.autoLastmod ? new Date().toISOString() : undefined

    return {
      loc: path,
      changefreq,
      priority,
      lastmod
    }
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: []
  },
  additionalPaths: async () => {
    const lastmod = new Date().toISOString()

    return staticPaths.map(path => ({
      loc: path,
      changefreq: changefreqMap.get(path) ?? 'monthly',
      priority: priorityMap.get(path) ?? 0.6,
      lastmod
    }))
  }
}
