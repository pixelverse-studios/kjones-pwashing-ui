import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { Logo, Driveway, Roof, Patio, Sidewalk } from '../../public/image'

interface InfoImage {
  title: string
  //yea yea i know its an any but its gonna be a string when we pull from the db so just be happy i typed something when i didnt need to
  src: any
}

const infoImages: InfoImage[] = [
  {
    title: 'Roofs',
    src: Roof
  },
  {
    title: 'Patio/Decks',
    src: Patio
  },
  {
    title: 'Driveways',
    src: Driveway
  },
  {
    title: 'Sidewalks/Walkways',
    src: Sidewalk
  }
]

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Coming Soon Banner */}
      <div className={styles.comingSoon}>More Coming Soon!</div>

      <div className={styles.logoContainer}>
        <Image
          src={Logo}
          alt="Kyle Jones Pressure Washing"
          width={900}
          height={550}
          priority={true}
        />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.header}>Pressure & Soft Washing</h2>
        <div className={styles.imagesContainer}>
          {infoImages.map((image, index) => {
            return (
              <div className={styles.imageHolder} key={index}>
                <div className={styles.title}>{image.title}</div>
                <Image
                  src={image.src}
                  alt={image.title}
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
            )
          })}
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contact}>
            <div className={styles.contactIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <p className={styles.contactDetail}>973-486-4403</p>
          </div>
          <div className={styles.contact}>
            <Link
              href={'mailto:Kyle@JonesPressureWashingNJ.com'}
              className={styles.contactIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </Link>
            <Link
              href={'mailto:Kyle@JonesPressureWashingNJ.com'}
              className={styles.contactDetail}>
              Kyle@JonesPressureWashingNJ.com
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
