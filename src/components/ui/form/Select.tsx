import { cn } from '../../../utils-lib/cn'
import { cva } from 'cva'

type SelectProps = React.ComponentProps<'select'>
export default function Select({
  className,
  children,
  id,
  ...props
}: SelectProps) {
  const selectVariants = cva(
    'w-full rounded bg-slate-100 px-4 py-1 shadow-md outline-none transition-all duration-500 focus:shadow-lg focus:ring-2'
  )
  return (
    <select {...props} className={cn(selectVariants(), className)} id={id}>
      {children}
    </select>
  )
}
