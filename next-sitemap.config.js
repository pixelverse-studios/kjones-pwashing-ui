const fs = require('fs')
const path = require('path')

const serviceCitySlugs = require('./src/lib/data/serviceCitySlugs.json')

const siteUrl = (
  process.env.SITE_URL || 'https://www.jonespressurewashing.com'
).replace(/\/$/, '')

const DEFAULT_PRIORITY = 0.6
const DEFAULT_CHANGEFREQ = 'monthly'

const priorityOverrides = new Map([
  ['/', 0.85],
  ['/about', 0.7],
  ['/faqs', 0.65]
])

const changefreqOverrides = new Map([
  ['/', 'weekly']
])

const rootPaths = ['/', '/about', '/faqs']
const serviceRoutes = collectServiceRoutes()
const staticPaths = Array.from(new Set([...rootPaths, ...serviceRoutes]))

function collectServiceRoutes() {
  const servicesDir = path.join(__dirname, 'src', 'app', 'services')
  const routes = new Set()
  const dynamicRoutes = []
  const pageRegex = /^page\.(t|j)sx?$/
  const appDir = path.join(__dirname, 'src', 'app')

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    entries.forEach(entry => {
      const entryPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        walk(entryPath)
      } else if (entry.isFile() && pageRegex.test(entry.name)) {
        const relative = path.relative(appDir, entryPath).replace(/\\/g, '/')
        let route = '/' + relative.replace(/\/page\.(t|j)sx?$/, '')
        route = route.replace(/\/index$/, '')
        if (route === '/page' || route === '/page.tsx') {
          route = '/'
        }
        if (route.includes('[')) {
          dynamicRoutes.push(route)
        } else {
          routes.add(route)
        }
      }
    })
  }

  walk(servicesDir)

  dynamicRoutes.forEach(route => {
    const serviceKey = route.split('/')[2]
    const slugs = serviceCitySlugs[serviceKey] || []
    slugs.forEach(slug => {
      routes.add(route.replace(/\[[^\]]+\]/g, slug))
    })
  })

  return Array.from(routes).sort()
}

function getPriority(pathname) {
  if (priorityOverrides.has(pathname)) {
    return priorityOverrides.get(pathname)
  }
  if (pathname.startsWith('/services/holiday-lighting')) {
    return 0.7
  }
  if (pathname.startsWith('/services/pressure-washing')) {
    return pathname.split('/').length > 3 ? 0.82 : 0.85
  }
  if (pathname.startsWith('/services/soft-washing')) {
    return pathname.split('/').length > 3 ? 0.8 : 0.83
  }
  if (pathname.startsWith('/services/additional')) {
    return 0.7
  }
  return DEFAULT_PRIORITY
}

function getChangefreq(pathname) {
  if (changefreqOverrides.has(pathname)) {
    return changefreqOverrides.get(pathname)
  }
  if (pathname.startsWith('/services/holiday-lighting')) {
    return 'yearly'
  }
  return DEFAULT_CHANGEFREQ
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: DEFAULT_CHANGEFREQ,
  priority: DEFAULT_PRIORITY,
  sitemapSize: 5000,
  transform: async (config, path) => {
    const priority = getPriority(path)
    const changefreq = getChangefreq(path)
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
    return staticPaths.map(loc => ({
      loc,
      changefreq: getChangefreq(loc),
      priority: getPriority(loc),
      lastmod
    }))
  }
}
