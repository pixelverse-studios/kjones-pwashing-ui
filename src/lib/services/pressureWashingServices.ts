import { FaStore, FaBuilding, FaWarehouse } from 'react-icons/fa6'

import {
  ServiceExampleType,
  ServiceHighlightType,
  ProcessStepType
} from '../types/services'

const services: ServiceExampleType[] = [
  {
    img: '/Driveway.jpg',
    imgAlt: 'Concrete image',
    header: 'Concrete',
    description:
      'Remove stains, grime, and mildew from driveways, patios and walkways with high-powered concrete cleaning.'
  },
  {
    img: '/Pool deck.jpg',
    imgAlt: 'Pool Decks image',
    header: 'Pool Decks',
    description:
      'Safely clean pool decks by removing algae, dirt, and buildup for a slip-resistant, refreshed surface.'
  },
  {
    img: '/wall clean.jpg',
    imgAlt: 'Walls image',
    header: 'Walls',
    description:
      'Restore the look of concrete or stone walls by removing stains, algae, and weather buildup.'
  }
]

const highlights: ServiceHighlightType[] = [
  {
    Icon: FaStore,
    header: 'Storefronts',
    description: 'Professional cleaning for windows, awnings, and entryways.'
  },
  {
    Icon: FaBuilding,
    header: 'Building Exteriors',
    description: 'Complete exterior cleaning for commercial buildings.'
  },
  {
    Icon: FaWarehouse,
    header: 'Warehouses',
    description: 'Industrial-grade cleaning for large facilities.'
  }
]

const steps: ProcessStepType[] = [
  {
    position: 1,
    header: 'Fill Out Contact Form',
    description: 'Quick and easy process'
  },
  {
    position: 2,
    header: 'Schedule Estimate',
    description: 'Free virtual or on-site'
  },
  {
    position: 3,
    header: 'Review Estimate',
    description: 'Clear pricing details'
  },
  {
    position: 4,
    header: 'Book Service',
    description: 'Choose your date'
  },
  {
    position: 5,
    header: 'Enjoy Results',
    description: 'Satisfaction guaranteed'
  }
]

export default { services, highlights, steps }
