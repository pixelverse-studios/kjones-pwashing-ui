'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from 'react'
import { Variants } from 'framer-motion'

export type AnimationStyle = 'gentle' | 'cascade' | 'blur' | 'scale'

export const animationStyles: Record<
  AnimationStyle,
  { name: string; description: string; icon: string }
> = {
  gentle: { name: 'Gentle Fade', description: 'Soft opacity fade', icon: '○' },
  cascade: { name: 'Cascade', description: 'Sequential reveal', icon: '◐' },
  blur: { name: 'Blur Fade', description: 'Deblur entrance', icon: '◑' },
  scale: { name: 'Scale Fade', description: 'Subtle grow', icon: '●' }
}

const smoothEase = [0.25, 0.1, 0.25, 1] as const

const createVariants = (style: AnimationStyle) => {
  switch (style) {
    case 'gentle':
      return {
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
    case 'cascade':
      return {
        container: {
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.18, delayChildren: 0.15 }
          }
        } as Variants,
        item: {
          hidden: { opacity: 0, y: 16 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: smoothEase }
          }
        } as Variants,
        slideLeft: {
          hidden: { opacity: 0, x: -25 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.9, ease: smoothEase }
          }
        } as Variants,
        slideRight: {
          hidden: { opacity: 0, x: 25 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.9, ease: smoothEase }
          }
        } as Variants
      }
    case 'blur':
      return {
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
    case 'scale':
      return {
        container: {
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.14, delayChildren: 0.1 }
          }
        } as Variants,
        item: {
          hidden: { opacity: 0, scale: 0.94 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: smoothEase }
          }
        } as Variants,
        slideLeft: {
          hidden: { opacity: 0, scale: 0.92, x: -15 },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.9, ease: smoothEase }
          }
        } as Variants,
        slideRight: {
          hidden: { opacity: 0, scale: 0.92, x: 15 },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.9, ease: smoothEase }
          }
        } as Variants
      }
  }
}

interface AnimationContextValue {
  style: AnimationStyle
  setStyle: (style: AnimationStyle) => void
  variants: ReturnType<typeof createVariants>
  refreshKey: number
  refresh: () => void
}

const AnimationContext = createContext<AnimationContextValue | null>(null)

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [style, setStyleState] = useState<AnimationStyle>('cascade')
  const [refreshKey, setRefreshKey] = useState(0)

  const setStyle = useCallback((newStyle: AnimationStyle) => {
    setStyleState(newStyle)
    setRefreshKey(k => k + 1)
  }, [])

  const refresh = useCallback(() => {
    setRefreshKey(k => k + 1)
  }, [])

  return (
    <AnimationContext.Provider
      value={{
        style,
        setStyle,
        variants: createVariants(style),
        refreshKey,
        refresh
      }}>
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
