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
              <DialogTitle>Get Your Free Quote</DialogTitle>
              <DialogDescription>
                We’ll Take It From Here — Just Fill This Out
              </DialogDescription>
            </DialogHeader>
            <iframe
              id="markate-widget-contact-iframe"
              src="https://www.markate.com/public/widget/contact?id=f96d3b4541b339933da0d1e72356b5d3:59045:4bb70607"
              className="h-[90%] w-full mt-4"
              allowTransparency={true}
              style={{ border: 'none', overflow: 'hidden' }}
            />
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
