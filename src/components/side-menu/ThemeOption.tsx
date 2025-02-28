import { cn } from '../../utils-lib/cn'
import { ThemeOptionProps } from './sideMenu.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ThemeOption({
  title,
  classNameCondition,
  icon
}: ThemeOptionProps) {
  return (
    <li
      className={cn(
        'flex items-center justify-center gap-2 transition duration-500 hover:scale-95 hover:text-slate-600',
        classNameCondition
      )}>
      <FontAwesomeIcon className='w-4' icon={icon} /> {title}
    </li>
  )
}
