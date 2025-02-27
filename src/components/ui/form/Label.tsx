import { cva } from "cva"
import { cn } from "../../../utils-lib/cn"
interface LabelProps extends React.ComponentProps<'label'> {}
export default function Label({htmlFor, className, children, ...props}: LabelProps) {
    const labelVariants = cva('font-semibold italic')
    return <label htmlFor={htmlFor} className={cn(labelVariants(), className)} {...props}>
        {children}
    </label>
}