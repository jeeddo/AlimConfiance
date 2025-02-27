import { buttonVariants, ButtonVariants } from ".";
import { cn } from "../../../utils-lib/cn";


interface ButtonProps extends ButtonVariants, React.ButtonHTMLAttributes<HTMLButtonElement> {
    ref?: React.RefObject<HTMLButtonElement | null>
}
export default function Button({children, className, ref, variant, disabled, isDisabled, type = 'button', ...props}: ButtonProps) {
    return <button type={type} disabled={disabled} ref={ref} className={cn(buttonVariants({isDisabled, variant}), className)} {...props}>
        {children}
    </button>
}