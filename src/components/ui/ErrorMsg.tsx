import { cn } from '../../utils-lib/cn'
import { cva } from 'cva'

interface ErrorMsgProps extends React.ComponentProps<'div'> {}
export default function ErrorMsg({
  children,
  className,
  ref,
  ...props
}: ErrorMsgProps) {
  const errorVariants = cva(
    'w-full text-center text-xs tracking-wide text-poor'
  )
  return (
    <div ref={ref} className={cn(errorVariants(), className)} {...props}>
      {children}
    </div>
  )
}
