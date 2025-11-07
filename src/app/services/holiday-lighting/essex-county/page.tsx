import type { Metadata } from 'next'
import Script from 'next/script'

import ServiceCta from '@/components/services/ServiceCta'
import ServiceHero from '@/components/services/ServiceHero'

const pageTitle =
  'Essex County Holiday Lighting Installation | Jones Pressure Washing'
const pageDescription =
  'Custom Essex County holiday lighting design, installation, maintenance, and takedown for Montclair, Livingston, Short Hills, Maplewood, South Orange, and nearby towns.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/services/holiday-lighting/essex-county'
  },
  keywords: [
    'Essex County holiday lighting',
    'Montclair holiday lighting',
    'Short Hills Christmas light installation',
    'Maplewood holiday lighting',
    'Essex County Christmas lights'
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: '/services/holiday-lighting/essex-county',
    images: [
      {
        url: '/Holiday Lights Installation at Twilight.png',
        width: 1200,
        height: 630,
        alt: 'Essex County home with custom holiday lighting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/Holiday Lights Installation at Twilight.png']
  },
  robots: {
    index: true,
    follow: true
  },
  category: 'Professional Services'
}

const cityHighlights = [
  {
    name: 'Montclair',
    description:
      'Historic mansions on Upper Mountain and brownstones near Church Street call for architectural outlines, tree uplighting, and window silhouettes that echo the town square glow.'
  },
  {
    name: 'Livingston',
    description:
      'Expansive colonials and cul de sacs thrive on symmetrical rooflines, driveway stake lights, and lit wreath collections that stay HOA friendly while boosting winter curb appeal.'
  },
  {
    name: 'Short Hills',
    description:
      'From Hartshorn Drive estates to tucked away lanes, Short Hills homeowners lean on custom cut LEDs, tasteful color palettes, and smart timers that keep displays elegant and efficient.'
  },
  {
    name: 'Millburn',
    description:
      'Walkable downtown storefronts and side street Victorians benefit from layered roof outlines, garland wrapped railings, and tree wraps that welcome shoppers after holiday shows.'
  },
  {
    name: 'Maplewood',
    description:
      'Arts rich Maplewood Village properties embrace warm white rooflines, porch swag lighting, and backyard pergola accents that carry gatherings from Friendsgiving through New Year.'
  },
  {
    name: 'South Orange',
    description:
      'Grove Park Tudors and Montrose center hall colonials shine with ridge cap lighting, window candles, and pathway markers that guide guests through tree lined streets.'
  },
  {
    name: 'West Orange',
    description:
      'Homes along Pleasant Valley Way and Eagle Rock view lots need wide coverage rooflines, evergreen wraps, and accent lighting geared to high winds near the reservation.'
  },
  {
    name: 'Verona',
    description:
      'Twin Brook estates and Verona Lake neighborhoods love roofline outlines, gable pops, and lakeside reflections that photograph well for holiday cards.'
  },
  {
    name: 'Cedar Grove',
    description:
      'From ridge top homes to Cedar Grove Park adjacent properties, clients choose color changing LEDs, driveway guide lights, and gazebo wraps for community events.'
  },
  {
    name: 'Glen Ridge',
    description:
      'Glen Ridge gas lamp blocks call for refined warm white lighting, symmetrical window wreaths, and curbside stake lights that match the boroughs historic charm.'
  },
  {
    name: 'Bloomfield',
    description:
      'Brookdale neighborhoods lean on efficient installs, gutter safe clips, and tree wraps that hold up through lake effect wind while keeping budgets steady.'
  },
  {
    name: 'Nutley',
    description:
      'Nutley Park and Yantacaw Brook areas appreciate classic roof outlines, porch garlands, and walkway candy cane accents ready for neighborhood decorating contests.'
  },
  {
    name: 'Belleville',
    description:
      'Cherry Blossom lined streets near Branch Brook Park glow with icicle lighting, lamppost wraps, and entry arch highlights that keep celebrations visible from the avenue.'
  },
  {
    name: 'Roseland',
    description:
      'Roseland cul de sacs use roof and dormer outlines, pergola lighting, and evergreen uplights to wow guests heading to town center events.'
  },
  {
    name: 'Essex Fells',
    description:
      'Estate properties in Essex Fells turn to grand entry garlands, lined allee lighting, and tailored roof ridges that feel stately without overpowering natural stone facades.'
  },
  {
    name: 'North Caldwell',
    description:
      'Hilltop homes embrace layered rooflines, retaining wall lighting, and backyard tree wraps that keep visibility strong despite sweeping vistas.'
  },
  {
    name: 'West Caldwell',
    description:
      'Split levels and expanded ranch homes benefit from gutter safe LEDs, chimney outlines, and porch swag lighting that survive early ice storms.'
  },
  {
    name: 'Caldwell',
    description:
      'Historic downtown streets blend storefront outlines, wreath lit windows, and pole wraps to draw families after tree lightings and theater nights.'
  },
  {
    name: 'Fairfield',
    description:
      'Larger lots and business parks call for commercial grade rooflines, ground stake lighting, and evergreen uplighting that doubles as security illumination.'
  },
  {
    name: 'Newark Ironbound',
    description:
      'Rowhomes and restaurant fronts leverage balcony safe clips, marquee lighting, and tricolor palettes that match Ironbound nightlife energy.'
  },
  {
    name: 'East Orange',
    description:
      'Brick colonials and duplexes receive precise roof and window outlines, staircase garlands, and entry sconces synced to block association schedules.'
  },
  {
    name: 'Orange',
    description:
      'Historic mansions and new townhomes alike use tree wraps, gable highlights, and accent lighting that stay beautiful through mixed weather patterns.'
  },
  {
    name: 'Irvington',
    description:
      'Homeowners request quick turn ladder free installs, secure attachment methods, and warm white palettes that stand out across higher traffic corridors.'
  }
]

const timeline = [
  {
    title: 'July - August: Pre Season Essex Planning',
    description:
      'Homeowners share inspiration boards, HOA rules, and prior year photos so we can estimate footage, confirm outlet access, and reserve ideal installation windows before school calendars stack up.'
  },
  {
    title: 'September: Design Concepts and Approvals',
    description:
      'We deliver 3D mockups or annotated photos that show rooflines, trees, and focal points with color palettes suited to Montclair, Livingston, or Short Hills aesthetics. Once approved, materials are staged in our Essex County warehouse.'
  },
  {
    title: 'October: Procurement and Logistics',
    description:
      'Our team orders commercial grade LEDs, wreaths, clips, timers, and specialty accents sized by elevation. We schedule installs to work around local street fairs, leaf collections, and township ladder restrictions.'
  },
  {
    title: 'Early November: Installation Sprint',
    description:
      'Crews arrive with lift trucks, safety harnesses, and weatherproof connectors. Every strand is cut to length on site, labeled by elevation, and tested before we leave your property.'
  },
  {
    title: 'Late November - December: Maintenance On Call',
    description:
      'Season long support covers wind shifts along South Mountain, surprise ice on Livingston hilltops, and blown GFCI outlets. Call or text and we dispatch a technician before the next gathering.'
  },
  {
    title: 'January: Careful Takedown and Storage',
    description:
      'We remove, coil, and label all lighting, pack accessories in climate stable totes, and store everything in our facility so next year restarts with zero tangled mess.'
  }
]

const designHighlights = [
  {
    title: 'Historic District Friendly Rooflines',
    description:
      'Essex County includes gas lit Glen Ridge blocks, Montclair Victorians, and Maplewood Tudors. We build LED runs that respect historic sightlines, using slate safe clips, copper gutter guards, and warm white tones that feel timeless rather than trendy.'
  },
  {
    title: 'Tree Canopy Transformations',
    description:
      'South Mountain, Eagle Rock, and Brookdale Park corridors include towering oaks and maples. Our installers wrap trunks, weave branch lines, and add ground based uplights that highlight natural architecture while keeping cords tidy for foot traffic.'
  },
  {
    title: 'Outdoor Living and Backyard Scenes',
    description:
      'Many Essex County homeowners entertain outdoors even after the first frost. We design pergola canopies, patio cafe lighting, and firepit accent strands that extend holiday atmosphere to the back of the property.'
  },
  {
    title: 'Commercial and Mixed Use Properties',
    description:
      'Downtown Millburn shops, Bloomfield storefronts, and Newark restaurants rely on us for consistent branding. We combine window silhouettes, pole wraps, and programmable colors so businesses can flip themes for Hanukkah, Christmas, and New Year without downtime.'
  }
]

const packages = [
  {
    title: 'Heritage Roofline Package',
    description:
      'Best for Montclair, Glen Ridge, and South Orange streets where historic architecture sets the tone. We outline roof ridges, dormers, and windows with warm white LEDs, add wreaths to symmetrical windows, and stage timers so the glow appears nightly without manual flipping.'
  },
  {
    title: 'Estate and Evergreens Showcase',
    description:
      'Ideal for Short Hills, Livingston, and Essex Fells properties with deep setbacks. Layered rooflines, tree wraps, driveway stake lighting, and entry garlands work together to create instant resort style curb appeal.'
  },
  {
    title: 'Downtown and Restaurant Display',
    description:
      'Perfect for Millburn, Maplewood, Bloomfield, and Newark storefronts. We balance building outlines with sign safe marquee bulbs, pole wraps, and programmable color scenes to attract foot traffic well past closing time.'
  }
]

const faqs = [
  {
    question: 'When should Essex County homeowners book holiday lighting?',
    answer:
      'Prime design consultations happen in mid summer. By reserving in July or August, you lock in preferred October or early November install dates before calendars fill with school concerts, synagogue events, and neighborhood parties.'
  },
  {
    question: 'Can you coordinate with HOA or historic district requirements?',
    answer:
      'Yes. We review guidelines from Montclair Historic Preservation, South Orange neighborhoods, and Short Hills associations. Expect detailed diagrams, wattage reports, and insurance certificates ready for board approval.'
  },
  {
    question: 'Do you support multi holiday color changes?',
    answer:
      'Our programmable LED options let you rotate palettes for Hanukkah blues, Christmas reds and greens, Kwanzaa hues, or neutral winter whites. Everything switches through timers or app controls without a return visit.'
  },
  {
    question: 'What happens if weather knocks out part of the display?',
    answer:
      'Season long maintenance is included. Wind gusts along South Mountain or unexpected ice in Verona are handled quickly. Text us a photo and we send a technician to re secure clips, swap bulbs, or reset GFCI outlets.'
  },
  {
    question: 'Do you handle takedown and storage?',
    answer:
      'Absolutely. In January we remove every strand, coil and label by location, and store everything in our climate controlled facility. The following season we reinstall from detailed notes for even faster setup.'
  }
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Holiday Lighting Installation',
  name: 'Essex County Holiday Lighting Design and Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Jones Pressure Washing',
    telephone: '(973) 486-4403',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Essex County',
      addressRegion: 'NJ',
      addressCountry: 'US'
    },
    image: 'https://jonespressurewashing.com/images/logo.png',
    priceRange: '$$'
  },
  areaServed: [
    {
      '@type': 'County',
      name: 'Essex County'
    },
    ...cityHighlights.map(city => ({
      '@type': 'City',
      name: city.name.replace(' & ', ' and ')
    }))
  ],
  description:
    'Essex County holiday lighting specialists delivering custom LED design, installation, maintenance, and takedown for Montclair, Livingston, Short Hills, Millburn, Maplewood, and every surrounding town.',
  offers: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Essex County Custom Holiday Lighting Package'
      },
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '699'
      }
    }
  ],
  image: 'https://jonespressurewashing.com/images/holiday-lighting.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://jonespressurewashing.com/services/holiday-lighting/essex-county'
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://jonespressurewashing.com/contact'
    },
    result: {
      '@type': 'Reservation',
      name: 'Essex County Holiday Lighting Consultation'
    }
  }
}

function SeasonalDetails() {
  return (
    <section className="bg-black">
      <div className="max-w-custom mx-auto grid gap-8 px-6 py-16 md:grid-cols-[1.4fr,1fr] items-center">
        <div className="space-y-6">
          <h2 className="text-white">
            Essex County Holidays,{' '}
            <span className="text-primary">Made Effortless</span>
          </h2>
          <p>
            From Montclair hillside views to Maplewood village lights, our local
            crew turns your inspiration into a professionally designed holiday
            display. We manage every detail, safeguard your property, and keep
            the glow consistent all season.
          </p>
          <ul className="grid gap-3 text-sm md:text-base">
            <li>
              Commercial grade LEDs, timers, extension cords, and clips sized to
              your architecture and HOA expectations.
            </li>
            <li>
              Design consultations that balance show stopping curb appeal with
              the refined taste Essex County neighborhoods expect.
            </li>
            <li>
              Season long maintenance, January takedown, and organized storage
              for a faster repeat install next year.
            </li>
          </ul>
        </div>
        <div className="bg-secondary p-6 border border-primary rounded-lg space-y-4">
          <h3 className="text-white">Reserve Your Essex County Install</h3>
          <p>
            Our calendar books quickly once school events and township
            celebrations ramp up. Secure your preferred installation week and
            let us build a custom plan before inventories run low.
          </p>
          <div className="bg-black rounded-lg p-4 space-y-2 text-sm">
            <p className="font-semibold text-primary">
              Free Essex County Design Consultation
            </p>
            <p>hello@jonespressurewashingnj.com - (973) 486-4403</p>
            <p>
              Serving Montclair, Livingston, Short Hills, Millburn, Maplewood,
              South Orange, and every surrounding township.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function EssexCountyHolidayLightingPage() {
  return (
    <>
      <Script
        id="jpw-holiday-lighting-essex-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-black text-white">
        <ServiceHero
          img="/Homepage.jpg"
          h1={
            <>
              Essex County{' '}
              <span className="text-primary">Holiday Lighting Pros</span>
            </>
          }
          description="Jones Pressure Washing delivers custom holiday lighting Essex County families and businesses rely on, complete with pro grade LEDs, precise installation, ongoing maintenance, and careful takedown."
          cta="Book My Essex County Lighting Design"
          dimHeroContent
          height="h-[70vh]"
          explanation={<SeasonalDetails />}
        />
        <section className="bg-[#0b0b0f]">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
            <header className="space-y-4">
              <h2>
                Holiday Lighting Built for Essex County Homes and Storefronts
              </h2>
              <p>
                Essex County combines historic neighborhoods, modern estates,
                and bustling main streets. Our designers evaluate rooflines,
                mature trees, and outdoor living spaces to craft lighting that
                feels personal. Expect clear communication, OSHA trained
                technicians, and tidy work sites that respect busy schedules and
                sensitive landscaping.
              </p>
              <p>
                During each consultation we review inspiration photos, discuss
                event calendars, and plan for unique property needs. Whether you
                host Maplewood Porchfest, Montclair Film Festival parties, or
                Short Hills charity events, we ensure your display shines bright
                without overwhelming the architecture. We stock color selectable
                LEDs for multi holiday households and warm white classics for
                historic districts seeking timeless appeal.
              </p>
              <p>
                After installation we remain on call. If a nor Easter flexes a
                strand or a GFCI trips, we respond quickly so gatherings stay on
                schedule. January takedown is just as organized, complete with
                labeled totes and notes that make next years planning faster.
              </p>
            </header>
            <div className="grid gap-6 lg:grid-cols-3">
              {packages.map(pkg => (
                <article
                  key={pkg.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3">
                  <h3 className="text-primary">{pkg.title}</h3>
                  <p>{pkg.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-6">
            <h2>Neighborhoods We Brighten Every Season</h2>
            <p>
              We work across every Essex County township, customizing designs to
              match architecture, slope, and community culture. Explore the
              towns and neighborhoods that lean on our crew for holiday lighting
              that looks polished and stays safe.
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cityHighlights.map(city => (
                <article
                  key={city.name}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3">
                  <h3 className="text-primary">{city.name}</h3>
                  <p>{city.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#0b0b0f]">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
            <header className="space-y-4">
              <h2>Design Styles That Fit Essex County</h2>
              <p>
                Every lighting plan is tailored, yet property trends surface
                from town to town. Here is how we adapt designs so displays feel
                at home on Essex County streets.
              </p>
            </header>
            <div className="space-y-8">
              {designHighlights.map(design => (
                <article key={design.title} className="space-y-3">
                  <h3 className="text-primary">{design.title}</h3>
                  <p>{design.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
            <header className="space-y-4">
              <h2>Essex County Holiday Lighting Success Stories</h2>
              <p>
                See how our team solves unique property challenges across the
                county, from steep grade estates to busy downtown storefronts.
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3">
                <h3 className="text-primary">
                  Montclair Hillside Home with Multi Level Glow
                </h3>
                <p>
                  A client overlooking the Manhattan skyline wanted a display
                  that matched city lights without overpowering the homes cedar
                  shake exterior. We installed warm white C9 rooflines, wrapped
                  the terraced backyard trees, and added discreet accent
                  lighting along stone steps. Timers were programmed for gentle
                  fade in and fade out so neighbors enjoyed the view without
                  glare.
                </p>
              </article>
              <article className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3">
                <h3 className="text-primary">
                  Maplewood Village Storefront Row Coordination
                </h3>
                <p>
                  Three adjacent shops requested a unified look ahead of Dickens
                  Village festivities. We designed cohesive window silhouettes,
                  installed matching garlands with warm white mini lights, and
                  set icicle strands across upper awnings. The collaborative
                  display boosted evening foot traffic and drew social media
                  shoutouts for the coordinated glow.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 pb-16 space-y-5">
            <h2>Coordinating with Essex County Calendars and Weather</h2>
            <p>
              Holiday programs at Paper Mill Playhouse, Seton Hall, and
              Bloomfield College mean streets stay busy late into the evening.
              We set installation schedules that avoid peak traffic, coordinate
              with township parking rules, and keep ladders clear of parade
              routes or block association events.
            </p>
            <p>
              Weather swings demand equal attention. Lake effect gusts near
              Verona Park, icy mornings on South Mountain, and damp air around
              Branch Brook Park all influence attachment methods. We rely on
              commercial grade clips, coated extension cords, and waterproof
              connectors to keep every strand powered through freeze thaw
              cycles.
            </p>
            <p>
              Communication stays front and center. Expect proactive text
              updates, same week service windows, and a direct line to your
              project manager so questions never linger. You will always know
              who is arriving, what they are installing, and how long the work
              will take, even when winter storms reshuffle the calendar.
            </p>
          </div>
        </section>
        <section className="bg-[#0b0b0f]">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
            <header className="space-y-4">
              <h2>Holiday Lighting Timeline for Essex County Clients</h2>
              <p>
                Work through the season with confidence. Our Essex County
                calendar keeps installs on track, even when weather or school
                events add complexity.
              </p>
            </header>
            <div className="space-y-6">
              {timeline.map(step => (
                <article
                  key={step.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3">
                  <h3 className="text-primary">{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
            <header className="space-y-4">
              <h2>Essex County Holiday Lighting Checklist</h2>
              <p>
                A quick prep checklist ensures installation day moves smoothly
                and your property is ready for ladders, equipment, and final
                photo capture.
              </p>
            </header>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Test exterior outlets and note circuits shared with heaters,
                pool pumps, or EV chargers so we balance electrical loads.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Trim low branches or vines that block access to rooflines,
                dormers, or second story balconies.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Move vehicles, planters, and patio furniture away from work
                zones to create clear staging paths for ladders and reels.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Share HOA or historic board guidelines, including color limits,
                shutoff times, and attachment rules, before crews arrive.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Schedule a dusk walk through so we can fine tune focal points,
                confirm timer programs, and capture portfolio photos.
              </li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                Keep pets and children indoors during ladder work and provide
                any gate codes or alarm instructions needed for backyard access.
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-[#0b0b0f]">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-8">
            <header className="space-y-4">
              <h2>Frequently Asked Questions for Essex County Homeowners</h2>
              <p>
                Here are the answers we provide most often when Essex County
                residents schedule holiday lighting with our team.
              </p>
            </header>
            <div className="space-y-6">
              {faqs.map(faq => (
                <article
                  key={faq.question}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3">
                  <h3 className="text-primary">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div className="max-w-custom mx-auto px-6 py-16 space-y-6">
            <h2>Ready to Lock in Essex County Holiday Lighting?</h2>
            <p>
              Share your wish list, inspiration photos, or past frustrations and
              we will turn them into a smooth, fully managed holiday lighting
              experience. From first design sketch to January storage, our crew
              handles every step so you can focus on celebrating.
            </p>
            <p>
              Call, text, or email and we will confirm your consultation within
              one business day. Peak season fills fast across Montclair,
              Livingston, Short Hills, and the surrounding towns, so the earlier
              you book the more options we can offer for layout and timing.
            </p>
          </div>
        </section>
        <ServiceCta
          header="Light Up Essex County with Confidence"
          description="Reserve your holiday lighting consultation now and secure preferred installation dates before town events and weather changes limit availability."
          cta="Reserve My Essex County Install"
          buttonLabel="Contact Us"
        />
      </main>
    </>
  )
}
