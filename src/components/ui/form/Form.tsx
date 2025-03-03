import { cn } from '../../../utils-lib/cn'
import { cva } from 'cva'

type FormProps = React.ComponentProps<'form'>
export default function Form({
  children,
  className,
  action,
  ...props
}: FormProps) {
  const formVariants = cva(
    'flex w-full flex-col items-start justify-center gap-8'
  )
  return (
    <form action={action} className={cn(formVariants(), className)} {...props}>
      {children}
    </form>
  )
}
