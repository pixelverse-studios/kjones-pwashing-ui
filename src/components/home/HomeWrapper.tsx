'use client'

import { ReactNode } from 'react'
import { AnimationProvider } from '@/lib/AnimationContext'

interface HomeWrapperProps {
  children: ReactNode
}

export default function HomeWrapper({ children }: HomeWrapperProps) {
  return <AnimationProvider>{children}</AnimationProvider>
}
