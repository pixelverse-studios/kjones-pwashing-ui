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
      'Safely clean vinyl, brick, stucco, or painted surfaces without risk of damage from high pressure. Common issues we treat include oxidation from UV exposure and buildup from age or neglect.'
  },
  {
    img: '/fence cleaning2.jpeg',
    imgAlt: 'Fence cleaning image',
    header: 'Fences',
    description:
      'Restore the look of wood or vinyl fencing with thorough soft washing that cleans without causing surface damage.'
  },
  {
    img: '/Jones_Pressure_Washing_Roof_Cleaning.png',
    imgAlt: 'Roof cleaning image',
    header: 'Roofs',
    description:
      'Remove moss, mold, and black streaks from shingles using a higher-concentration soft wash solution. We pair roof cleaning with a house wash so you do not end up with clean spots next to dirty areas.'
  }
]

const highlights: ServiceHighlightType[] = [
  {
    Icon: FaShieldHeart,
    header: 'Protects Surfaces',
    description:
      'Soft washing penetrates deeper than pressure alone for organic material like moss, mold, and algae — so results last longer.'
  },
  {
    Icon: FaHouseCircleCheck,
    header: 'Improves Curb Appeal',
    description:
      'Extends surface life and enhances property value by removing years of buildup without causing damage.'
  },
  {
    Icon: FaFileContract,
    header: 'Insurance Approved',
    description:
      'Many insurance companies require roof cleaning if moss is present. Non-compliance can result in dropped coverage. Our soft wash satisfies those requirements.'
  }
]

export default { services, highlights }
