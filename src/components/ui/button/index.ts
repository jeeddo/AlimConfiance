import { cva, type VariantProps } from "cva"

export const buttonVariants = cva('px-5 py-2 rounded-lg transition-all duration-700 flex justify-center items-center gap-2 whitespace-nowrap focus-within:outline-2 focus-within:outline-dashed focus-within:outline-indigo focus-within:outline-offset-4',
{
    variants: {
        variant: {
            main: 'text-white bg-main px-7 py-2 shadow-md shadow-main hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-primary hover:rounded-xl hover:-translate-y-1',
            outline: `text-main bg-transparent shadow-lg border border-main hover:bg-main hover:text-white hover:shadow-xl`,
            ghost: 'rounded-md hover:bg-secondary'
        },
        isDisabled: {
            false: null,
            true: ['cursor-not-allowed', 'opacity-65']
        }
    },
    defaultVariants: {
        variant : 'main',
        isDisabled: false
    }
});

export type ButtonVariants = VariantProps<typeof buttonVariants>