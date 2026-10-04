/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return process.env.CONTEXT === 'deploy-preview'
      ? [
          {
            source: '/:path*',
            headers: [
              { key: 'X-Robots-Tag', value: 'noindex, nofollow' }
            ]
          }
        ]
      : []
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**' // Allows any path under this hostname
      }
    ]
  }
}

export default nextConfig
