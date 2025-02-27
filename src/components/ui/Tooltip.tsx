import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HelpToSearch } from "../../utils-lib/constants";
import { checkType } from "../../utils-lib/checkType";
import { cva } from "cva";
import { cn } from "../../utils-lib/cn";
interface TooltipProps extends React.ComponentProps<'span'> {
    icon: IconDefinition,
    dataToDisplay: string | HelpToSearch
}
const tooltipVariants = cva("before:shadow-lg before:italic before:border before:border-secondary before:px-5 before:py-2 text-sm relative before:content-[attr(data-tooltip)] before:absolute before:bg-primary before:z-10 before:w-[230px] before:top-[145%] before:-right-2 before:rounded-lg tracking-tighter text-center after:content-[''] after:absolute after:border-b-[6px] after:border-secondary after:border-l-[4px] after:border-l-transparent after:border-r-[4px] after:border-r-transparent after:top-[116%] after:z-20 after:right-[1px] after:scale-0 before:scale-0 hover:after:scale-100 hover:before:scale-100 before:transition before:whitespace-pre-line after:transition after:duration-700 before:duration-700 before:origin-top-right after:origin-bottom-right ")

export default function Tooltip({dataToDisplay, icon, ref, className, ...props}: TooltipProps) {
 
    function dataToString(value: string | HelpToSearch): string {
        const isString = checkType<string | HelpToSearch, string>(value, (value) => typeof value === 'string')
        if (isString) return value;
        const {demo, title, subtitle} = value
        const [choiceOne, choiceTwo, choiceThree] = demo.slice(0, 3)
        return title + '\n' + subtitle + choiceOne.name + ', ' + choiceTwo.name + ', ' + choiceThree.name + '.'
    }
    return     <span ref={ref} data-tooltip={dataToString(dataToDisplay)} className={cn(tooltipVariants(), className)} {...props}><FontAwesomeIcon icon={icon} /></span>
}