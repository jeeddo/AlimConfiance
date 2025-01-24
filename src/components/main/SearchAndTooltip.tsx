import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestion as questionMarkIcon } from "@fortawesome/free-solid-svg-icons"
import AutocompleteInput from "./AutocompleteInput"
import type { Restaurant } from "../../types/restaurant"

interface SearchAndTooltipProps {
   setisFilterMobileActivated: (isClicked: React.SetStateAction<boolean>) => void,
   setRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void
}
export default function SearchAndTooltip({setisFilterMobileActivated, setRestaurantDetails}: SearchAndTooltipProps) {
   
   return  <div className='md:hidden sm:text-base text-sm flex w-full justify-between px-2 xs:px-6 sm:px-0 sm:justify-around items-center mt-1'>
    <button onClick={() => setisFilterMobileActivated(true)} className='text-white bg-main px-7 py-2 rounded-lg shadow-md shadow-main hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-primary hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Filtrer</button>
    <AutocompleteInput isInForm={false} className="sm:w-[300px] rounded-full sm:rounded sm:placeholder:visible" setRestaurantDetails={setRestaurantDetails}/>
    <span data-tooltip="Vous pouvez rechercher un établissement selon plusieurs critères : son nom, sa commune, son code SIRET." className="before:shadow-lg before:italic before:border before:border-secondary before:px-5 before:py-2 text-sm relative before:content-[attr(data-tooltip)] before:absolute before:bg-primary before:z-10 before:w-[230px]
     before:top-[145%] before:-right-2 before:rounded-lg tracking-tighter text-center
     after:content-[''] after:absolute after:border-b-[6px] after:border-secondary
     after:border-l-[4px] after:border-l-transparent after:border-r-[4px] after:border-r-transparent after:top-[116%] after:z-20 after:right-[1px] after:scale-0 before:scale-0 hover:after:scale-100 hover:before:scale-100 before:transition after:transition after:duration-700 before:duration-700 before:origin-top-right after:origin-bottom-right"><FontAwesomeIcon icon={questionMarkIcon} /></span> 
</div>
}