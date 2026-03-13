const ContactMap = new Map()
ContactMap.set('email', 'Hello@jonespressurewashingnj.com')
ContactMap.set('phone', '(973) 486-4403')

const BusinessInfo = {
  name: 'Jones Pressure Washing',
  streetAddress: 'Wyckoff, NJ',
  addressLocality: 'Wyckoff',
  addressRegion: 'NJ',
  postalCode: '07481',
  addressCountry: 'US',
  fullAddress: 'Wyckoff, NJ 07481',
  googleMapsUrl: 'https://maps.google.com/?q=Wyckoff,+NJ+07481',
  geo: {
    latitude: 41.0098,
    longitude: -74.1724
  },
  sameAs: [
    'https://www.instagram.com/jpw_nj?igsh=MXFsamdvYXd2NmF2eg==',
    'https://www.facebook.com/profile.php?id=61582828059432'
  ]
}

export { ContactMap, BusinessInfo }
