import {
  FaCalendarCheck,
  FaHouse,
  FaLightbulb,
  FaShieldHalved,
  FaStar,
  FaTree
} from 'react-icons/fa6'

import { ServiceHighlightType } from '@/lib/types/services'
import serviceCitySlugs from './serviceCitySlugs.json'

type FocusArea = {
  title: string
  description: string
}

type Neighborhood = {
  name: string
  description: string
}

type CityFaq = {
  question: string
  answer: string
}

type CityCta = {
  header: string
  description: string
  cta: string
  buttonLabel: string
}

export type CityLandingContent = {
  slug: string
  city: string
  county: string
  state: string
  serviceName: string
  heroHighlight: string
  heroImage: string
  heroDescription: string
  heroCta: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  introHeading: string
  introParagraphs: string[]
  focusAreas: FocusArea[]
  highlightHeading: string
  highlightDescription: string
  highlights: ServiceHighlightType[]
  neighborhoodHeading: string
  neighborhoodDescription: string
  neighborhoods: Neighborhood[]
  faqHeading: string
  faqDescription: string
  faqs: CityFaq[]
  cta: CityCta
}

type ServiceKey = 'pressure-washing' | 'soft-washing'

const serviceSlugMap = serviceCitySlugs as Record<ServiceKey, string[]>

type LocationServiceConfig = Record<
  ServiceKey,
  Record<string, CityLandingContent>
>

export const locationServiceLanders: LocationServiceConfig = {
  'pressure-washing': {
    ridgewood: {
      slug: 'ridgewood',
      city: 'Ridgewood',
      county: 'Bergen County',
      state: 'NJ',
      serviceName: 'Pressure Washing',
      heroHighlight: 'Pressure Washing Pros',
      heroImage: '/PressureBG.jpeg',
      heroDescription:
        'Preserve Ridgewood’s leafy streetscapes with precision pressure washing for colonials, carriage houses, and downtown storefronts. We rinse years of pollen, soot, and driveway buildup without disturbing trim or landscaping.',
      heroCta: 'Book Ridgewood Pressure Washing',
      metaTitle: 'Ridgewood Pressure Washing | Jones Pressure Washing',
      metaDescription:
        'Professional pressure washing for Ridgewood, NJ homes and businesses. Careful detergents, HOA-ready documentation, weekend scheduling, and spotless results.',
      keywords: [
        'Ridgewood pressure washing',
        'pressure washing Ridgewood NJ',
        'Ridgewood driveway cleaning',
        'Jones Pressure Washing Ridgewood'
      ],
      introHeading: 'Keep Ridgewood’s Historic Blocks Spotless',
      introParagraphs: [
        'Graydon Pool summers, NYC commutes, and tree-lined avenues leave buildup fast. We customize detergents and pressure for Ridgewood’s cedar shingles, painted clapboard, and bluestone patios so you keep the charm without the grime.',
        'Homeowners rely on us for detailed prep, taped outlets, and tidy hoses that never block shared driveways or busy sidewalks near Wilsey Square.'
      ],
      focusAreas: [
        {
          title: 'Graydon Pool & The Lawns',
          description:
            'Gentle pressure revives shaded siding and porch ceilings that carry dampness from the Ho-Ho-Kus Brook.'
        },
        {
          title: 'Flagstone & Bluestone Patios',
          description:
            'We dial in surface cleaners to lift algae without etching the premium stonework popular near Heights Road.'
        },
        {
          title: 'Commuter-Friendly Scheduling',
          description:
            'Early starts and quiet equipment keep us wrapped before afternoon pickup lines at Ridge, Somerville, and Willard.'
        }
      ],
      highlightHeading: 'Why Ridgewood residents call us every season',
      highlightDescription:
        'From multi-generation estates to compact lots near downtown, our crew brings commercial-grade equipment plus concierge-level care.',
      highlights: [
        {
          Icon: FaHouse,
          header: 'Historic Home Safe',
          description:
            'Soft starts, adjustable pressure, and plant-friendly rinses protect original brick, slate, and copper accents.'
        },
        {
          Icon: FaShieldHalved,
          header: 'Licensed & Fully Insured',
          description:
            'We provide Ridgewood Village paperwork on request, including COI updates for HOAs and property managers.'
        },
        {
          Icon: FaCalendarCheck,
          header: 'Weekend & Evening Slots',
          description:
            'Flexible scheduling keeps us out of the way of NJ Transit commuters, school events, and block parties.'
        }
      ],
      neighborhoodHeading: 'Neighborhoods we refresh weekly',
      neighborhoodDescription:
        'Ridgewood’s micro-neighborhoods each need a different touch. We service them all with notes on favorite finishes and parking rules.',
      neighborhoods: [
        {
          name: 'The Lawns & Heights',
          description:
            'Restoring curb appeal for colonials and Victorians that anchor Ridgewood’s signature avenues.'
        },
        {
          name: 'Willard & Somerville districts',
          description:
            'Family-heavy streets request driveway, walkway, and play-set cleaning before birthday gatherings.'
        },
        {
          name: 'Old Country Club & Upper Ridgewood',
          description:
            'Estate properties rely on us for long driveway rinses, retaining wall cleaning, and patio prep for catered events.'
        },
        {
          name: 'Downtown storefronts',
          description:
            'Before sidewalk sales or holiday strolls, we wash awnings, patios, and loading zones for boutique owners.'
        }
      ],
      faqHeading: 'Ridgewood pressure washing FAQs',
      faqDescription:
        'Answers tailored to Ridgewood’s regulations, building materials, and busy household schedules.',
      faqs: [
        {
          question: 'Can you work around Ridgewood’s street parking rules?',
          answer:
            'Yes. We stage equipment in driveways whenever possible and coordinate start times so we are wrapped before alternate-side restrictions resume.'
        },
        {
          question: 'Do you protect mature landscaping during washing?',
          answer:
            'Absolutely. We pre-soak plant beds, cover delicate blooms, and use biodegradable detergents safe for Ridgewood’s prized gardens.'
        },
        {
          question: 'Will you document work for Ridgewood historic homes?',
          answer:
            'We photograph before/after results and provide detergent lists so preservation committees or buyers know every surface was treated correctly.'
        }
      ],
      cta: {
        header: 'Ready for Ridgewood-level curb appeal?',
        description:
          'Tell us which streets we are working near and we will build a custom plan covering siding, walkways, fences, and patios.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email the Team'
      }
    },
    wyckoff: {
      slug: 'wyckoff',
      city: 'Wyckoff',
      county: 'Bergen County',
      state: 'NJ',
      serviceName: 'Pressure Washing',
      heroHighlight: 'Pressure Washing Crew',
      heroImage: '/PressureBG.jpeg',
      heroDescription:
        'From Sicomac Lake to Wyckoff Township parks, larger lots gather pollen, sap, and tire marks fast. Our pressure washing crew keeps Belgian block driveways, cedar fences, and pool decks photo-ready all season.',
      heroCta: 'Schedule Wyckoff Pressure Washing',
      metaTitle: 'Wyckoff Pressure Washing | Jones Pressure Washing',
      metaDescription:
        'Premium pressure washing for Wyckoff, NJ estates and cul-de-sacs. Driveway, patio, fence, and commercial concrete cleaning with pro-grade equipment.',
      keywords: [
        'Wyckoff pressure washing',
        'pressure washing Wyckoff NJ',
        'Wyckoff driveway cleaning',
        'Wyckoff patio washing'
      ],
      introHeading:
        'Detail-driven cleaning for Wyckoff estates and cul-de-sacs',
      introParagraphs: [
        'Wide frontages and long driveways demand consistent maintenance. We measure footage, protect irrigation, and stage hoses so your landscaping and lighting stay untouched.',
        'Whether it is a backyard rink, pool hardscape, or carriage house apartment, we remove algae and soot without disrupting nearby entertaining areas.'
      ],
      focusAreas: [
        {
          title: 'Sicomac & Hartung neighborhoods',
          description:
            'Rust removal and driveway brightening tailored for high-sun cul-de-sacs and basketball courts.'
        },
        {
          title: 'Wyckoff Ave. storefronts',
          description:
            'Commercial pressure washing before market days so patios, walkways, and dumpster pads stay clean.'
        },
        {
          title: 'Estate pool decks',
          description:
            'Slip-resistant rinses keep travertine, concrete, and composite decking safe for kids and guests.'
        }
      ],
      highlightHeading: 'Stand-out details for Wyckoff properties',
      highlightDescription:
        'Our technicians bring ladder safety, water-fed surface cleaners, and chemistry matched to stone, stucco, Hardie Board, and mahogany.',
      highlights: [
        {
          Icon: FaStar,
          header: 'Estate-friendly finish',
          description:
            'Low splash, tidy hose runs, and post-job walkthroughs mean your property looks staged before we leave.'
        },
        {
          Icon: FaTree,
          header: 'Landscape protection',
          description:
            'Rinses run away from ornamental trees and perennial beds; we neutralize runoff before it hits turf.'
        },
        {
          Icon: FaShieldHalved,
          header: 'Equipment that reaches it all',
          description:
            'Hot-water machines and telescoping wands reach barn doors, sport courts, and detached garages.'
        }
      ],
      neighborhoodHeading: 'Where we work in Wyckoff',
      neighborhoodDescription:
        'From acre-plus lots to tidy townhome clusters, we keep every Wyckoff address spotless.',
      neighborhoods: [
        {
          name: 'Sicomac Lake perimeter',
          description:
            'Algae control for retaining walls, docks, and boat-storage pads.'
        },
        {
          name: 'Spring Meadow & Boulder Run',
          description:
            'Driveway, walkway, and fence washing for HOA-approved finishes.'
        },
        {
          name: 'Russell Ave. retail corridor',
          description:
            'Storefronts, patios, and trash enclosures cleaned before doors open.'
        },
        {
          name: 'Large-lot farm sections',
          description:
            'Barns, riding arenas, and long gravel drives rinsed without disturbing livestock.'
        }
      ],
      faqHeading: 'Wyckoff pressure washing FAQs',
      faqDescription:
        'Common questions from Wyckoff homeowners planning annual cleanings.',
      faqs: [
        {
          question: 'Do you bring your own water for remote sections of town?',
          answer:
            'Yes. We travel with buffer tanks to keep flow steady when spigots are far from the work area or have limited pressure.'
        },
        {
          question: 'Can you clean tennis or sport courts?',
          answer:
            'We rinse courts with fan tips, low pressure, and detergents approved for acrylic surfaces so traction stays intact.'
        },
        {
          question: 'How do you protect cedar or mahogany fencing?',
          answer:
            'We reduce pressure, use wood-brightening detergents, and rinse with conditioned water to prevent fuzzing or discoloration.'
        }
      ],
      cta: {
        header: 'Let’s plan your Wyckoff cleaning day',
        description:
          'Share photos, gate codes, or irrigation notes and we will build a maintenance plan that fits your calendar.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email Project Details'
      }
    }
  },
  'soft-washing': {
    montclair: {
      slug: 'montclair',
      city: 'Montclair',
      county: 'Essex County',
      state: 'NJ',
      serviceName: 'Soft Washing',
      heroHighlight: 'Soft Washing Experts',
      heroImage: '/Siding.jpg',
      heroDescription:
        'Montclair’s stucco Tudors, painted Victorians, and boutique storefronts need gentle rinses. Our soft washing process removes algae and soot without harming ornate trim or mature landscaping.',
      heroCta: 'Book Montclair Soft Washing',
      metaTitle: 'Montclair Soft Washing | Jones Pressure Washing',
      metaDescription:
        'Low-pressure soft washing for Montclair, NJ homes and storefronts. Protect stucco, cedar, and painted exteriors with biodegradable detergents.',
      keywords: [
        'Montclair soft washing',
        'soft washing Montclair NJ',
        'Montclair roof cleaning',
        'Montclair exterior cleaning'
      ],
      introHeading: 'Gentle cleaning for Montclair architecture',
      introParagraphs: [
        'From Upper Mountain Avenue mansions to Church Street rowhomes, every surface we touch gets a chemistry check first. We blend detergents for stucco, limestone, cedar shake, and copper accents so nothing etches or streaks.',
        'Our team stages hoses around synched parking schedules and farmers markets, keeping sidewalks open for shoppers and commuters.'
      ],
      focusAreas: [
        {
          title: 'Upper Mountain corridor',
          description:
            'Roof, dormer, and chimney soft washing for skyline-facing estates with slate and copper.'
        },
        {
          title: 'Church Street & Bloomfield Ave.',
          description:
            'Storefront awnings, patios, and signage cleaned before brunch crowds arrive.'
        },
        {
          title: 'South End & Watchung Plaza',
          description:
            'Algae removal for vinyl, stucco, and fiber cement siding common on Montclair’s family streets.'
        }
      ],
      highlightHeading: 'Soft washing tuned for Montclair',
      highlightDescription:
        'We pair biodegradable detergents with low-pressure application so your home looks refreshed without any surface fatigue.',
      highlights: [
        {
          Icon: FaLightbulb,
          header: 'Material-specific mixes',
          description:
            'Custom soap ratios for stucco, painted wood, and manufactured stone prevent streaking.'
        },
        {
          Icon: FaShieldHalved,
          header: 'Protective prep work',
          description:
            'Windows, outdoor lighting, and EV chargers get covered before the first drop touches your home.'
        },
        {
          Icon: FaTree,
          header: 'Garden-safe rinses',
          description:
            'We pre-soak beds, neutralize runoff, and leave plantings as vibrant as your freshly washed siding.'
        }
      ],
      neighborhoodHeading: 'Every pocket of Montclair, covered',
      neighborhoodDescription:
        'We maintain detailed notes by street so future visits go even faster.',
      neighborhoods: [
        {
          name: 'Upper Mountain & Highland Avenue',
          description:
            'Slate roofs, balustrades, and multi-story stucco facades cleaned with scaffold-safe equipment.'
        },
        {
          name: 'Walnut Street arts district',
          description:
            'Mural-friendly washing for brick, gallery signage, and patio furniture between events.'
        },
        {
          name: 'South End & Harrison Ave.',
          description:
            'Vinyl and fiber cement siding treatments that keep HOA boards happy.'
        },
        {
          name: 'Brookdale Park perimeter',
          description:
            'Pergolas, sheds, and outdoor living areas refreshed before picnics and graduation parties.'
        }
      ],
      faqHeading: 'Montclair soft washing FAQs',
      faqDescription:
        'Have questions before we rinse your home? Here’s what fellow Montclair neighbors ask most.',
      faqs: [
        {
          question: 'Can you work around tight driveways and limited parking?',
          answer:
            'Yes. Our smaller service rigs fit townhouse alleys and municipal lots so hoses never block traffic.'
        },
        {
          question: 'Is soft washing safe for historic stucco?',
          answer:
            'It is the recommended method. We apply detergents at low pressure, let them dwell, then rinse gently to avoid hairline cracks.'
        },
        {
          question: 'Do you clean awnings and outdoor dining areas?',
          answer:
            'Absolutely. We schedule off-hours service for Montclair restaurants so patios, fabric awnings, and heaters are spotless before opening.'
        }
      ],
      cta: {
        header: 'Let’s plan your Montclair wash day',
        description:
          'Share facade photos or prior paint specs and we’ll prep the exact chemistry your property needs.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email Project Photos'
      }
    },
    livingston: {
      slug: 'livingston',
      city: 'Livingston',
      county: 'Essex County',
      state: 'NJ',
      serviceName: 'Soft Washing',
      heroHighlight: 'Soft Washing Team',
      heroImage: '/Roof Cleaning2.jpg',
      heroDescription:
        'Livingston cul-de-sacs, gated communities, and town centers stay bright with our low-pressure soft washing. We erase roof algae, siding streaks, and patio mildew without risking shingles or paint.',
      heroCta: 'Schedule Livingston Soft Washing',
      metaTitle: 'Livingston Soft Washing | Jones Pressure Washing',
      metaDescription:
        'Trusted soft washing for Livingston, NJ roofs, siding, pergolas, and storefronts. Gentle detergents plus precise rinses keep luxury finishes spotless.',
      keywords: [
        'Livingston soft washing',
        'roof cleaning Livingston NJ',
        'Livingston house washing',
        'soft washing Essex County'
      ],
      introHeading: 'Protect every surface in Livingston',
      introParagraphs: [
        'From airy Bel Air estates to Northfield mixed-use buildings, we clean delicate finishes without disrupting households filled with lessons, carpools, and meetings.',
        'Our soft washing removes algae lines from hardy board, AZEK trim, and composite railings so your exterior looks newly installed for open houses or backyard parties.'
      ],
      focusAreas: [
        {
          title: 'Bel Air & Coventry',
          description:
            'Roof and facade cleaning for large-format stone, stucco, and copper dormers.'
        },
        {
          title: 'Northfield & Eisenhower corridors',
          description:
            'Evening storefront washing for medical offices, studios, and restaurants along Mt. Pleasant Ave.'
        },
        {
          title: 'Heritage & Riker Hill',
          description:
            'Algae removal for decks, play structures, and fence lines that border wooded preserves.'
        }
      ],
      highlightHeading: 'Premium care for Livingston homeowners',
      highlightDescription:
        'We treat every address like a maintenance plan client—documenting chemistry, coverage, and any repairs we notice.',
      highlights: [
        {
          Icon: FaShieldHalved,
          header: 'Roof warranty safe',
          description:
            'Soft washing meets manufacturer requirements, keeping your shingle warranties intact.'
        },
        {
          Icon: FaStar,
          header: 'Detail-first technicians',
          description:
            'We brush-clean trim, lighting, and columns so photos look listing-ready once we finish.'
        },
        {
          Icon: FaHouse,
          header: 'Whole-property approach',
          description:
            'Siding, soffits, gutters, pergolas, and patio furniture get washed in a single visit when requested.'
        }
      ],
      neighborhoodHeading: 'Livingston neighborhoods & districts we serve',
      neighborhoodDescription:
        'Every section of Livingston gets a tailored plan, from HOA requirements to gated access notes.',
      neighborhoods: [
        {
          name: 'Bel Air & Chestnut Hill',
          description:
            'High peaks and multi-level roofs cleaned with lift-ready equipment.'
        },
        {
          name: 'Heritage & Hillside',
          description:
            'Kids’ play zones and patio furniture rinsed between sport seasons.'
        },
        {
          name: 'Livingston Town Center',
          description:
            'Retail awnings, signage, and balconies cleaned before shoppers arrive.'
        },
        {
          name: 'Riker Hill & East Cedar',
          description:
            'Woodline fences, decks, and stone retaining walls brightened after long winters.'
        }
      ],
      faqHeading: 'Livingston soft washing FAQs',
      faqDescription:
        'Local answers for homeowners juggling HOA rules, travel schedules, and luxury finishes.',
      faqs: [
        {
          question: 'Do you coordinate with Livingston HOA boards?',
          answer:
            'Yes. We can provide proof of insurance, chemical lists, and maintenance logs for associations before work begins.'
        },
        {
          question: 'How quickly can you clean after pollen season?',
          answer:
            'Most Livingston visits are scheduled within two weeks, with rush options before parties or listing photos.'
        },
        {
          question: 'Can you bundle roof, siding, and patio soft washing?',
          answer:
            'Absolutely. We stage crews to handle every requested surface in one appointment so you only prep once.'
        }
      ],
      cta: {
        header: 'Refresh your Livingston property',
        description:
          'Text or email photos of problem areas and we’ll recommend the perfect soft washing mix.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email Photos'
      }
    }
  }
}

export const getCitySlugs = (service: ServiceKey): string[] =>
  serviceSlugMap[service]?.slice() ?? []

export const getCityLandingContent = (
  service: ServiceKey,
  slug: string
): CityLandingContent | undefined => {
  const normalizedSlug = slug.toLowerCase()
  return locationServiceLanders[service][normalizedSlug]
}

if (process.env.NODE_ENV !== 'production') {
  Object.entries(serviceSlugMap).forEach(([service, slugs]) => {
    slugs.forEach(slug => {
      if (!locationServiceLanders[service as ServiceKey][slug]) {
        console.warn(
          `[locationServiceLanders] Missing landing content for ${service}:${slug}`
        )
      }
    })
  })
}
