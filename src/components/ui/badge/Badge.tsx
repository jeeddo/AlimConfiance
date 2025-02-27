import { badgeVariants, BadgeVariants } from ".";
import { cn } from "../../../utils-lib/cn";

interface BadgeProps extends React.ComponentProps<'span'>, BadgeVariants   {}
export default function Badge({children, ref, className, size, asPill, variant}: BadgeProps) {
    return <span ref={ref} className={cn(badgeVariants({size, asPill, variant}), className)}>
            {children}
        </span>
}