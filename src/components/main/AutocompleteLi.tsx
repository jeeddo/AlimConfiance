import type { Restaurant } from "../../types/restaurant.d"
import type { AutocompleteValue, Type } from "../../types/autocomplete.d"

interface AutocompleteLiProps {
    handleLiClicked: (liValue: string) => void,
    setRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void,
    setisFilterMobileActivated: (isClicked: React.SetStateAction<boolean>) => void
    value: AutocompleteValue
}

export default function AutocompleteLi({handleLiClicked, setRestaurantDetails, value, setisFilterMobileActivated} : AutocompleteLiProps) {
    const isRestaurant = (value: AutocompleteValue): value is Restaurant & Type => value.type === "Restaurant"
      
    const handleClickRestaurantLi = (value: Restaurant) => {
        setRestaurantDetails(value)
        setisFilterMobileActivated(false)
    }
      
    return <li onClick={ isRestaurant(value) ? () => handleClickRestaurantLi(value) : (e) => handleLiClicked((e.target as HTMLLIElement).textContent ?? "")} className="hover:scale-105 hover:opacity-50 transition duration-700 w-full cursor-pointer">{ !isRestaurant(value) ? value.city + ', ' + value.depCode : value.name + ` (${value.postalCode})`}</li>
} 