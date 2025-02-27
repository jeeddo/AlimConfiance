import { cva } from "cva";
import { cn } from "../../../utils-lib/cn";

interface SelectProps extends React.ComponentProps<'select'> {}
export default function Select({className, children, id, ...props}: SelectProps) {
    const selectVariants = cva('w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded')
    return <select {...props}  className={cn(selectVariants(), className)} id={id}>{children}</select>
}