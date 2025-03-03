import { HelpToSearch } from '../../pages/Home/types/helpSeach'
import { checkType } from '../../utils-lib/checkType'
import { cn } from '../../utils-lib/cn'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'cva'

interface TooltipProps extends React.ComponentProps<'span'> {
  icon: IconDefinition
  dataToDisplay: string | HelpToSearch
}
const tooltipVariants = cva(
  "relative text-center text-sm tracking-tighter before:absolute before:-right-2 before:top-[145%] before:z-10 before:w-[230px] before:origin-top-right before:scale-0 before:whitespace-pre-line before:rounded-lg before:border before:border-secondary before:bg-primary before:px-5 before:py-2 before:italic before:shadow-lg before:transition before:duration-700 before:content-[attr(data-tooltip)] after:absolute after:right-[1px] after:top-[116%] after:z-20 after:origin-bottom-right after:scale-0 after:border-b-[6px] after:border-l-[4px] after:border-r-[4px] after:border-secondary after:border-l-transparent after:border-r-transparent after:transition after:duration-700 after:content-[''] hover:before:scale-100 hover:after:scale-100"
)

export default function Tooltip({
  dataToDisplay,
  icon,
  ref,
  className,
  ...props
}: TooltipProps) {
  function dataToString(value: string | HelpToSearch): string {
    const isString = checkType<string | HelpToSearch, string>(
      value,
      value => typeof value === 'string'
    )
    if (isString) return value
    const { demo, title, subtitle } = value
    const [choiceOne, choiceTwo, choiceThree] = demo.slice(0, 3)
    return (
      title +
      '\n' +
      subtitle +
      choiceOne.name +
      ', ' +
      choiceTwo.name +
      ', ' +
      choiceThree.name +
      '.'
    )
  }
  return (
    <span
      ref={ref}
      data-tooltip={dataToString(dataToDisplay)}
      className={cn(tooltipVariants(), className)}
      {...props}>
      <FontAwesomeIcon icon={icon} />
    </span>
  )
}
