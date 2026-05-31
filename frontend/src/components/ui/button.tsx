import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-candora-900 text-candora-50 shadow-soft hover:bg-candora-800 hover:shadow-card active:scale-[0.98]',
        secondary:
          'border border-candora-200 bg-candora-50 text-candora-900 shadow-soft hover:bg-candora-100 hover:border-candora-300',
        outline:
          'border border-candora-300 bg-transparent text-candora-900 hover:bg-candora-100/80 hover:border-candora-400',
        ghost:
          'text-candora-700 hover:bg-candora-100/60 hover:text-candora-900',
        olive:
          'bg-candora-olive text-candora-50 shadow-soft hover:bg-candora-700 active:scale-[0.98]',
        link: 'text-candora-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 rounded-sm px-4 text-xs tracking-wide',
        lg: 'h-12 rounded-sm px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
