import { cn } from '../../../utils-lib/cn'
import { cva } from 'cva'

interface InputProps extends React.ComponentProps<'input'> {}
export default function Input({
  type,
  className,
  ref,
  placeholder,
  ...props
}: InputProps) {
  const inputVariants = cva(
    'bg-slate-100 px-4 py-1 shadow-md outline-none transition-all duration-500 placeholder:select-none focus:shadow-lg focus:ring-2'
  )
  return (
    <input
      type={type}
      ref={ref}
      placeholder={placeholder}
      {...props}
      className={cn(inputVariants(), className)}
    />
  )
}
