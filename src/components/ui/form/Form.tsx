import { cva } from "cva";
import { cn } from "../../../utils-lib/cn";

interface FormProps extends React.ComponentProps<'form'> {}
export default function Form({children, className, action, ...props}: FormProps) {
    const formVariants = cva('flex flex-col justify-center items-start gap-8 w-full')
    return <form action={action} className={cn(formVariants(), className)

    } {...props} >{children}</form>

}