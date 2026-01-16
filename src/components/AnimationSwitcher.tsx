'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useAnimation,
  animationStyles,
  AnimationStyle
} from '@/lib/AnimationContext'

const styles: AnimationStyle[] = ['gentle', 'cascade', 'blur', 'scale']

export default function AnimationSwitcher() {
  const { style, setStyle, refresh } = useAnimation()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}>
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl min-w-[220px]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-white/60 text-xs uppercase tracking-widest font-medium">
                Animation Style
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/40 hover:text-white transition-colors text-lg leading-none">
                ×
              </button>
            </div>
            <div className="space-y-2">
              {styles.map(s => {
                const config = animationStyles[s]
                const isActive = style === s
                return (
                  <button
                    key={s}
                    onClick={() => {
                      setStyle(s)
                      setTimeout(() => setIsExpanded(false), 150)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-primary/20 border border-primary/40'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}>
                    <span
                      className={`text-lg ${isActive ? 'text-primary' : 'text-white/50'}`}>
                      {config.icon}
                    </span>
                    <div className="text-left">
                      <div
                        className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-white'}`}>
                        {config.name}
                      </div>
                      <div className="text-white/40 text-xs">
                        {config.description}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
            <button
              onClick={() => {
                refresh()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="w-full mt-4 pt-3 border-t border-white/10 text-white/50 hover:text-primary text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              Replay Animations
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(true)}
            className="group bg-black/80 backdrop-blur-xl border border-white/10 hover:border-primary/50 rounded-full px-4 py-3 shadow-2xl flex items-center gap-3 transition-all">
            <span className="text-primary text-sm">
              {animationStyles[style].icon}
            </span>
            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
              {animationStyles[style].name}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
