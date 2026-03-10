'use client'

import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

interface CtaModalProps {
  label: string
  buttonClass?: string
  variant?: any
}

export default function CtaModal({
  variant = 'default',
  label,
  buttonClass
}: CtaModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={cn(buttonClass)}>
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby="contact-form-modal"
        className="h-3/4 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <DialogHeader>
              <DialogTitle>Get an Instant Quote</DialogTitle>
              <DialogDescription>
                Fill out the details below and get your quote right away.
              </DialogDescription>
            </DialogHeader>
            <iframe
              id="lavo-quote-iframe"
              src="https://lavocrm.com/quote/d0ea84e6-2337-48b9-8445-f93373361731?embed=true"
              className="h-[90%] w-full mt-4"
              style={{ border: 'none' }}></iframe>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
