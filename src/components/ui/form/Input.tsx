import { cva } from "cva";
import { cn } from "../../../utils-lib/cn";

interface InputProps extends React.ComponentProps<'input'> {}
export default function Input({type, className, ref, placeholder, ...props}: InputProps) {
    const inputVariants = cva('px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none placeholder:select-none')
    return <input type={type} ref={ref} placeholder={placeholder} {...props} className={cn(inputVariants(), className)} />

}