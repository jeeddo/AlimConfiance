import Tooltip from '../../../components/ui/Tooltip'
import Button from '../../../components/ui/button/Button'
import type { Restaurant } from '../types/restaurant'
import { HELP_TO_SEARCH } from '../utils-lib/constants'
import AutocompleteInput from './autocomplete-input/AutocompleteInput'
import { faQuestion as questionMarkIcon } from '@fortawesome/free-solid-svg-icons'

interface SearchAndTooltipProps {
  setisFilterMobileActivated: (isClicked: React.SetStateAction<boolean>) => void
  setRestaurantDetails: (
    restaurant: React.SetStateAction<Restaurant | null>
  ) => void
  isFilterMobileActivated: boolean
}
export default function SearchAndTooltip({
  setisFilterMobileActivated,
  setRestaurantDetails,
  isFilterMobileActivated
}: SearchAndTooltipProps) {
  return (
    <div className='mt-1 flex w-full items-center justify-between pl-1 pr-[1.1rem] text-sm xs:px-6 sm:justify-around sm:text-base md:hidden'>
      <Button
        variant={'main'}
        onClick={() => setisFilterMobileActivated(true)}
        className='hover:rounded-lg'>
        Filtrer
      </Button>
      {!isFilterMobileActivated && (
        <AutocompleteInput
          isInForm={false}
          className='rounded-full sm:w-[300px] sm:rounded sm:placeholder:visible'
          setRestaurantDetails={setRestaurantDetails}
        />
      )}
      <Tooltip icon={questionMarkIcon} dataToDisplay={HELP_TO_SEARCH} />
    </div>
  )
}
