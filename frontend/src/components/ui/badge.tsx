import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-sm border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-candora-100 text-candora-700',
        secondary:
          'border-candora-200 bg-transparent text-candora-600',
        outline:
          'border-candora-300 text-candora-700',
        olive:
          'border-transparent bg-candora-olive/10 text-candora-olive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
