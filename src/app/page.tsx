'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

import useScrollPosition from './utls/useScrollPosition'
import { Logo, Houses, Roof, Patio, Sidewalk } from '../../public/image'
import styles from './page.module.css'

interface InfoImage {
  title: string
  src: any
}

const infoImages: InfoImage[] = [
  {
    title: 'Houses',
    ...Houses
  },
  {
    title: 'Roofs',
    ...Roof
  },
  {
    title: 'Patio/Decks',
    ...Patio
  },
  {
    title: 'Sidewalks/Walkways',
    ...Sidewalk
  }
]

export default function Home() {
  const topRef = useRef<any>(null)
  const infoRef = useRef<any>(null)
  const showingBanner = useScrollPosition(70)

  const onScrollDown = () =>
    infoRef?.current !== null
      ? infoRef.current.scrollIntoView({
          behavior: 'smooth'
        })
      : null
  const onScrollUp = () =>
    topRef?.current !== null
      ? topRef.current.scrollIntoView({
          behavior: 'smooth'
        })
      : null

  return (
    <main className={styles.main}>
      <div
        className={`${styles.comingSoon} ${
          showingBanner ? styles.show : styles.hide
        }`}>
        More Coming Soon!
      </div>
      <img
        ref={topRef}
        className={styles.logo}
        src={Logo.src}
        alt="Kyle Jones Pressure Washing"
      />
      <button
        onClick={showingBanner ? onScrollDown : onScrollUp}
        className={styles.floatingButton}>
        {showingBanner ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      <div ref={infoRef} className={styles.infoContainer}>
        <h2 className={styles.offering}>Pressure & Soft Washing</h2>
        <div className={styles.imagesContainer}>
          {infoImages.map((image, index) => (
            <div className={styles.imageHolder} key={index}>
              <div className={styles.title}>{image.title}</div>
              <img className={styles.img} src={image.src} alt={image.title} />
            </div>
          ))}
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
              href="mailto:Kyle@JonesPressureWashingNJ.com"
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
              href="mailto:Hello@JonesPressureWashingNJ.com"
              className={styles.contactDetail}>
              Hello@JonesPressureWashingNJ.com
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
