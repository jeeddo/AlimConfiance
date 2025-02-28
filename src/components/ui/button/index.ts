import { cva, type VariantProps } from 'cva'

export const buttonVariants = cva(
  'flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 py-2 transition-all duration-700 focus-within:outline-dashed focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-indigo',
  {
    variants: {
      variant: {
        main: 'bg-main px-7 py-2 text-white shadow-md shadow-main hover:-translate-y-1 hover:rounded-xl hover:bg-blue-600 hover:text-primary hover:shadow-lg hover:shadow-blue-600',
        outline: `border border-main bg-transparent text-main shadow-lg hover:bg-main hover:text-white hover:shadow-xl`,
        ghost: 'rounded-md hover:bg-secondary'
      },
      isDisabled: {
        false: null,
        true: ['cursor-not-allowed', 'opacity-65']
      }
    },
    defaultVariants: {
      variant: 'main',
      isDisabled: false
    }
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
