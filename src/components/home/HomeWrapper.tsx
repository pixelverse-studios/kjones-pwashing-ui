'use client'

import { ReactNode } from 'react'
import { AnimationProvider } from '@/lib/AnimationContext'

export default function HomeWrapper({ children }: { children: ReactNode }) {
  return <AnimationProvider>{children}</AnimationProvider>
}
