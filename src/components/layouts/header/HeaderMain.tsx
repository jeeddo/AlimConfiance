import LogoAlimConfiance from '../../../assets/images/LogoAlimConfiance.svg'
import Sun from '../../../assets/images/Sun.png'
import { useGlobalContext } from '../../../contexts/global/useGlobalContext.hook'
import { useThemeContext } from '../../../contexts/theme/useThemeContext.hook'
import Button from '../../ui/button/Button'
import {
  faMoon as moonDarkMode,
  faStar as starDarkMode,
  faBars as menuIcon
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

export interface HeaderMainProps {
  logo?: string
}
export default function HeaderMain({
  logo = LogoAlimConfiance
}: HeaderMainProps) {
  const { toggleTheme, isDarkMode } = useThemeContext()
  const { toggleSideBar } = useGlobalContext()
  return (
    <div className='mx-auto flex w-full max-w-6xl items-center justify-around xl:justify-between'>
      <img
        className='min-w-[200px] max-w-[33%]'
        src={logo}
        alt='Logo AlimConfiance'
      />
      <div
        onClick={toggleTheme}
        className={clsx(
          'relative hidden w-fit cursor-pointer text-main',
          isDarkMode && 'sm:hidden',
          !isDarkMode && 'sm:inline-block'
        )}>
        <FontAwesomeIcon className='text-2xl md:text-3xl' icon={moonDarkMode} />
        <FontAwesomeIcon
          className='absolute -right-3 top-1/4 w-3 -translate-y-1/2'
          icon={starDarkMode}
        />
        <FontAwesomeIcon
          className='absolute -right-4 top-[67%] w-2 -translate-y-1/2'
          icon={starDarkMode}
        />
      </div>
      <img
        onClick={toggleTheme}
        className={clsx(
          'hidden w-7 cursor-pointer md:w-9',
          isDarkMode && 'sm:inline-block',
          !isDarkMode && 'sm:hidden'
        )}
        src={Sun}
        alt='Sun light mode'
      />
      <Button
        variant={'ghost'}
        onClick={toggleSideBar}
        className='group inline-block px-3 py-1 text-xl shadow-md hover:bg-transparent hover:py-1.5 hover:shadow-lg sm:hidden'>
        <FontAwesomeIcon
          className='transition-transform duration-500 group-hover:rotate-180'
          icon={menuIcon}
        />
      </Button>
    </div>
  )
}
