import {
  FaDroplet,
  FaShieldHalved,
  FaHouseCircleCheck,
  FaCalendarCheck
} from 'react-icons/fa6'

import { ServiceHighlightType } from '../types/services'

const highlights: ServiceHighlightType[] = [
  {
    Icon: FaDroplet,
    header: 'Prevent Water Damage',
    description:
      'Clogged gutters direct water toward your foundation instead of away from it. Regular cleaning prevents erosion and water intrusion into your home.'
  },
  {
    Icon: FaShieldHalved,
    header: 'Extend Roof Life',
    description:
      'Moss, mold, and algae break down shingles over time. Soft wash roof cleaning removes them before they cause permanent damage.'
  },
  {
    Icon: FaHouseCircleCheck,
    header: 'Protect Your Investment',
    description:
      'Many insurance companies require roof cleaning if moss is present. Non-compliance can result in dropped coverage.'
  },
  {
    Icon: FaCalendarCheck,
    header: 'Maintenance You Can Count On',
    description:
      'We recommend gutter cleaning at least twice a year. Pair it with a roof wash and we handle everything in one visit.'
  }
]

export default { highlights }
