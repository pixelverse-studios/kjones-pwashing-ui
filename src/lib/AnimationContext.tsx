'use client'

import { createContext, useContext, ReactNode } from 'react'
import { Variants } from 'framer-motion'

// Smooth easing curve
const smoothEase = [0.25, 0.1, 0.25, 1] as const

// Blur fade animation variants
const blurVariants = {
  container: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.16, delayChildren: 0.12 }
    }
  } as Variants,
  item: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: smoothEase }
    }
  } as Variants,
  slideLeft: {
    hidden: { opacity: 0, filter: 'blur(15px)', x: -10 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      transition: { duration: 1.0, ease: smoothEase }
    }
  } as Variants,
  slideRight: {
    hidden: { opacity: 0, filter: 'blur(15px)', x: 10 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      transition: { duration: 1.0, ease: smoothEase }
    }
  } as Variants
}

interface AnimationContextValue {
  variants: typeof blurVariants
  refreshKey: number
}

const AnimationContext = createContext<AnimationContextValue | null>(null)

export function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <AnimationContext.Provider
      value={{ variants: blurVariants, refreshKey: 0 }}>
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

// Viewport settings - trigger earlier so animations are visible
export const viewport = {
  once: true,
  margin: '-100px' as const
}

// Subtle hover effect
export const cardHover = {
  y: -3,
  transition: { duration: 0.25, ease: 'easeOut' }
}
