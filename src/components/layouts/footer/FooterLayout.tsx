import { ClassName } from '../../../types/common'
import { cn } from '../../../utils-lib/cn'
import FooterMain, { type FooterMainProps } from './FooterMain'

interface FooterLayoutProps extends FooterMainProps, ClassName {}
export default function FooterLayout({
  className,
  ...props
}: FooterLayoutProps) {
  return (
    <footer
      className={cn(
        'mt-16 flex h-24 items-center justify-center border border-b-0 border-l-0 border-r-0 border-t-main bg-gradient-to-bl from-transparent from-55% to-indigo to-100%',
        className
      )}>
      <FooterMain {...props} />
    </footer>
  )
}
