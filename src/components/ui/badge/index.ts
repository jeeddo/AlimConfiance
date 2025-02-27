import { cva, type VariantProps } from "cva";

export const badgeVariants = cva('inline-block', {
    variants: {
        variant: {
            default: 'text-base sm:text-xl border border-indigo hover:border-2 hover:scale-105 hover:shadow-md xs:hover:shadow-lg transition-all duration-700 rounded-lg shadow',
            main: 'bg-main text-white shadow-md',
            green: 'bg-green-700 text-white shadow-md'
        },
        size: {
            xs: 'size-2',
            sm: 'px-2 py-1',
            md: 'px-3 py-4 xs:p-5',
            lg: 'xs:px-12 xs:py-5 px-8 py-3'
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
export type BadgeVariants = VariantProps<typeof badgeVariants>;