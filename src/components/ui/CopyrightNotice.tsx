import { ClassName } from '../../types/common'
import { cn } from '../../utils-lib/cn'

export interface CopyrightNoticeProps extends ClassName {
  name?: string
  message?: string
}
export default function CopyrightNotice({
  className,
  message = 'All right reserved',
  name = 'AlimConfiance'
}: CopyrightNoticeProps) {
  return (
    <p
      className={cn(
        'text-center text-xs leading-5 sm:text-sm dark:font-semibold',
        className
      )}>
      © {new Date().getFullYear()} by {name}. <br /> {message}.
    </p>
  )
}
