import { cva } from "cva"
import { cn } from "../../utils-lib/cn"

interface ErrorMsgProps extends React.ComponentProps<'div'> {}
export default function ErrorMsg({children, className, ref, ...props}: ErrorMsgProps) {
    const errorVariants = cva("w-full text-center text-xs text-poor tracking-wide")
    return <div ref={ref} className={cn(errorVariants() , className)} {...props}>{children}</div>
}