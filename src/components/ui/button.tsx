import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-black border border-primary font-bold transition-all shadow-lg rounded-md duration-200 hover:bg-transparent hover:text-primary',
        ghost:
          'bg-transparent text-white border border-primary font-bold shadow-lg rounded-md transition-all duration-200 hover:bg-primary hover:text-black',
        ctaPrimary:
          'whitespace-normal rounded-full border border-primary bg-primary text-center text-base font-semibold leading-tight text-black duration-200 ease-out hover:bg-black hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        ctaOutline:
          'whitespace-normal rounded-full border border-primary bg-transparent text-center text-base font-semibold leading-tight text-primary duration-200 ease-out hover:bg-primary hover:text-black focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-12 w-fit px-6',
        cta: 'h-auto min-h-12 px-6 py-3',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          size === 'cta' ? 'w-fit max-w-full' : 'w-full lg:w-fit',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
