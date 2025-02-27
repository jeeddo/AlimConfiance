import { ClassName } from "../../types/common"
import { cn } from "../../utils-lib/cn"

export interface CopyrightNoticeProps extends ClassName {
    name?: string,
    message?: string
}
export default function CopyrightNotice({className, message = 'All right reserved', name = 'AlimConfiance'}: CopyrightNoticeProps) {
    return <p className={cn('dark:font-semibold text-center  text-xs sm:text-sm leading-5 ', className)}>© {new Date().getFullYear()} by {name}. <br />  {message}.</p>
}
