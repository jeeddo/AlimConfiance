import { ClassName } from '../../../types/common'
import { cn } from '../../../utils-lib/cn'
import HeaderMain, { type HeaderMainProps } from './HeaderMain'

interface HeaderLayoutProps extends HeaderMainProps, ClassName {}
export default function HeaderLayout({ className, logo }: HeaderLayoutProps) {
  return (
    <header
      className={cn(
        'mb-16 flex h-24 -translate-y-full animate-slide-in items-center justify-center bg-gradient-to-t from-transparent from-55% to-indigo to-100% opacity-0 shadow-lg shadow-secondary',
        className
      )}>
      <HeaderMain logo={logo} />
    </header>
  )
}
