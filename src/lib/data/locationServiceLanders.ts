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
  geo: { latitude: number; longitude: number }
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
      geo: { latitude: 40.9793, longitude: -74.1168 },
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
      geo: { latitude: 41.0098, longitude: -74.1724 },
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
    },
    'fort-lee': {
      slug: 'fort-lee',
      city: 'Fort Lee',
      county: 'Bergen County',
      state: 'NJ',
      geo: { latitude: 40.851, longitude: -73.9712 },
      serviceName: 'Pressure Washing',
      heroHighlight: 'Pressure Washing Pros',
      heroImage: '/PressureBG.jpeg',
      heroDescription:
        'High-rise balconies, townhome walkways, and GWB-corridor concrete collect exhaust film and river humidity year-round. We restore Fort Lee hardscapes with adjustable pressure that protects pavers while erasing years of buildup.',
      heroCta: 'Book Fort Lee Pressure Washing',
      metaTitle: 'Fort Lee Pressure Washing | Jones Pressure Washing',
      metaDescription:
        'Professional pressure washing for Fort Lee, NJ homes and businesses. Driveway, patio, walkway, and commercial concrete cleaning near the GWB corridor.',
      keywords: [
        'Fort Lee pressure washing',
        'pressure washing Fort Lee NJ',
        'Fort Lee driveway cleaning',
        'Fort Lee patio washing'
      ],
      introHeading: 'Cut through GWB corridor grime in Fort Lee',
      introParagraphs: [
        'Proximity to the George Washington Bridge means Fort Lee properties accumulate road film, diesel soot, and salt residue faster than most Bergen County towns. Our crew adjusts detergent strength and pressure to match each surface — from condo garage aprons to Palisade Avenue storefronts.',
        'We coordinate with building management for water access, elevator freight schedules, and resident notices so pressure washing fits seamlessly into your property routine.'
      ],
      focusAreas: [
        {
          title: 'Palisade Avenue corridor',
          description:
            'Sidewalk, storefront, and patio cleaning timed around restaurant prep and foot traffic peaks.'
        },
        {
          title: 'GWB-adjacent residences',
          description:
            'Soot and brake-dust removal for driveways, retaining walls, and garage entries that face bridge traffic.'
        },
        {
          title: 'High-rise common areas',
          description:
            'Pool decks, parking garages, and lobby entryways cleaned with low-splash technique and fast dry times.'
        }
      ],
      highlightHeading: 'Why Fort Lee property managers trust us',
      highlightDescription:
        'Dense streets, limited staging space, and building rules demand a crew that plans ahead. We handle permits, scheduling, and cleanup so you focus on tenants.',
      highlights: [
        {
          Icon: FaHouse,
          header: 'Multi-unit experience',
          description:
            'We stage equipment in tight garages, coordinate elevator freight windows, and leave common areas dry within hours.'
        },
        {
          Icon: FaShieldHalved,
          header: 'Fully insured & documented',
          description:
            'COI updates, before-and-after photos, and work reports ready for board meetings or tenant portals.'
        },
        {
          Icon: FaCalendarCheck,
          header: 'Off-peak scheduling',
          description:
            'Early morning and weekend slots keep noise and equipment out of the way during business hours.'
        }
      ],
      neighborhoodHeading: 'Fort Lee areas we service regularly',
      neighborhoodDescription:
        'From the Palisades cliffs to Main Street, we keep every Fort Lee block looking its best.',
      neighborhoods: [
        {
          name: 'The Palisades & Hudson Terrace',
          description:
            'Retaining walls, stairways, and cliffside patios cleared of moss and mineral stains.'
        },
        {
          name: 'Main Street district',
          description:
            'Restaurant patios, retail sidewalks, and parking areas cleaned before morning foot traffic.'
        },
        {
          name: 'Linwood Park neighborhood',
          description:
            'Residential driveways, walkways, and backyard hardscapes refreshed on flexible schedules.'
        },
        {
          name: 'Bridge Plaza & condo towers',
          description:
            'Garage entries, loading docks, and shared courtyards maintained on recurring property-management contracts.'
        }
      ],
      faqHeading: 'Fort Lee pressure washing FAQs',
      faqDescription:
        'Common questions from Fort Lee homeowners and property managers.',
      faqs: [
        {
          question: 'Can you work around condo building rules and schedules?',
          answer:
            'Yes. We coordinate with building management on water access, freight elevator use, and resident notification before every visit.'
        },
        {
          question:
            'How do you handle the soot buildup from GWB bridge traffic?',
          answer:
            'We pre-treat surfaces with a degreasing solution that breaks down diesel film and brake dust before rinsing at calibrated pressure.'
        },
        {
          question: 'Do you clean parking garages and commercial spaces?',
          answer:
            'We do. Garage aprons, loading zones, and dumpster pads get degreased and rinsed with containment mats when drainage requires it.'
        }
      ],
      cta: {
        header: 'Ready to clean up your Fort Lee property?',
        description:
          'Send us photos or building specs and we will build a pressure washing plan that fits your schedule and budget.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email the Team'
      }
    },
    'cliffside-park': {
      slug: 'cliffside-park',
      city: 'Cliffside Park',
      county: 'Bergen County',
      state: 'NJ',
      geo: { latitude: 40.8215, longitude: -73.9876 },
      serviceName: 'Pressure Washing',
      heroHighlight: 'Pressure Washing Crew',
      heroImage: '/PressureBG.jpeg',
      heroDescription: `Cliffside Park's hillside streets and compact lots trap moisture and shade that accelerate algae growth. We bring precise equipment to clean driveways, stoops, and shared walkways without disrupting your neighbors.`,
      heroCta: 'Book Cliffside Park Pressure Washing',
      metaTitle: 'Cliffside Park Pressure Washing | Jones Pressure Washing',
      metaDescription:
        'Pressure washing for Cliffside Park, NJ homes and businesses. Driveways, walkways, stoops, and patios cleaned with care for close-quarter neighborhoods.',
      keywords: [
        'Cliffside Park pressure washing',
        'pressure washing Cliffside Park NJ',
        'Cliffside Park driveway cleaning',
        'Cliffside Park patio washing'
      ],
      introHeading: `Precision cleaning for Cliffside Park's compact streetscapes`,
      introParagraphs: [
        'Tight driveways, shared property lines, and hillside grading mean standard pressure washing approaches do not work here. We use targeted fan tips, splash guards, and staged hose runs that keep water off neighboring siding and parked cars.',
        'From Anderson Avenue walk-ups to Palisade Avenue retail, every job starts with a property walkthrough so we know exactly where water drains and where to protect plantings.'
      ],
      focusAreas: [
        {
          title: 'Anderson Avenue residences',
          description: `Stoop, walkway, and driveway cleaning for the multi-family homes that line Cliffside Park's main residential corridor.`
        },
        {
          title: 'Palisade Avenue businesses',
          description:
            'Storefront sidewalks, restaurant patios, and building facades cleaned during off-peak hours.'
        },
        {
          title: 'Hillside retaining walls',
          description:
            'Moss and mineral deposit removal from block walls and stone retaining structures common on sloped lots.'
        }
      ],
      highlightHeading: `Built for Cliffside Park's close quarters`,
      highlightDescription:
        'Our compact equipment setup and neighbor-conscious workflow keep every job contained and clean.',
      highlights: [
        {
          Icon: FaHouse,
          header: 'Tight-lot specialists',
          description:
            'We work in driveways as narrow as 8 feet and stage hoses to avoid blocking shared walkways.'
        },
        {
          Icon: FaShieldHalved,
          header: 'Neighbor-safe technique',
          description:
            'Splash guards and angled spray patterns keep water and detergent off adjacent properties.'
        },
        {
          Icon: FaStar,
          header: 'Walkthrough guarantee',
          description:
            'We review every surface with you before packing up. If anything needs another pass, we handle it on the spot.'
        }
      ],
      neighborhoodHeading: 'Cliffside Park streets we clean every season',
      neighborhoodDescription:
        'A small borough with big cleaning needs — we know the layout and parking patterns by heart.',
      neighborhoods: [
        {
          name: 'Anderson Avenue corridor',
          description:
            'Walk-up stoops, shared driveways, and front patios refreshed without disturbing neighbors.'
        },
        {
          name: 'Gorge Road & Cliff Street',
          description:
            'Hillside homes with retaining walls and steep driveways that collect runoff debris.'
        },
        {
          name: 'Edgewater border area',
          description:
            'Newer townhome developments with composite decking and paver driveways we handle regularly.'
        },
        {
          name: 'Winston Drive neighborhood',
          description:
            'Family homes with backyard patios, play areas, and fences cleaned before summer gatherings.'
        }
      ],
      faqHeading: 'Cliffside Park pressure washing FAQs',
      faqDescription:
        'Answers for Cliffside Park residents planning their first or next cleaning.',
      faqs: [
        {
          question:
            'Can you work on my property without blocking the shared driveway?',
          answer:
            'We stage equipment compactly and use longer hose runs so your neighbors retain access throughout the job.'
        },
        {
          question: 'How do you handle steep driveways on hillside lots?',
          answer:
            'We use surface cleaners with vacuum recovery and work downhill in controlled passes to prevent runoff pooling.'
        },
        {
          question:
            'Is pressure washing safe for the older concrete common here?',
          answer:
            'We start at lower PSI and increase only when needed. Older concrete gets a gentler approach to avoid surface pitting.'
        }
      ],
      cta: {
        header: 'Time to freshen up your Cliffside Park home?',
        description:
          'Tell us about your surfaces and we will plan a cleaning day that works for you and your neighbors.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email the Team'
      }
    },
    bloomfield: {
      slug: 'bloomfield',
      city: 'Bloomfield',
      county: 'Essex County',
      state: 'NJ',
      geo: { latitude: 40.8068, longitude: -74.1854 },
      serviceName: 'Pressure Washing',
      heroHighlight: 'Pressure Washing Pros',
      heroImage: '/PressureBG.jpeg',
      heroDescription: `Bloomfield's tree-lined blocks and park-adjacent homes collect pollen, leaf stains, and algae fast. We clean driveways, patios, walkways, and commercial concrete with pressure calibrated to every surface.`,
      heroCta: 'Book Bloomfield Pressure Washing',
      metaTitle: 'Bloomfield Pressure Washing | Jones Pressure Washing',
      metaDescription:
        'Professional pressure washing for Bloomfield, NJ homes and businesses. Driveways, patios, walkways, and storefronts cleaned with adjustable pressure.',
      keywords: [
        'Bloomfield pressure washing',
        'pressure washing Bloomfield NJ',
        'Bloomfield driveway cleaning',
        'Bloomfield patio washing'
      ],
      introHeading: `Keep Bloomfield's tree-canopy blocks spotless`,
      introParagraphs: [
        'Brookdale Park and Watsessing Park throw shade, pollen, and leaf tannin across nearby homes every season. We pre-treat organic stains with detergent before rinsing so driveways and walkways come back to original color — not just surface clean.',
        'From Broad Street commercial strips to quiet residential cul-de-sacs, our crew adjusts equipment to match lot size, surface age, and drainage so nothing gets damaged and water goes where it should.'
      ],
      focusAreas: [
        {
          title: 'Brookdale Park perimeter',
          description:
            'Heavy pollen and leaf-tannin removal for driveways and patios shaded by mature oaks and maples.'
        },
        {
          title: 'Broad Street commercial district',
          description:
            'Sidewalk, storefront, and parking lot cleaning timed for early mornings before businesses open.'
        },
        {
          title: 'Watsessing Park neighborhood',
          description:
            'Walkway and retaining wall cleaning for homes along the park that collect moisture and moss year-round.'
        }
      ],
      highlightHeading: 'Why Bloomfield homeowners call us back',
      highlightDescription:
        'Mature tree canopy and older infrastructure mean Bloomfield properties need a crew that understands local conditions.',
      highlights: [
        {
          Icon: FaTree,
          header: 'Organic stain specialists',
          description:
            'We pre-treat leaf tannin, pollen film, and algae with targeted detergents before pressure rinsing.'
        },
        {
          Icon: FaShieldHalved,
          header: 'Fully insured',
          description:
            'Liability coverage and COI documents available for property managers and HOA boards on request.'
        },
        {
          Icon: FaCalendarCheck,
          header: 'Seasonal scheduling',
          description: `We recommend spring and fall cleanings to stay ahead of Bloomfield's heavy pollen and leaf cycles.`
        }
      ],
      neighborhoodHeading: 'Bloomfield neighborhoods we serve',
      neighborhoodDescription:
        'Every corner of Bloomfield gets the same attention to detail — from downtown to the parks.',
      neighborhoods: [
        {
          name: 'Brookdale section',
          description:
            'Park-adjacent homes with shaded driveways and patios that collect organic debris year-round.'
        },
        {
          name: 'Watsessing Heights',
          description:
            'Elevated lots with retaining walls and long walkways that trap moisture and moss.'
        },
        {
          name: 'Broad Street corridor',
          description:
            'Mixed-use properties with storefronts, parking areas, and residential entrances kept clean on recurring schedules.'
        },
        {
          name: 'Historic downtown',
          description:
            'Older sidewalks, brick facades, and municipal spaces cleaned with low-pressure technique to protect aged surfaces.'
        }
      ],
      faqHeading: 'Bloomfield pressure washing FAQs',
      faqDescription:
        'Questions we hear from Bloomfield homeowners before scheduling.',
      faqs: [
        {
          question:
            'How do you remove the dark stains from leaves on my driveway?',
          answer:
            'Leaf tannin stains need a detergent pre-treatment that breaks down the organic pigment before rinsing. Pressure alone will not remove them completely.'
        },
        {
          question:
            'Is pressure washing safe for older Bloomfield sidewalks and stoops?',
          answer:
            'We start at low PSI and test a small area first. Older concrete and brick get a gentler approach with surface cleaners rather than direct high-pressure tips.'
        },
        {
          question: 'How often should I pressure wash near Brookdale Park?',
          answer:
            'Park-adjacent properties benefit from twice-a-year cleaning — once after spring pollen drops and once after fall leaves settle.'
        }
      ],
      cta: {
        header: 'Ready for a cleaner Bloomfield property?',
        description:
          'Send us photos of your surfaces and we will put together a cleaning plan tailored to your home.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email the Team'
      }
    }
  },
  'soft-washing': {
    montclair: {
      slug: 'montclair',
      city: 'Montclair',
      county: 'Essex County',
      state: 'NJ',
      geo: { latitude: 40.8203, longitude: -74.2108 },
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
      geo: { latitude: 40.795, longitude: -74.275 },
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
    },
    ridgewood: {
      slug: 'ridgewood',
      city: 'Ridgewood',
      county: 'Bergen County',
      state: 'NJ',
      geo: { latitude: 40.9793, longitude: -74.1168 },
      serviceName: 'Soft Washing',
      heroHighlight: 'Soft Washing Experts',
      heroImage: '/Siding.jpg',
      heroDescription: `Ridgewood's painted Victorians, cedar-shingled colonials, and mature landscaping deserve gentle care. Our soft washing process removes algae, mildew, and soot without disturbing delicate trim or garden beds.`,
      heroCta: 'Book Ridgewood Soft Washing',
      metaTitle: 'Ridgewood Soft Washing | Jones Pressure Washing',
      metaDescription:
        'Low-pressure soft washing for Ridgewood, NJ homes and storefronts. Safe cleaning for cedar, painted wood, stucco, and roofs with biodegradable solutions.',
      keywords: [
        'Ridgewood soft washing',
        'soft washing Ridgewood NJ',
        'Ridgewood roof cleaning',
        'Ridgewood siding cleaning'
      ],
      introHeading: `Protect Ridgewood's character with gentle cleaning`,
      introParagraphs: [
        `High-pressure water can strip paint, fuzz cedar, and crack aged mortar — surfaces that define Ridgewood's streetscape. Our soft wash process applies biodegradable detergent at low pressure, lets it dwell to kill algae at the root, then rinses clean without any surface damage.`,
        'Whether it is a slate roof on Heights Road or painted clapboard near Wilsey Square, we blend chemistry for each material so color and texture stay intact.'
      ],
      focusAreas: [
        {
          title: 'Cedar & painted siding',
          description:
            'Low-pressure detergent application that lifts mildew and green algae without fuzzing wood grain or peeling paint.'
        },
        {
          title: 'Slate & asphalt roofs',
          description:
            'Roof soft washing removes black streaks and moss colonies that shorten shingle life and trigger insurance concerns.'
        },
        {
          title: 'Downtown storefronts',
          description: `Awning, signage, and facade washing scheduled around Ridgewood's busy shopping and dining calendar.`
        }
      ],
      highlightHeading: 'Why Ridgewood homeowners choose soft washing',
      highlightDescription:
        'Delicate surfaces and mature landscaping need a team that understands chemistry over pressure.',
      highlights: [
        {
          Icon: FaLightbulb,
          header: 'Material-matched detergents',
          description:
            'We adjust soap ratios for cedar, painted wood, stucco, and vinyl so every surface gets the right treatment.'
        },
        {
          Icon: FaTree,
          header: 'Landscape protection',
          description: `Pre-soaked beds, covered shrubs, and neutralized runoff keep Ridgewood's prized gardens safe.`
        },
        {
          Icon: FaShieldHalved,
          header: 'Insurance-ready documentation',
          description:
            'Before-and-after photos and treatment reports for historic home boards and insurance carriers.'
        }
      ],
      neighborhoodHeading: 'Ridgewood neighborhoods we soft wash',
      neighborhoodDescription:
        'From estate properties to compact village lots, we tailor our approach to each block.',
      neighborhoods: [
        {
          name: 'The Heights & Upper Ridgewood',
          description:
            'Multi-story colonials and Tudors with cedar shake, copper gutters, and slate roofs.'
        },
        {
          name: 'The Lawns & Glen Avenue',
          description:
            'Painted Victorians and craftsman homes with intricate trim that needs a gentle touch.'
        },
        {
          name: 'Ridgewood Avenue shops',
          description:
            'Retail awnings, brick facades, and outdoor dining areas cleaned during off-hours.'
        },
        {
          name: 'Hawes & Prospect neighborhoods',
          description:
            'Family homes with vinyl and fiber cement siding refreshed on annual or seasonal schedules.'
        }
      ],
      faqHeading: 'Ridgewood soft washing FAQs',
      faqDescription:
        'Common questions from Ridgewood homeowners considering soft washing.',
      faqs: [
        {
          question: 'Is soft washing safe for painted wood siding?',
          answer:
            'It is the safest method. We apply cleaning solution at garden-hose pressure, let it work, then rinse gently. No paint chipping, no wood fuzzing.'
        },
        {
          question:
            'Can you soft wash my roof without voiding the shingle warranty?',
          answer:
            'Soft washing is the manufacturer-recommended cleaning method for asphalt shingles. High-pressure washing is what voids warranties — we never use it on roofs.'
        },
        {
          question:
            'How is soft washing different from the pressure washing you also offer in Ridgewood?',
          answer:
            'Pressure washing uses water force on hard surfaces like concrete and pavers. Soft washing uses chemical cleaning at low pressure for delicate surfaces like siding, roofs, and painted wood.'
        }
      ],
      cta: {
        header: 'Give your Ridgewood home the gentle clean it deserves',
        description:
          'Send us photos of your siding, roof, or trim and we will recommend the right soft wash approach.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email Photos'
      }
    },
    'fort-lee': {
      slug: 'fort-lee',
      city: 'Fort Lee',
      county: 'Bergen County',
      state: 'NJ',
      geo: { latitude: 40.851, longitude: -73.9712 },
      serviceName: 'Soft Washing',
      heroHighlight: 'Soft Washing Experts',
      heroImage: '/Siding.jpg',
      heroDescription: `Fort Lee's mix of high-rise facades, townhome siding, and historic homes near the Palisades need low-pressure cleaning that removes grime without damaging surfaces. Our soft wash process handles it all.`,
      heroCta: 'Book Fort Lee Soft Washing',
      metaTitle: 'Fort Lee Soft Washing | Jones Pressure Washing',
      metaDescription:
        'Soft washing for Fort Lee, NJ homes and buildings. Low-pressure cleaning for siding, roofs, stucco, and building facades near the GWB corridor.',
      keywords: [
        'Fort Lee soft washing',
        'soft washing Fort Lee NJ',
        'Fort Lee roof cleaning',
        'Fort Lee siding cleaning'
      ],
      introHeading: `Low-pressure cleaning for Fort Lee's diverse buildings`,
      introParagraphs: [
        'Diesel film from the GWB corridor, river humidity from the Hudson, and shade from the Palisades create a perfect storm for algae and mold growth on Fort Lee buildings. Soft washing kills organic growth at the root with biodegradable detergents — no high pressure needed.',
        'We work with building managers, HOA boards, and individual homeowners to schedule around tenants, parking, and business hours so the cleaning process stays invisible to everyone except the results.'
      ],
      focusAreas: [
        {
          title: 'Townhome siding & stucco',
          description:
            'Low-pressure detergent treatment for vinyl, Hardie board, and EIFS facades common in Fort Lee developments.'
        },
        {
          title: 'Roof moss & black streaks',
          description:
            'Soft wash roof cleaning removes gloeocapsa magma (black streaks) and moss without damaging shingles or flashing.'
        },
        {
          title: 'Building common areas',
          description:
            'Entrance canopies, covered walkways, and balcony ceilings refreshed with low-pressure rinses.'
        }
      ],
      highlightHeading: 'Soft washing built for Fort Lee conditions',
      highlightDescription:
        'Bridge corridor pollution and Hudson River moisture demand cleaning solutions, not just water pressure.',
      highlights: [
        {
          Icon: FaLightbulb,
          header: 'Pollution-cutting chemistry',
          description:
            'Our detergent blends break down diesel film and organic growth that simple rinsing cannot touch.'
        },
        {
          Icon: FaHouse,
          header: 'Multi-unit coordination',
          description:
            'We schedule around building rules, provide resident notices, and leave common areas dry and accessible.'
        },
        {
          Icon: FaShieldHalved,
          header: 'COI & documentation',
          description:
            'Insurance certificates, before-and-after reports, and treatment logs for property management files.'
        }
      ],
      neighborhoodHeading: 'Fort Lee areas we soft wash',
      neighborhoodDescription:
        'From Palisade cliffs to Main Street, we clean every type of Fort Lee property.',
      neighborhoods: [
        {
          name: 'Palisade Avenue high-rises',
          description:
            'Balcony ceilings, entrance facades, and covered parking areas cleaned with low-overspray methods.'
        },
        {
          name: 'Colonial Court & Constitution Park',
          description:
            'Single-family and townhome siding, roofs, and fences refreshed on annual schedules.'
        },
        {
          name: 'Main Street district',
          description:
            'Commercial awnings, signage, and second-story facades cleaned during early-morning hours.'
        },
        {
          name: 'Linwood neighborhood',
          description:
            'Residential roofs and siding treated for algae and mold in shaded, tree-heavy blocks.'
        }
      ],
      faqHeading: 'Fort Lee soft washing FAQs',
      faqDescription:
        'Questions Fort Lee residents and building managers ask before booking.',
      faqs: [
        {
          question: 'Can you soft wash high-rise building exteriors?',
          answer:
            'We handle low-rise and mid-rise facades, balcony ceilings, and entrance areas. For buildings above four stories, we can assess and recommend the right approach.'
        },
        {
          question:
            'Is soft washing safe for the stucco and EIFS common on Fort Lee buildings?',
          answer:
            'Soft washing is the recommended method. Low-pressure application avoids water intrusion behind stucco and EIFS that high-pressure washing can cause.'
        },
        {
          question: 'How do you deal with the soot film from bridge traffic?',
          answer:
            'We use a degreasing pre-treatment that dissolves diesel film and particulate matter before the soft wash solution is applied.'
        }
      ],
      cta: {
        header: 'Clean up your Fort Lee property the gentle way',
        description:
          'Share building specs or photos and we will recommend the right soft washing approach for your surfaces.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email the Team'
      }
    },
    'cliffside-park': {
      slug: 'cliffside-park',
      city: 'Cliffside Park',
      county: 'Bergen County',
      state: 'NJ',
      geo: { latitude: 40.8215, longitude: -73.9876 },
      serviceName: 'Soft Washing',
      heroHighlight: 'Soft Washing Crew',
      heroImage: '/Siding.jpg',
      heroDescription: `Cliffside Park's hillside homes trap moisture and shade that accelerate mold and algae on siding, roofs, and fences. Our soft wash process removes growth at the root without any high-pressure risk.`,
      heroCta: 'Book Cliffside Park Soft Washing',
      metaTitle: 'Cliffside Park Soft Washing | Jones Pressure Washing',
      metaDescription:
        'Soft washing for Cliffside Park, NJ homes. Safe, low-pressure cleaning for siding, roofs, fences, and decks in close-quarter hillside neighborhoods.',
      keywords: [
        'Cliffside Park soft washing',
        'soft washing Cliffside Park NJ',
        'Cliffside Park roof cleaning',
        'Cliffside Park siding cleaning'
      ],
      introHeading: `Gentle cleaning for Cliffside Park's hillside homes`,
      introParagraphs: [
        'Hillside grading and dense tree cover keep Cliffside Park properties damp longer than flatland homes. That moisture feeds algae, mold, and moss on siding, roofs, and wood fences. Soft washing applies cleaning solution at low pressure to kill growth at the root — results last longer than pressure alone.',
        'We work in compact lots with splash guards and short hose runs, keeping detergent off neighboring properties and parked cars along narrow streets.'
      ],
      focusAreas: [
        {
          title: 'Vinyl & Hardie board siding',
          description:
            'Low-pressure cleaning that lifts green algae and oxidation without warping, cracking, or voiding warranties.'
        },
        {
          title: 'Roof moss treatment',
          description:
            'Soft wash application that kills moss and black algae streaks, with results continuing to improve over 4-6 months.'
        },
        {
          title: 'Wood fences & decks',
          description:
            'Gentle detergent rinse that brightens wood without fuzzing grain or stripping stain.'
        }
      ],
      highlightHeading: 'Soft washing designed for tight lots',
      highlightDescription:
        'Our compact setup and neighbor-conscious process keeps every job contained.',
      highlights: [
        {
          Icon: FaHouse,
          header: 'Close-quarter expertise',
          description: `Splash guards, angled nozzles, and short hose runs keep solution on your property and off your neighbor's.`
        },
        {
          Icon: FaTree,
          header: 'Plant-safe chemistry',
          description:
            'We pre-soak landscaping and use biodegradable solutions that neutralize before reaching soil.'
        },
        {
          Icon: FaStar,
          header: 'Lasting results',
          description:
            'Soft washing kills organic growth at the root. Surfaces stay cleaner 2-3x longer than pressure-only cleaning.'
        }
      ],
      neighborhoodHeading: 'Cliffside Park blocks we soft wash',
      neighborhoodDescription:
        'Every street in the borough gets the same careful treatment.',
      neighborhoods: [
        {
          name: 'Anderson Avenue homes',
          description:
            'Multi-family siding and roof cleaning with resident-friendly scheduling and minimal disruption.'
        },
        {
          name: 'Gorge Road hillside',
          description:
            'Moisture-prone homes with heavy moss on north-facing roofs and shaded siding.'
        },
        {
          name: 'Palisade Avenue properties',
          description:
            'Mixed residential and commercial facades cleaned with low-overspray technique.'
        },
        {
          name: 'Edgewater border townhomes',
          description:
            'Newer construction with composite siding and deck materials we soft wash on annual contracts.'
        }
      ],
      faqHeading: 'Cliffside Park soft washing FAQs',
      faqDescription:
        'Questions from Cliffside Park homeowners about the soft wash process.',
      faqs: [
        {
          question: 'Why does my siding get green so fast in Cliffside Park?',
          answer:
            'Hillside shade and moisture retention create ideal conditions for algae. Soft washing kills it at the root so it takes much longer to return compared to power rinsing.'
        },
        {
          question: 'Will the cleaning solution harm my plants or pets?',
          answer:
            'We use biodegradable solutions and pre-soak all landscaping before application. After treatment we neutralize any residue. Pets should stay inside during application and drying.'
        },
        {
          question:
            'How long before I see full results on my roof after soft washing?',
          answer:
            'Most organic growth changes color within days. Full results — moss drying and falling off — take 4-6 months with help from rain and wind. We re-treat at no cost if needed.'
        }
      ],
      cta: {
        header: 'Ready for a mold-free Cliffside Park home?',
        description:
          'Tell us which surfaces need attention and we will build a soft wash plan for your property.',
        cta: 'Get an Instant Quote',
        buttonLabel: 'Email Photos'
      }
    },
    bloomfield: {
      slug: 'bloomfield',
      city: 'Bloomfield',
      county: 'Essex County',
      state: 'NJ',
      geo: { latitude: 40.8068, longitude: -74.1854 },
      serviceName: 'Soft Washing',
      heroHighlight: 'Soft Washing Experts',
      heroImage: '/Siding.jpg',
      heroDescription: `Bloomfield's mature tree canopy keeps homes shaded and damp — perfect conditions for algae, mold, and moss on siding and roofs. Our soft wash process cleans gently and kills growth at the root for lasting results.`,
      heroCta: 'Book Bloomfield Soft Washing',
      metaTitle: 'Bloomfield Soft Washing | Jones Pressure Washing',
      metaDescription:
        'Soft washing for Bloomfield, NJ homes. Safe, low-pressure cleaning for siding, roofs, and fences near Brookdale Park and Watsessing Park.',
      keywords: [
        'Bloomfield soft washing',
        'soft washing Bloomfield NJ',
        'Bloomfield roof cleaning',
        'Bloomfield siding cleaning'
      ],
      introHeading: `Kill algae at the root on Bloomfield's shaded homes`,
      introParagraphs: [
        `Brookdale Park's canopy and Watsessing Park's tree lines dump pollen, sap, and moisture onto nearby homes all season. High-pressure washing spreads mold spores and damages siding. Soft washing applies cleaning solution that penetrates and kills organic growth — then rinses clean without any surface damage.`,
        'We see Bloomfield homes with green siding, black-streaked roofs, and mossy fences every week. Our detergent blends are calibrated for the vinyl, fiber cement, and painted wood common in Bloomfield neighborhoods.'
      ],
      focusAreas: [
        {
          title: 'Vinyl & fiber cement siding',
          description:
            'Low-pressure cleaning that removes oxidation, green algae, and mildew stains without cracking or warping.'
        },
        {
          title: 'Roof black streaks & moss',
          description:
            'Soft wash treatment that kills gloeocapsa magma algae and moss — the stains insurance companies flag.'
        },
        {
          title: 'Fences & pergolas',
          description:
            'Gentle wood and vinyl fence cleaning that restores color without stripping stain or fuzzing grain.'
        }
      ],
      highlightHeading: 'Soft washing tuned for Bloomfield conditions',
      highlightDescription:
        'Heavy shade and mature trees mean Bloomfield homes need chemical cleaning, not just water pressure.',
      highlights: [
        {
          Icon: FaTree,
          header: 'Canopy-zone specialists',
          description:
            'We know which detergent concentration handles the heavy organic growth that park-adjacent homes collect.'
        },
        {
          Icon: FaLightbulb,
          header: 'Surface-specific chemistry',
          description:
            'Different soap ratios for vinyl siding, painted wood, fiber cement, and asphalt shingles.'
        },
        {
          Icon: FaCalendarCheck,
          header: 'Seasonal timing',
          description:
            'We recommend post-pollen spring cleaning and a fall treatment before leaves trap moisture against your home.'
        }
      ],
      neighborhoodHeading: 'Bloomfield neighborhoods we soft wash',
      neighborhoodDescription:
        'From park perimeters to downtown blocks, every Bloomfield surface gets the right treatment.',
      neighborhoods: [
        {
          name: 'Brookdale Park area',
          description:
            'Heavily shaded homes with north-facing siding and roofs that grow algae fastest.'
        },
        {
          name: 'Watsessing Heights',
          description:
            'Elevated lots where morning dew lingers longer, feeding moss on roofs and fences.'
        },
        {
          name: 'Downtown & Broad Street',
          description:
            'Mixed-use facades, awnings, and second-story siding cleaned during off-hours.'
        },
        {
          name: 'JFK Drive neighborhood',
          description:
            'Family homes with vinyl siding and backyard fences refreshed on annual soft wash schedules.'
        }
      ],
      faqHeading: 'Bloomfield soft washing FAQs',
      faqDescription:
        'Common questions from Bloomfield homeowners about soft washing.',
      faqs: [
        {
          question:
            'Why does my siding turn green so fast near Brookdale Park?',
          answer:
            'Park canopy keeps your siding shaded and damp — ideal for algae. Soft washing kills it at the root so regrowth takes significantly longer than rinsing with pressure alone.'
        },
        {
          question: 'Will soft washing remove the black streaks on my roof?',
          answer:
            'Yes. Black streaks are caused by gloeocapsa magma algae. Our soft wash solution kills the algae and the streaks fade over the following weeks as rain washes dead material away.'
        },
        {
          question: 'Can you soft wash vinyl fences and pergolas?',
          answer:
            'Absolutely. Vinyl responds well to soft washing. We remove oxidation and green algae buildup and restore the original color without any scrubbing or high pressure.'
        }
      ],
      cta: {
        header: 'Give your Bloomfield home a fresh start',
        description:
          'Send us photos of your siding, roof, or fence and we will recommend the right soft wash plan.',
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
