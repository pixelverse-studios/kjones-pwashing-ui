import {
  FaShieldHeart,
  FaHouseCircleCheck,
  FaFileContract
} from 'react-icons/fa6'

import { ServiceExampleType, ServiceHighlightType } from '../types/services'

const services: ServiceExampleType[] = [
  {
    img: '/Sidingwash.jpg',
    imgAlt: 'Siding Wash image',
    header: 'Home Siding',
    description:
      'Safely clean vinyl, brick, stucco, or painted surfaces without risk of damage from using high pressure.'
  },
  {
    img: '/fence cleaning2.jpeg',
    imgAlt: 'Fence cleaning image',
    header: 'Fences',
    description:
      'Restore the look of wqood or vinyl fencing with thorough soft washing.'
  },
  {
    img: '/Jones_Pressure_Washing_Roof_Cleaning.png',
    imgAlt: 'Roof cleaning image',
    header: 'Roofs',
    description:
      'Remove algae, black streaks, and moss from shingles using low-pressure roof-safe solutions.'
  }
]

const highlights: ServiceHighlightType[] = [
  {
    Icon: FaShieldHeart,
    header: 'Protects Surfaces',
    description: "Prevents damage while maintaining your property's integrity"
  },
  {
    Icon: FaHouseCircleCheck,
    header: 'Improves Curb Appeal',
    description: 'Extends surface life and enhances property value'
  },
  {
    Icon: FaFileContract,
    header: 'Insurance Approved',
    description: 'Meets requirements for property maintenance'
  }
]

export default { services, highlights }
