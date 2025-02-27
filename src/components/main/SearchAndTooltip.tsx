import { faQuestion as questionMarkIcon } from "@fortawesome/free-solid-svg-icons"
import AutocompleteInput from "./autocomplete-input/AutocompleteInput"
import type { Restaurant } from "../../types/restaurant"
import Tooltip from "../ui/Tooltip"
import { HELP_TO_SEARCH } from "../../utils-lib/constants"
import Button from "../ui/button/Button"

interface SearchAndTooltipProps {
   setisFilterMobileActivated: (isClicked: React.SetStateAction<boolean>) => void,
   setRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void,
   isFilterMobileActivated: boolean
}
export default function SearchAndTooltip({setisFilterMobileActivated, setRestaurantDetails, isFilterMobileActivated}: SearchAndTooltipProps) {
   
   return  <div className='md:hidden sm:text-base text-sm flex w-full justify-between pl-1 pr-[1.1rem] xs:px-6 sm:justify-around items-center mt-1'>
    <Button variant={"main"} onClick={() => setisFilterMobileActivated(true)} className="hover:rounded-lg">Filtrer</Button>
    {!isFilterMobileActivated && <AutocompleteInput isInForm={false} className="sm:w-[300px] rounded-full sm:rounded sm:placeholder:visible" setRestaurantDetails={setRestaurantDetails}/>}
    <Tooltip icon={questionMarkIcon} dataToDisplay={HELP_TO_SEARCH}  />
</div>
}