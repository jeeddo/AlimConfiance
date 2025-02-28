import { cva, type VariantProps } from 'cva'

export const badgeVariants = cva('inline-block', {
  variants: {
    variant: {
      default:
        'rounded-lg border border-indigo text-base shadow transition-all duration-700 hover:scale-105 hover:border-2 hover:shadow-md xs:hover:shadow-lg sm:text-xl',
      main: 'bg-main text-white shadow-md',
      green: 'bg-green-700 text-white shadow-md'
    },
    size: {
      xs: 'size-2',
      sm: 'px-2 py-1',
      md: 'px-3 py-4 xs:p-5',
      lg: 'px-8 py-3 xs:px-12 xs:py-5'
    },
    asPill: {
      false: 'rounded-lg',
      true: 'rounded-full'
    }
  },
  defaultVariants: {
    asPill: false
  }
})
export type BadgeVariants = VariantProps<typeof badgeVariants>
