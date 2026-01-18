'use client'

import { motion } from 'framer-motion'

import ServiceCta from '@/components/services/ServiceCta'
import ServiceHero from '@/components/services/ServiceHero'

// Cascade animation variants
const smoothEase = [0.25, 0.1, 0.25, 1] as const

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase }
  }
}

const viewport = { once: true, margin: '-100px' as const }

const cityHighlights = [
  {
    name: 'Ridgewood',
    description:
      'Walkable downtown streets and classic colonials make Ridgewood a perfect canvas for roofline outlines, wreath lit dormers, and illuminated trees that welcome shoppers during holiday strolls.'
  },
  {
    name: 'Wyckoff',
    description:
      'Large properties and wooded lots benefit from layered lighting plans that combine warm white rooflines, trunk wraps, and driveway guides for safe arrivals during school concerts and parties.'
  },
  {
    name: 'Franklin Lakes',
    description:
      'Estate homes and gated communities expect elevated displays that blend symmetrical eaves, architectural uplighting, and lakeside reflections while keeping energy costs under control.'
  },
  {
    name: 'Mahwah',
    description:
      'From Ramapo Riverfront homes to Bergen County Country Club neighborhoods, Mahwah residents lean on us for color changing LEDs that keep pace with winter social calendars.'
  },
  {
    name: 'Ramsey',
    description:
      "Ramsey's mix of historic homes and new construction calls for custom clips, gentle soffit anchoring, and programmable timers that impress without overwhelming the facade."
  },
  {
    name: 'Glen Rock',
    description:
      "We highlight Glen Rock's craftsman and split level homes with tasteful ridge caps, porch garlands, and shrub nets tailored to small lots and friendly cul de sacs."
  },
  {
    name: 'Paramus',
    description:
      'Paramus homeowners focus on efficient installs that beat mall traffic. Fast scheduling, durable LED strands, and commercial grade clips help displays last through January sales.'
  },
  {
    name: 'Fair Lawn',
    description:
      'Busy families in Fair Lawn trust our ladder free crew to handle steep roof pitches, synchronized icicle lights, and walkway candy cane towers that make cul de sac displays pop.'
  },
  {
    name: 'Tenafly',
    description:
      "Tenafly estates shine with layered roof lighting, evergreen wraps, and welcoming entry arches that complement the borough's tree lined avenues and downtown boutiques."
  },
  {
    name: 'Englewood',
    description:
      "We design for Englewood's historic mansions and newer townhomes alike, combining energy smart LEDs with window silhouettes and coach light accents that suit any HOA guidelines."
  },
  {
    name: 'Fort Lee',
    description:
      'High rise balconies and single-family streets near the George Washington Bridge get tailored lighting plans that maximize visibility amid skyline views and city backdrops.'
  },
  {
    name: 'Cresskill',
    description:
      'From Coyote Road estates to tucked away cul de sacs, Cresskill homeowners request symmetrical rooflines, hedge nets, and warm white palettes that photograph well for holiday cards.'
  },
  {
    name: 'Closter',
    description:
      "Closter's mix of farmhouses and modern builds benefit from evergreen wraps, driveway stake lighting, and cross gable outlines that remain HOA compliant and storm ready."
  },
  {
    name: 'Saddle River & Upper Saddle River',
    description:
      'Residents invest in architectural lighting, grand entry garlands, and uplighting for mature trees to create luxury level curb appeal without permanent fixtures.'
  },
  {
    name: 'Allendale',
    description:
      "We protect Allendale's charming neighborhoods with weather tight connectors, soffit safe clips, and timer programming that respects quiet hours while keeping homes vibrant."
  },
  {
    name: 'Oakland',
    description:
      'Hilly terrain and wooded backdrops inspire layered lighting scenes with perimeter stake lights, roof ridges, and backyard patio glows that stay bright despite early sunsets.'
  },
  {
    name: 'Oradell',
    description:
      'Families near the reservoir choose our balanced designs with gutter safe roof clips, front yard tree wraps, and subtle color accents for community wide decorating contests.'
  },
  {
    name: 'River Vale',
    description:
      'Golf course communities favor refined roofline illumination, window wreaths, and pool house lighting that can switch from holiday reds to winter whites at the tap of a timer.'
  },
  {
    name: 'Teaneck',
    description:
      "Teaneck's diverse neighborhoods request inclusive displays, from Hanukkah blues to blended color palettes, installed with respect for property lines and shared driveways."
  },
  {
    name: 'Hackensack',
    description:
      'Downtown condos and single family homes alike rely on rapid installs, balcony safe attachments, and storefront lighting that complements Main Street events and parades.'
  }
]

const timeline = [
  {
    title: 'July - August: Planning Bergen County Holiday Displays',
    description:
      'We review photos, architectural plans, or site visits to map precise footage, gauge electrical access, and understand HOA expectations. Early booking secures premium installation windows before ladder bans or neighborhood deadlines take effect.'
  },
  {
    title: 'September - October: Design Approval & Procurement',
    description:
      'Your dedicated designer presents a 3D lighting concept complete with color palettes, focal points, and accessory options. Once approved, we reserve commercial grade LED strands, wreaths, timers, and specialty accents so inventory never delays your go live date.'
  },
  {
    title: 'Late October - Mid-November: Installation & Quality Checks',
    description:
      'Our Bergen County crew arrives with boom ladders, safety harnesses, and custom cut clips suitable for slate, cedar, asphalt, or metal roofs. Every run is tested on site, labeled, and photographed for future seasons before we hand off a simple timer schedule.'
  },
  {
    title: 'December: Proactive Maintenance',
    description:
      'Snow, wind, or a stray football will not ruin the season. We include priority service calls across the county, swapping bulbs, reattaching strands, and clearing GFCI trips so your display stays photo ready for gatherings.'
  },
  {
    title: 'January: Takedown, Storage, and Planning Ahead',
    description:
      "We remove each strand, coil and label them by elevation, and store everything in climate stable totes. Clients can reserve next year's slot before we leave, locking in preferred weekends and any requested upgrades."
  }
]

const designHighlights = [
  {
    title: 'Roofline Mastery for Colonials, Capes, and Estates',
    description:
      'Bergen County architecture ranges from classic colonials in Ridgewood to modern estates in Franklin Lakes. We custom cut each run of C9 LEDs to avoid dangling wires, use soffit safe clips that protect gutters, and choose warm white or jewel tone colors that match stone, stucco, or siding. Dormers, gables, and turrets receive accent trims so the roof reads balanced from every angle.'
  },
  {
    title: 'Landscape Lighting That Survives Snow and Wind',
    description:
      'Evergreens, river birches, and ornamental maples create natural focal points across the county. We layer trunk wraps, branch weaves, and pathway stakes rated for Bergen winters, anchoring with landscape staples and weatherproof connectors. The result is a soft, inviting glow that guides guests from curb to door even during early evening school pickups.'
  },
  {
    title: 'Entryways, Driveways, and Backyard Features',
    description:
      'From Tenafly porticos to Mahwah carriage houses, we pull attention to the spaces people use most. Custom wreaths, garland lit railings, and pergola canopies create instant wow factor for parties. For outdoor living areas, we offer dimmable cafe strands and firepit accent lighting that transition seamlessly into post holiday winter entertaining.'
  }
]

const packages = [
  {
    title: 'Signature Roofline Package',
    description:
      'Ideal for towns like Glen Rock, Paramus, and Fair Lawn where charming colonials line the block. We map roof ridges, dormers, and gutters, install warm white or color programmable LEDs, and set timers so the home glows nightly with zero manual work.'
  },
  {
    title: 'Estate & Landscape Showcase',
    description:
      'Perfect for Franklin Lakes, Saddle River, and Upper Saddle River properties with expansive acreage. This package layers roof lighting with tree wraps, driveway stakes, lit wreaths, and architectural uplighting to create a magazine worthy presentation.'
  },
  {
    title: 'Commercial & Community Display',
    description:
      'Designed for Hackensack storefronts, Fort Lee towers, and HOA entrances. We blend building outlines with pole wraps, window silhouettes, and programmable displays that stay compliant with municipal guidelines while driving foot traffic.'
  }
]

const faqs = [
  {
    question:
      'How far in advance should Bergen County homeowners book holiday lighting?',
    answer:
      "Prime installation dates fill by early fall. We recommend securing your design consultation in July or August to lock in an October or early November install before HOA restrictions or weather delays kick in. Returning clients receive first right of refusal on last year's time slot."
  },
  {
    question:
      'Do you work with homeowner association rules and village permits?',
    answer:
      'Yes. We review neighborhood covenants in Ridgewood, Wyckoff, Tenafly, and more to confirm color limits, height restrictions, and on or off times. If a village or condo board requires notices, we provide diagrams, wattage details, and insurance certificates for fast approval.'
  },
  {
    question:
      'Can the lighting match Hanukkah, Christmas, and New Year celebrations?',
    answer:
      'Our LED systems support warm white, jewel tones, and blues that suit multiple holidays. We can program alternate color scenes on smart timers so you shift from Hanukkah to Christmas to New Year Eve without calling us back for a service visit.'
  },
  {
    question:
      'What happens if a bulb burns out or a strand is damaged by weather?',
    answer:
      'Every Bergen County holiday lighting plan includes season long maintenance. Text or call us if you spot a dark section. We schedule priority repairs, replace components, and re secure clips so the entire display stays photo ready through January.'
  },
  {
    question: 'Do you store the lights after takedown?',
    answer:
      'Absolutely. After the season, we label each strand, pack them in climate controlled storage, and reserve your preferred installation window for next year. You never wrestle with totes or tangled cords again.'
  }
]

function SeasonalDetails() {
  return (
    <section className="bg-black">
      <motion.div
        className="max-w-custom mx-auto grid gap-8 px-6 py-16 md:grid-cols-[1.4fr,1fr] items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}>
        <div className="space-y-6">
          <motion.h2 className="text-white" variants={item}>
            Bergen County Holidays,{' '}
            <span className="text-primary">Handled Start to Finish</span>
          </motion.h2>
          <motion.p variants={item}>
            Skip the icy ladders and tangled totes. Our local crew designs,
            installs, maintains, and stores the holiday lighting display that
            fits your Bergen County home, HOA expectations, and calendar of
            gatherings.
          </motion.p>
          <motion.ul
            className="grid gap-3 text-sm md:text-base"
            variants={item}>
            <li>
              Commercial grade LEDs, timers, clips, and extension cords sized
              precisely for your architecture.
            </li>
            <li>
              Priority scheduling for Ridgewood, Wyckoff, Franklin Lakes, and
              nearby towns, so you beat the holiday rush.
            </li>
            <li>
              Season long maintenance and January takedown with labeled storage
              for stress free repeat installs.
            </li>
          </motion.ul>
        </div>
        <motion.div
          className="bg-secondary p-6 border border-primary rounded-lg space-y-4"
          variants={item}>
          <h3 className="text-white">Reserve Your Installation Window</h3>
          <p>
            High demand weekends sell out quickly across Bergen County. Contact
            us now to review design ideas, confirm measurements, and lock in the
            crew before slots disappear.
          </p>
          <div className="bg-black rounded-lg p-4 space-y-2 text-sm">
            <p className="font-semibold text-primary">
              Free Bergen County Design Consultation
            </p>
            <p>hello@jonespressurewashingnj.com - (973) 486-4403</p>
            <p>
              Serving Ridgewood, Wyckoff, Franklin Lakes, Tenafly, Englewood,
              and every Bergen County neighborhood in between.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function BergenCountyContent() {
  return (
    <main className="bg-black text-white">
      <ServiceHero
        img="/Homepage.jpg"
        h1={
          <>
            Bergen County{' '}
            <span className="text-primary">Holiday Lighting Experts</span>
          </>
        }
        description="Jones Pressure Washing delivers custom holiday lighting Bergen County families rely on - pro grade LEDs, careful installation, zero stress maintenance, and January takedown included."
        cta="Book My Bergen County Lighting Design"
        dimHeroContent
        height="h-[70vh]"
        explanation={<SeasonalDetails />}
      />
      <section className="bg-[#0b0b0f]">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>
              Holiday Lighting Built for Bergen County Homes and Lifestyles
            </motion.h2>
            <motion.p variants={item}>
              Bergen County bursts with neighborhood pride, from
              Ridgewood&apos;s bustling village calendar to Tenafly&apos;s
              estate lined avenues and Fort Lee&apos;s skyline views. Our
              holiday lighting Bergen County service adapts to every style. We
              map your architecture, note landscaping, and design displays that
              feel personal, whether you want warm white classics for historic
              colonials, jewel tones for modern builds, or color changing LEDs
              ready for Hanukkah, Christmas, and New Year Eve with the tap of a
              timer.
            </motion.p>
            <motion.p variants={item}>
              With licensed, insured installers stationed across the county, you
              get fast communication, punctual crews, and detailed follow up. We
              carry OSHA compliant safety gear for steep roofs in Upper Saddle
              River, use slate safe clips for Glen Rock Tudors, and protect
              custom gutters in Mahwah. Every strand is labeled and photographed
              so next year&apos;s setup is even faster. The result is a
              Pinterest ready display without weekend ladder marathons or big
              box light failures.
            </motion.p>
            <motion.p variants={item}>
              As soon as you approve the design, we handle everything: LED
              procurement, precise measurements, extension cord routing, smart
              timer setup, maintenance, takedown, and storage. Clients across
              Bergen County tell us the best part is walking outside in November
              to a magazine worthy glow they did not have to install themselves.
            </motion.p>
          </header>
          <motion.div className="grid gap-6 lg:grid-cols-3" variants={item}>
            {packages.map(pkg => (
              <motion.article
                key={pkg.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3"
                variants={item}>
                <h3 className="text-primary">{pkg.title}</h3>
                <p>{pkg.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="bg-black">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2 variants={item}>
            Cities We Transform Every Season
          </motion.h2>
          <motion.p variants={item}>
            Delivering standout holiday lighting in Bergen County starts with
            respecting the character of each borough, township, and village.
            Below are the communities that call us first when it is time to
            light up the season. If you do not see your town, reach out. Our
            service trucks cover every zip code from the Palisades to the Ramapo
            Valley.
          </motion.p>
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            variants={item}>
            {cityHighlights.map(city => (
              <motion.article
                key={city.name}
                className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3"
                variants={item}>
                <h3 className="text-primary">{city.name}</h3>
                <p>{city.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section className="bg-[#0b0b0f]">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>
              Design Styles That Stand Out in Bergen County
            </motion.h2>
            <motion.p variants={item}>
              Every display is custom, but homeowners tend to gravitate toward
              three core design blueprints depending on architecture, lot size,
              and how many holiday events they host. Here is how we make the
              most of regional features and keep the look classy, not cluttered.
            </motion.p>
          </header>
          <div className="space-y-8">
            {designHighlights.map(design => (
              <motion.article
                key={design.title}
                className="space-y-3"
                variants={item}>
                <h3 className="text-primary">{design.title}</h3>
                <p>{design.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="bg-black">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>
              Recent Bergen County Holiday Lighting Spotlights
            </motion.h2>
            <motion.p variants={item}>
              We document every installation so you can picture the impact on
              your own property. The following case studies highlight how our
              team adapts to different home styles, deadlines, and HOA rules
              across the county.
            </motion.p>
          </header>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={item}>
            <motion.article
              className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3"
              variants={item}>
              <h3 className="text-primary">
                Wyckoff Farmhouse Turned Winter Welcome
              </h3>
              <p>
                A family hosting back to back December parties wanted a cohesive
                look that was visible from both the street and the backyard
                firepit. We installed warm white C9 rooflines with dormer
                accents, wrapped four towering spruces using spiral LED
                patterns, and added flicker resistant candle bulbs to every
                window. Stake lighting guided guests down the long driveway, and
                smart timers ensured the entire display powered down before
                midnight to satisfy HOA quiet hours.
              </p>
            </motion.article>
            <motion.article
              className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3"
              variants={item}>
              <h3 className="text-primary">
                Tenafly Estate with Smart Scene Control
              </h3>
              <p>
                This project combined color changing LEDs on a steep slate roof
                with programmable RGB tree wraps. The homeowner wanted Hanukkah
                blues, Christmas reds and greens, and New Year golds without
                reinstallation. We programmed the entire layout on a Wi-Fi
                timer, provided remote access instructions, and scheduled
                proactive maintenance visits following early December storms.
                The result was a showstopping display that shifted palettes for
                every gathering.
              </p>
            </motion.article>
          </motion.div>
        </motion.div>
      </section>
      <section className="bg-[#0b0b0f]">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>
              Holiday Lighting Timeline for Bergen County Clients
            </motion.h2>
            <motion.p variants={item}>
              The fastest way to secure your dream display is to work the
              process in stages. We maintain a detailed seasonal calendar so
              Franklin Lakes estate owners, Ridgewood shopkeepers, and Ho-Ho Kus
              families always know what comes next.
            </motion.p>
          </header>
          <div className="space-y-6">
            {timeline.map(step => (
              <motion.article
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3"
                variants={item}>
                <h3 className="text-primary">{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="bg-black">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>
              Bergen County Holiday Lighting Checklist
            </motion.h2>
            <motion.p variants={item}>
              Tackle these quick tasks before our crew arrives to keep the
              installation day efficient and stress free. Share the list with
              family members or property staff so every detail is ready.
            </motion.p>
          </header>
          <motion.ul className="grid gap-4 md:grid-cols-2" variants={item}>
            <motion.li
              className="rounded-lg border border-white/10 bg-white/5 p-4"
              variants={item}>
              Test exterior outlets and jot down any circuits shared with pool
              pumps, heaters, or outdoor kitchens so we balance the load.
            </motion.li>
            <motion.li
              className="rounded-lg border border-white/10 bg-white/5 p-4"
              variants={item}>
              Trim low branches and shrubs that could block ladders from safely
              reaching roof peaks, dormers, or tall evergreens.
            </motion.li>
            <motion.li
              className="rounded-lg border border-white/10 bg-white/5 p-4"
              variants={item}>
              Move vehicles, planters, and seasonal decor away from staging
              areas so our crew can set up lifts, reels, and totes quickly.
            </motion.li>
            <motion.li
              className="rounded-lg border border-white/10 bg-white/5 p-4"
              variants={item}>
              Gather HOA guidelines, preferred color palettes, and any do not
              decorate notes so we double check the design as we install.
            </motion.li>
            <motion.li
              className="rounded-lg border border-white/10 bg-white/5 p-4"
              variants={item}>
              Schedule a quick dusk walk through to confirm focal points, timer
              settings, and photo angles before we break down ladders.
            </motion.li>
            <motion.li
              className="rounded-lg border border-white/10 bg-white/5 p-4"
              variants={item}>
              Keep pets and children indoors during ladder work and let us know
              if there are locked gates or alarms that need temporary codes.
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>
      <section className="bg-black">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <header className="space-y-4">
            <motion.h2 variants={item}>
              Frequently Asked Questions from Bergen County Homeowners
            </motion.h2>
            <motion.p variants={item}>
              We talk holiday lighting daily with homeowners, property managers,
              and storefront owners across Bergen County. These are the top
              questions we answer before, during, and after every project.
            </motion.p>
          </header>
          <div className="space-y-6">
            {faqs.map(faq => (
              <motion.article
                key={faq.question}
                className="rounded-lg border border-white/10 bg-white/5 p-6 space-y-3"
                variants={item}>
                <h3 className="text-primary">{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="bg-[#0b0b0f]">
        <motion.div
          className="max-w-custom mx-auto px-6 py-16 space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}>
          <motion.h2 variants={item}>
            Ready to Lock In the Top Holiday Lighting Crew in Bergen County?
          </motion.h2>
          <motion.p variants={item}>
            Whether you are planning a Ridgewood gingerbread night, a Saddle
            River fundraiser, or a Paramus open house, we deliver a seamless
            holiday lighting Bergen County experience. Start with a quick design
            consultation, share inspiration photos, HOA guidelines, or a
            Pinterest board, and we will translate it into a fully managed
            installation plan. The earlier you schedule, the more weekend
            options you will have and the bigger the design possibilities
            become.
          </motion.p>
          <motion.p variants={item}>
            Call, text, or email and our team will respond within one business
            day, often faster during peak season. We look forward to wrapping
            your home, storefront, or community entrance in a glow that feels
            undeniably Bergen County.
          </motion.p>
        </motion.div>
      </section>
      <ServiceCta
        header="Light Up Bergen County with Confidence"
        description="Reserve your holiday lighting design consultation now. Installation windows fill fast across Ridgewood, Wyckoff, Franklin Lakes, Tenafly, and beyond."
        cta="Reserve My Bergen County Install"
        buttonLabel="Contact Us"
      />
    </main>
  )
}
