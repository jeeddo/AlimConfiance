import { faArrowUp as arrowUpIcon, faArrowDown as arrowDownIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { SortFilter } from "../../types/filter.d"
interface SortButtonsProps {
    setSortFilter: (filter: React.SetStateAction<SortFilter>) => void,
    setIsFilterActivated: (isActivated: React.SetStateAction<boolean>) => void
}
export default function SortButtons({setSortFilter, setIsFilterActivated}: SortButtonsProps) {
    const handleMostRecent = () => {
        setSortFilter('mostRecent')
        setIsFilterActivated(true)
    }
    const handleBestRated = () => {
        setSortFilter('bestRated')
        setIsFilterActivated(true)
    }
    return     <div className='flex justify-center items-center gap-3 sm:gap-5 lg:gap-7 text-xs sm:text-sm'>
    <button onClick={handleMostRecent} className='md:px-4 sm:px-3 px-2 py-1 flex justify-center items-center gap-2 rounded-md hover:bg-secondary transition duration-500'>Les plus récents <FontAwesomeIcon className='text-xs' icon={arrowUpIcon} /></button>
    <button onClick={handleBestRated} className='md:px-4 sm:px-3 px-2 py-1 flex justify-center items-center gap-2 rounded-md hover:bg-secondary transition duration-500'>Les mieux notés <FontAwesomeIcon className='text-xs' icon={arrowDownIcon} /></button>
</div>
}