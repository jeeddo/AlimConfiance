import Button from '../../../components/ui/button/Button'
import type { SortFilter } from '../types/filter'
import {
  faArrowUp as arrowUpIcon,
  faArrowDown as arrowDownIcon
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

interface SortButtonsProps {
  setSortFilter: (filter: React.SetStateAction<SortFilter>) => void
  setIsFilterActivated: (isActivated: React.SetStateAction<boolean>) => void
  sortFilter: SortFilter
  isFilterActivated: boolean
  setCurrentPage: (page: React.SetStateAction<number>) => void
}
export default function SortButtons({
  setSortFilter,
  setIsFilterActivated,
  sortFilter,
  isFilterActivated,
  setCurrentPage
}: SortButtonsProps) {
  const handleFilter = () => {
    if (!isFilterActivated) setIsFilterActivated(true)
  }
  const handleMostRecent = () => {
    if (sortFilter !== 'mostRecent') {
      setSortFilter('mostRecent')
      setCurrentPage(0) // we set the page here because it will make 2 api requests in the form component (render 2 times instead of one)
    }
    handleFilter()
  }
  const handleBestRated = () => {
    if (sortFilter !== 'bestRated') {
      setSortFilter('bestRated')
      setCurrentPage(0)
    }
    handleFilter()
  }
  return (
    <div className='flex items-center justify-center gap-3 text-xs sm:gap-5 sm:text-sm lg:gap-7'>
      <Button
        variant={'ghost'}
        onClick={handleMostRecent}
        className={clsx('px-2 py-1 duration-500 sm:px-3 md:px-4', {
          'font-bold': sortFilter === 'mostRecent'
        })}>
        Les plus récents{' '}
        <FontAwesomeIcon className='text-xs' icon={arrowUpIcon} />
      </Button>
      <Button
        variant={'ghost'}
        onClick={handleBestRated}
        className={clsx('px-2 py-1 duration-500 sm:px-3 md:px-4', {
          'font-bold': sortFilter === 'bestRated'
        })}>
        Les mieux notés{' '}
        <FontAwesomeIcon className='text-xs' icon={arrowDownIcon} />
      </Button>
    </div>
  )
}
