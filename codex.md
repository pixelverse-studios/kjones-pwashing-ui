# Jones Pressure Washing - Development Guide for Claude Code

## Project Overview

Jones Pressure Washing is a local service business website showcasing professional pressure washing and soft washing services in Bergen and Essex County, New Jersey. Built with Next.js 14, this conversion-focused marketing site emphasizes trust, local expertise, and professional service quality to drive quote requests and customer bookings.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Color System
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons (fa6)
- **Fonts**: Inter (body) + Poppins (headings)
- **Analytics**: SiteBehaviour tracking
- **Forms**: Markate widget (embedded iframe)
- **Sitemap**: next-sitemap
- **Hosting**: Vercel (recommended)

## Project Structure

```
kjones-pwashing-ui/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage
│   │   ├── layout.tsx                  # Root layout with metadata
│   │   ├── globals.css                 # Global styles & CSS variables
│   │   ├── about/page.tsx              # About page
│   │   ├── faqs/page.tsx               # FAQs page
│   │   └── services/
│   │       ├── pressure-washing/page.tsx
│   │       ├── soft-washing/page.tsx
│   │       └── additional/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx                  # Navigation with dropdown
│   │   ├── Footer.tsx                  # Site footer
│   │   ├── home/                       # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   └── ServiceAreas.tsx
│   │   ├── services/                   # Service page components
│   │   │   ├── ServiceHero.tsx
│   │   │   ├── ServiceExamples.tsx
│   │   │   ├── ServiceHighlights.tsx
│   │   │   ├── ServiceProcess.tsx
│   │   │   └── ServiceCta.tsx
│   │   ├── cta/
│   │   │   └── CtaModal.tsx            # Quote request modal
│   │   └── ui/                         # Reusable UI components
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── sheet.tsx
│   │       ├── navigation-menu.tsx
│   │       └── accordion.tsx
│   ├── lib/
│   │   ├── utils.ts                    # Utility functions (cn)
│   │   ├── constants.ts                # Contact info map
│   │   ├── types/
│   │   │   └── services.tsx            # TypeScript interfaces
│   │   └── services/                   # Service content data
│   │       ├── pressureWashingServices.ts
│   │       ├── softWashingServices.ts
│   │       └── additionalServices.ts
│   └── public/
│       ├── logo-black.jpg              # Black logo variant
│       ├── logo-gray.png               # Gray logo variant
│       ├── Homepage.jpg                # Hero background
│       ├── PressureBG.jpeg             # Pressure washing bg
│       ├── robots.txt                  # SEO robots file
│       └── [various service images]
├── tailwind.config.ts                  # Tailwind configuration
├── next.config.mjs                     # Next.js config
├── next-sitemap.config.js              # Sitemap generation
├── components.json                     # shadcn/ui config
└── package.json                        # Dependencies
```

## Core Brand & Messaging

### Brand Identity

```typescript
const BRAND_COLORS = {
  primary: '#D4AF37', // Gold - trust, quality, premium
  black: '#000000', // Sophistication, professionalism
  white: '#FFFFFF', // Cleanliness, clarity
  gray: '#808080', // Secondary, neutral
  blue: '#0000FF' // Accent (minimal use)
}

const BRAND_FONTS = {
  headings: 'Poppins', // Bold, modern, professional
  body: 'Inter' // Clean, readable, web-optimized
}
```

### Value Proposition

```typescript
const CORE_MESSAGE = {
  headline:
    'Professional Pressure & Soft Washing For Homes and Businesses in New Jersey',

  tagline: "We treat your property like it's our own",

  serviceArea: 'Bergen & Essex County, NJ',

  differentiators: [
    'Licensed and insured',
    'Locally owned and operated',
    'Residential and commercial',
    'Satisfaction guaranteed',
    'Free estimates'
  ],

  tone: 'Professional, trustworthy, neighborly, experienced'
}
```

### Audit File Template:

```markdown
# Audit Log - Landing Page - [Date Time]

## Prompt Summary

[Summarize what the user asked for]

## Actions Taken

1. [List each action performed]
2. [Include files created/modified]
3. [Note any decisions made]

## Files Changed

- `apps/landing/path/to/file1.tsx` - [Brief description of changes]
- `apps/landing/path/to/file2.ts` - [Brief description of changes]

## Components/Features Affected

- [Component/Feature name]
- [Related dependencies]

## Testing Considerations

- [What should be tested]
- [Potential edge cases]
- [Device/browser testing needs]

## Performance Impact

- [Bundle size changes]
- [Loading time considerations]
- [SEO implications]

## Next Steps

- [Suggested follow-up tasks]
- [A/B testing opportunities]

## Notes

[Any additional context, warnings, or important information]

## Timestamp

Created: YYYY-MM-DD HH:MM:SS Page Section: [hero/features/pricing/etc]
```

### Target Audience

```typescript
interface CustomerPersona {
  type: string
  needs: string[]
  concerns: string[]
  conversion_drivers: string[]
}

const CUSTOMER_PERSONAS: CustomerPersona[] = [
  {
    type: 'Homeowners',
    needs: [
      'Clean driveways and walkways',
      'Restore home exterior appearance',
      'Remove mold and algae safely',
      'Increase curb appeal and property value'
    ],
    concerns: [
      'Damage to property',
      'Pricing transparency',
      'Professionalism and reliability',
      'Local references'
    ],
    conversion_drivers: [
      'Before/after photos',
      'Free estimates',
      'Insurance and licensing',
      'Local reputation'
    ]
  },
  {
    type: 'Business Owners',
    needs: [
      'Maintain professional appearance',
      'Clean storefronts and parking lots',
      'Scheduled maintenance programs',
      'Minimal disruption to operations'
    ],
    concerns: [
      'Cost vs value',
      'Scheduling flexibility',
      'Consistency and reliability',
      'Commercial insurance coverage'
    ],
    conversion_drivers: [
      'Commercial portfolio',
      'Flexible scheduling',
      'Contract options',
      'Professional references'
    ]
  }
]
```

## Component Implementation Guide

### Homepage Structure

```typescript
// app/page.tsx
export default function Home() {
  return (
    <main>
      <HeroSection />        // Full-screen hero with CTA
      <ServicesSection />    // 4-card service grid
      <TrustSection />       // Social proof, credentials
      <ServiceAreas />       // Geographic coverage
    </main>
  );
}
```

### Hero Section Pattern

```typescript
// components/home/HeroSection.tsx
/**
 * Full-viewport hero with background image and overlay
 * - Background: /Homepage.jpg with overlay
 * - Content: Headline + tagline + dual CTAs
 * - Responsive: Stacked on mobile, side-by-side on desktop
 */
const HeroSection = () => {
  return (
    <div className="relative page nav-offset flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0"
           style={{ backgroundImage: "url('/Homepage.jpg')" }} />

      {/* Content overlay */}
      <div className="text-white relative z-10 max-w-custom w-full mx-auto px-6 py-8">
        <div className="max-w-xl bg-black-clear p-8 rounded-lg shadow-xl">
          <h1>Professional <span className="text-primary">Pressure & Soft Washing</span></h1>
          <p>We treat your property like it's our own</p>

          {/* Dual CTA pattern */}
          <div className="flex gap-4">
            <CtaModal label="Request Your Free Estimate" variant="default" />
            <Link href="/about">Learn More About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
```

### Service Card Grid

```typescript
// components/home/Services.tsx
/**
 * 4-column responsive grid showcasing service categories
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 4 columns
 * - Each card: Icon + Title + Description + Link
 */
const ServiceCard = ({ title, description, icon: Icon, route }) => {
  return (
    <div className="bg-black border-primary border p-8 rounded-lg">
      <Icon className="text-primary mb-4" size={40} />
      <h3>{title}</h3>
      <p className="text-white">{description}</p>
      <Link href={route}>Learn More</Link>
    </div>
  );
};

// Grid layout with 4 service types
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
  <ServiceCard {...residentialPressure} />
  <ServiceCard {...commercialPressure} />
  <ServiceCard {...softWashing} />
  <ServiceCard {...otherServices} />
</div>
```

### Navigation Component

```typescript
// components/Navbar.tsx
/**
 * Fixed header with dropdown menu for services
 * - Desktop: Horizontal menu with dropdowns
 * - Mobile: Hamburger menu with slide-out sheet
 * - Logo: Left-aligned
 * - CTA: "Get a Quote" button always visible
 */
const Navbar = () => {
  return (
    <header className="bg-nav fixed top-0 w-full z-50">
      <div className="max-w-custom mx-auto px-6 py-4 flex justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo-gray.png" alt="Jones Pressure Washing" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <Link href="/about">About</Link>

            {/* Services dropdown */}
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="/services/pressure-washing">Pressure Washing</Link>
              <Link href="/services/soft-washing">Soft Washing</Link>
              <Link href="/services/additional">Additional Services</Link>
            </NavigationMenuContent>

            <Link href="/faqs">FAQs</Link>
          </NavigationMenu>
          <CtaModal label="Get a Quote" />
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger><Menu /></SheetTrigger>
          <SheetContent>{/* Mobile nav items */}</SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
```

### CTA Modal Pattern

```typescript
// components/cta/CtaModal.tsx
/**
 * Reusable modal for quote requests
 * - Embeds Markate contact form via iframe
 * - Animated with Framer Motion
 * - Triggers: Buttons throughout site
 */
export default function CtaModal({ label, variant, buttonClass }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={buttonClass}>
          {label}
        </Button>
      </DialogTrigger>

      <DialogContent className="h-3/4 p-8">
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <DialogHeader>
              <DialogTitle>Get Your Free Quote</DialogTitle>
              <DialogDescription>We'll Take It From Here</DialogDescription>
            </DialogHeader>

            {/* Embedded Markate form */}
            <iframe
              src="https://www.markate.com/public/widget/contact?id=..."
              className="h-[90%] w-full"
              style={{ border: 'none' }}
            />
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
```

### Service Page Template

```typescript
// app/services/[service]/page.tsx
/**
 * Consistent layout for all service pages:
 * 1. ServiceHero - Full-width hero with title & description
 * 2. ServiceExamples - Grid of specific service types
 * 3. ServiceHighlights - Feature highlights with icons
 * 4. ServiceProcess - Step-by-step process
 * 5. ServiceCta - Final conversion call-to-action
 */
export default function ServicePage() {
  return (
    <main>
      <ServiceHero
        img="/PressureBG.jpeg"
        h1="Professional Pressure Washing Services"
        description="Safe, effective cleaning for homes and businesses"
      />

      <ServiceExamples
        h2="Pressure Washing for Homes"
        examples={services}  // From lib/services/
      />

      <ServiceHighlights
        h2="Pressure Washing for Businesses"
        highlights={highlights}
      />

      <ServiceProcess
        header="How Our Process Works"
        steps={steps}
      />

      <ServiceCta
        header="Ready to Restore Your Property?"
        cta="Request a Free Estimate"
      />
    </main>
  );
}
```

## Data Structure Patterns

### Service Content Schema

```typescript
// lib/types/services.tsx
export interface ServiceExampleType {
  img: string // Image path from /public
  imgAlt: string // Accessibility text
  header: string // Service name
  description: string // Brief description
}

export interface ServiceHighlightType {
  Icon: React.ComponentType // React Icons component
  header: string
  description: string
}

export interface ProcessStepType {
  position: number // Step order (1-5)
  header: string // Step title
  description: string // Step details
}

// lib/services/pressureWashingServices.ts
const services: ServiceExampleType[] = [
  {
    img: '/Driveway.jpg',
    imgAlt: 'Concrete driveway cleaning',
    header: 'Concrete',
    description: 'Remove stains, grime, and mildew from driveways...'
  }
  // ... more services
]

export default { services, highlights, steps }
```

### Constants and Configuration

```typescript
// lib/constants.ts
const ContactMap = new Map()
ContactMap.set('email', 'Hello@jonespressurewashingnj.com')
ContactMap.set('phone', '(973) 486-4403')
// ContactMap.set('instagram', 'https://instagram.com/...');
// ContactMap.set('facebook', 'https://facebook.com/...');

export { ContactMap }
```

## Styling System

### Custom CSS Variables

```css
/* app/globals.css */
:root {
  --gold: #d4af37;
  --black: #000000;
  --white: #ffffff;
  --gray: #808080;
  --blue: #0000ff;

  --font-inter: 'Inter', sans-serif;
  --font-poppins: 'Poppins', sans-serif;
}
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--gold)', // Brand gold
        black: {
          DEFAULT: 'var(--black)',
          clear: 'rgba(0,0,0,0.65)' // Overlay backgrounds
        },
        nav: 'rgba(0,0,0,0.4)', // Navbar overlay
        accent: 'var(--blue)'
      },
      maxWidth: {
        custom: '1400px' // Container max-width
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)']
      }
    }
  }
}
```

### Common Utility Classes

```typescript
// Frequently used patterns
const COMMON_CLASSES = {
  container: 'max-w-custom mx-auto px-6 py-8',
  section: 'bg-black',
  heading: 'text-white mb-4',
  overlay: 'bg-black-clear p-8 rounded-lg shadow-xl',
  button: 'rounded-full h-12 px-6',
  card: 'bg-black border-primary border p-8 rounded-lg'
}
```

## SEO & Metadata

### Root Layout Metadata

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title:
    'Jones Pressure Washing | Professional Pressure & Soft Washing in New Jersey',
  description:
    'Professional pressure washing and soft washing services for homes and businesses in Bergen and Essex County, NJ. Licensed, insured, and locally owned.',

  metadataBase: new URL('https://www.jonespressurewashing.com'),

  openGraph: {
    title:
      'Jones Pressure Washing | Professional Pressure & Soft Washing in NJ',
    description:
      'Expert pressure washing services for residential and commercial properties...',
    type: 'website',
    images: ['/logo-black.jpg']
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jones Pressure Washing | NJ Pressure Washing Services',
    images: ['/logo-black.jpg']
  }
}
```

### Structured Data (Schema.org)

```typescript
// Homepage schema
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Jones Pressure Washing',
  url: 'https://jonespressurewashing.com',
  telephone: '(973) 486-4403',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bergen County',
    addressRegion: 'NJ',
    addressCountry: 'US'
  },
  priceRange: '$$',
  servesCuisine: 'Pressure Washing Services'
}

// Service page schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Pressure Washing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: '(973) 486-4403'
  },
  areaServed: [
    { '@type': 'County', name: 'Bergen County' },
    { '@type': 'County', name: 'Essex County' }
  ]
}
```

### Sitemap Configuration

```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.jonespressurewashing.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
```

## Analytics & Tracking

### SiteBehaviour Integration

```typescript
// app/layout.tsx - Analytics script
<Script
  id="sitebehavior-init"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var sbSiteSecret = '368a4814-73ce-42ec-82ee-7d929fde4209';
        window.sitebehaviourTrackingSecret = sbSiteSecret;
        var scriptElement = document.createElement('script');
        scriptElement.async = true;
        scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
        document.head.appendChild(scriptElement);
      })();
    `
  }}
/>
```

### Key Events to Track

```typescript
const TRACKING_EVENTS = {
  quote_request: 'User opened quote modal',
  quote_submitted: 'User submitted quote form',
  service_page_view: 'User viewed service page',
  phone_click: 'User clicked phone number',
  email_click: 'User clicked email address',
  navigation_click: 'User clicked navigation item'
}
```

## Image Optimization

### Image Guidelines

```typescript
const IMAGE_SPECS = {
  hero_backgrounds: {
    size: 'Large (1920x1080 recommended)',
    format: 'JPEG for photos',
    optimization: 'Compress to < 500KB',
    location: '/public/'
  },

  logos: {
    formats: ['PNG (transparent)', 'JPG (solid bg)'],
    variants: ['logo-black.jpg', 'logo-gray.png'],
    sizes: 'Multiple sizes for different contexts'
  },

  service_images: {
    size: 'Medium (1200x800 recommended)',
    format: 'JPEG',
    optimization: 'Balance quality and load time',
    naming: 'Descriptive (Driveway.jpg, Fence Cleaning.jpg)'
  }
}
```

### Next.js Image Component Pattern

```typescript
// Use Next.js Image for optimization
import Image from 'next/image';

<Image
  src="/logo-gray.png"
  alt="Jones Pressure Washing"
  width={120}
  height={60}
  className="h-auto w-auto"
  priority  // For above-fold images
/>
```

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Opens http://localhost:3000

# Build for production
npm run build

# Generate sitemap (runs after build)
npm run postbuild

# Start production server
npm start

# Linting
npm run lint
```

### Environment Setup

```bash
# .env.local (create this file)
SITE_URL=https://www.jonespressurewashing.com

# For development
SITE_URL=http://localhost:3000
```

### File Naming Conventions

```typescript
const NAMING_CONVENTIONS = {
  components: 'PascalCase (ServiceCard.tsx)',
  utilities: 'camelCase (utils.ts)',
  types: 'camelCase with .tsx (services.tsx)',
  constants: 'camelCase (constants.ts)',
  pages: 'kebab-case directories (pressure-washing/)',
  images: 'Descriptive with spaces or PascalCase'
}
```

## Component Customization Guide

### Adding a New Service

```typescript
// 1. Create service data file
// lib/services/newService.ts
import { ServiceExampleType, ServiceHighlightType, ProcessStepType } from '../types/services';

const services: ServiceExampleType[] = [
  {
    img: '/NewService.jpg',
    imgAlt: 'Description',
    header: 'Service Name',
    description: 'Service description...'
  }
];

const highlights: ServiceHighlightType[] = [...];
const steps: ProcessStepType[] = [...];

export default { services, highlights, steps };

// 2. Create service page
// app/services/new-service/page.tsx
import ServiceHero from '@/components/services/ServiceHero';
import newService from '@/lib/services/newService';

export default function NewServicePage() {
  return (
    <main>
      <ServiceHero img="/NewServiceBG.jpg" h1="New Service" />
      <ServiceExamples examples={newService.services} />
      {/* ... other sections */}
    </main>
  );
}

// 3. Add to navigation
// components/Navbar.tsx - Add to dropdown
<Link href="/services/new-service">New Service</Link>
```

### Updating Contact Information

```typescript
// lib/constants.ts
const ContactMap = new Map()
ContactMap.set('email', 'newemail@jonespressurewashingnj.com')
ContactMap.set('phone', '(973) XXX-XXXX')
ContactMap.set('instagram', 'https://instagram.com/username')
ContactMap.set('facebook', 'https://facebook.com/username')

// This automatically updates all references throughout the site
```

### Modifying Brand Colors

```typescript
// 1. Update CSS variables
// app/globals.css
:root {
  --gold: #YOUR_NEW_COLOR;
  --black: #YOUR_NEW_COLOR;
}

// 2. Update Tailwind config if needed
// tailwind.config.ts
colors: {
  primary: '#YOUR_NEW_COLOR'
}

// All components using these variables will update automatically
```

## Performance Optimization

### Current Optimizations

```typescript
const OPTIMIZATIONS = {
  fonts: 'Google Fonts with display:swap',
  images: 'Next.js Image component with lazy loading',
  code_splitting: 'Automatic with Next.js App Router',
  css: 'Tailwind CSS purging in production',
  scripts: 'strategy="afterInteractive" for analytics'
}
```

### Performance Targets

```typescript
const PERFORMANCE_TARGETS = {
  LCP: '< 2.5s (Largest Contentful Paint)',
  FID: '< 100ms (First Input Delay)',
  CLS: '< 0.1 (Cumulative Layout Shift)',
  page_size: '< 1MB initial load',
  time_to_interactive: '< 3s on 3G'
}
```

### Optimization Checklist

- [ ] Compress all images before uploading
- [ ] Use WebP format where possible
- [ ] Enable caching headers on Vercel
- [ ] Minimize third-party scripts
- [ ] Use React.lazy() for heavy components
- [ ] Monitor bundle size with next build
- [ ] Test on mobile devices
- [ ] Verify Core Web Vitals in Google Search Console

## Accessibility Standards

### WCAG 2.1 AA Compliance

```typescript
const ACCESSIBILITY_REQUIREMENTS = {
  color_contrast: 'Minimum 4.5:1 for normal text',
  focus_indicators: 'Visible focus states on all interactive elements',
  alt_text: 'Descriptive alt text for all images',
  semantic_html: 'Proper heading hierarchy (h1 > h2 > h3)',
  keyboard_navigation: 'All functionality accessible via keyboard',
  aria_labels: 'ARIA labels for icon-only buttons'
}
```

### Implementation Examples

```typescript
// Image with alt text
<Image src="/Driveway.jpg" alt="Clean residential driveway after pressure washing" />

// Button with accessible label
<Button aria-label="Request a free quote">Get a Quote</Button>

// Navigation with ARIA
<nav aria-label="Main navigation">
  <NavigationMenu>...</NavigationMenu>
</nav>

// Modal with proper ARIA
<Dialog aria-describedby="contact-form-modal">
  <DialogTitle>Get Your Free Quote</DialogTitle>
  <DialogDescription>We'll Take It From Here</DialogDescription>
</Dialog>
```

## Deployment

### Vercel Deployment (Recommended)

```bash
# 1. Connect GitHub repo to Vercel
# 2. Configure build settings:
Build Command: npm run build
Output Directory: .next
Install Command: npm install

# 3. Environment variables
SITE_URL: https://www.jonespressurewashing.com

# 4. Domain configuration
# Add custom domain in Vercel dashboard
# Update DNS records as instructed
```

### Pre-Deployment Checklist

- [ ] Update SITE_URL in environment variables
- [ ] Test all forms and CTAs
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Test navigation on all pages
- [ ] Verify contact information is correct
- [ ] Test quote modal functionality
- [ ] Check schema.org markup validity
- [ ] Verify sitemap generates correctly
- [ ] Test analytics tracking
- [ ] SSL certificate configured
- [ ] Custom domain pointing correctly

### Post-Deployment Tasks

- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics/SiteBehaviour tracking
- [ ] Test contact form submissions
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring
- [ ] Create regular backup schedule
- [ ] Monitor conversion rates

## Maintenance & Updates

### Regular Maintenance Tasks

```typescript
const MAINTENANCE_SCHEDULE = {
  weekly: [
    'Monitor analytics for traffic patterns',
    'Check contact form submissions',
    'Review website performance metrics'
  ],

  monthly: [
    'Update service images if new work completed',
    'Review and update FAQ content',
    'Check for broken links',
    'Update npm dependencies (security patches)',
    'Review and optimize slow-loading pages'
  ],

  quarterly: [
    'Major dependency updates',
    'Content refresh and SEO optimization',
    'Competitor analysis',
    'A/B test new CTA variations',
    'Update testimonials/reviews'
  ],

  annually: [
    'Full security audit',
    'Accessibility compliance review',
    'Brand refresh evaluation',
    'Technology stack review'
  ]
}
```

### Content Update Procedures

```typescript
// Adding new before/after photos
// 1. Optimize image (compress to < 500KB)
// 2. Upload to /public folder with descriptive name
// 3. Update service data file
const newExample: ServiceExampleType = {
  img: '/NewPhoto.jpg',
  imgAlt: 'Description of work completed',
  header: 'Service Type',
  description: 'Brief description'
}

// Updating service descriptions
// 1. Edit lib/services/[service].ts
// 2. Update description text
// 3. Test changes locally
// 4. Deploy to production

// Adding testimonials
// 1. Create new TrustSection or testimonial component
// 2. Add testimonial content with customer name/location
// 3. Consider schema.org Review markup for SEO
```

## Troubleshooting

### Common Issues

#### CTA Modal Not Opening

```typescript
// Check:
1. Button has proper DialogTrigger wrapper
2. Dialog component imported from @/components/ui/dialog
3. No conflicting z-index values
4. Markate iframe URL is correct and accessible
```

#### Navigation Dropdown Not Working

```typescript
// Check:
1. NavigationMenu components properly nested
2. Client component ('use client') directive present
3. Radix UI dependencies installed
4. No CSS conflicts with dropdown positioning
```

#### Images Not Loading

```typescript
// Check:
1. Image files exist in /public directory
2. File names match exactly (case-sensitive)
3. Image paths start with / (absolute path)
4. Next.js Image component properly configured
5. Remote image patterns configured in next.config.mjs
```

#### Styling Not Applied

```typescript
// Check:
1. Tailwind classes spelled correctly
2. Custom CSS variables defined in globals.css
3. className (not class) in React components
4. cn() utility used for conditional classes
5. Tailwind config includes correct content paths
```

### Debug Commands

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check build errors
npm run build

# Verify TypeScript
npx tsc --noEmit

# Check for unused dependencies
npx depcheck
```

## Key Contact & Integration Details

### Third-Party Integrations

```typescript
const INTEGRATIONS = {
  analytics: {
    name: 'SiteBehaviour',
    secret: '368a4814-73ce-42ec-82ee-7d929fde4209',
    location: 'app/layout.tsx (head section)'
  },

  contact_form: {
    name: 'Markate',
    widget_id: 'f96d3b4541b339933da0d1e72356b5d3:59045:4bb70607',
    location: 'components/cta/CtaModal.tsx',
    note: 'Embedded via iframe'
  }
}
```

### Business Information

```typescript
const BUSINESS_INFO = {
  name: 'Jones Pressure Washing',
  email: 'Hello@jonespressurewashingnj.com',
  phone: '(973) 486-4403',
  service_area: 'Bergen & Essex County, NJ',
  specialties: [
    'Residential Pressure Washing',
    'Commercial Pressure Washing',
    'Soft Washing',
    'Roof & Gutter Cleaning',
    'Holiday Lighting Installation'
  ]
}
```

## Design System Reference

### Typography Scale

```css
h1 {
  font-family: Poppins;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
}
h2 {
  font-family: Poppins;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 600;
}
h3 {
  font-family: Poppins;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
}
p {
  font-family: Inter;
  font-size: 1rem;
  line-height: 1.6;
}
```

### Spacing System

```typescript
const SPACING = {
  section_padding: 'py-8 md:py-12 lg:py-16',
  container_padding: 'px-6',
  card_padding: 'p-8',
  button_padding: 'px-6 py-3',
  gap_small: 'gap-4',
  gap_medium: 'gap-6',
  gap_large: 'gap-8'
}
```

### Component Variants

```typescript
// Button variants
const BUTTON_VARIANTS = {
  default: 'bg-primary text-black hover:bg-primary/90',
  outline:
    'border border-primary text-primary hover:bg-primary hover:text-black',
  ghost: 'hover:bg-accent hover:text-primary'
}

// Card variants
const CARD_VARIANTS = {
  default: 'bg-black border-primary border rounded-lg p-8',
  overlay: 'bg-black-clear rounded-lg p-8 shadow-xl',
  ghost: 'bg-transparent border-none'
}
```

## Core Development Principles

1. **Local First**: Emphasize Bergen & Essex County service area
2. **Trust Building**: Showcase licensing, insurance, local ownership
3. **Clear CTAs**: Multiple conversion opportunities on every page
4. **Mobile Priority**: 60%+ of traffic is mobile
5. **Performance**: Fast loading times build trust
6. **Accessibility**: WCAG 2.1 AA compliance
7. **SEO Foundation**: Schema markup, semantic HTML, sitemap
8. **Simplicity**: Clean, professional design over flashy effects
9. **Consistency**: Reusable components, predictable patterns
10. **Professional Tone**: Friendly but expert, local but professional

## Resources & Documentation

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Google Fonts](https://fonts.google.com/)
- [Schema.org](https://schema.org/)
- [Vercel Deployment](https://vercel.com/docs)

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Sitemap
npm run postbuild        # Generate sitemap (runs after build)

# Utilities
npx tsc --noEmit         # Type check without build
npx prettier --write .   # Format code
rm -rf .next             # Clear build cache
```

---

**Note**: This is a local service business website focused on conversion optimization and building trust with potential customers in the New Jersey area. All changes should support the primary goal: converting visitors into quote requests and booked services.
