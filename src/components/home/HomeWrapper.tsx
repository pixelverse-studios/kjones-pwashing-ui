'use client'

import { ReactNode } from 'react'
import { AnimationProvider } from '@/lib/AnimationContext'
import AnimationSwitcher from '@/components/AnimationSwitcher'

export default function HomeWrapper({ children }: { children: ReactNode }) {
  return (
    <AnimationProvider>
      {children}
      <AnimationSwitcher />
    </AnimationProvider>
  )
}
