'use client'

import { createContext, useContext, ReactNode } from 'react'
import { Variants } from 'framer-motion'

const smoothEase = [0.25, 0.1, 0.25, 1] as const

const variants = {
  container: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  } as Variants,
  item: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.9, ease: smoothEase }
    }
  } as Variants,
  slideLeft: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.0, ease: smoothEase }
    }
  } as Variants,
  slideRight: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.0, ease: smoothEase }
    }
  } as Variants
}

interface AnimationContextValue {
  variants: typeof variants
  refreshKey: number
}

const AnimationContext = createContext<AnimationContextValue | null>(null)

export function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <AnimationContext.Provider value={{ variants, refreshKey: 0 }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider')
  }
  return context
}

export const viewport = { once: true, margin: '-100px' as const }

export const cardHover = {
  y: -3,
  transition: { duration: 0.25, ease: 'easeOut' }
}
