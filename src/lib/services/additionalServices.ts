import { FaClock, FaShield, FaToolbox, FaPercent } from 'react-icons/fa6'

import { ServiceHighlightType } from '../types/services'

const highlights: ServiceHighlightType[] = [
  {
    Icon: FaClock,
    header: 'Save Time Before Winter',
    description: 'Get everything done in one visit'
  },
  {
    Icon: FaShield,
    header: 'Avoid Roof Damage',
    description: 'Preventive maintenance saves money'
  },
  {
    Icon: FaToolbox,
    header: 'Professional Setup',
    description: 'Safe and secure installation'
  },
  {
    Icon: FaPercent,
    header: 'Bundle & Save',
    description: 'Special rates for combined services'
  }
]

export default { highlights }
