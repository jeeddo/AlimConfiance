import type { Restaurant } from "../../types/restaurant.d"
import type { AutocompleteValue, Type } from "../../types/autocomplete.d"

export interface AutocompleteLiProps {
    setLiClicked: (isClicked: boolean) => void,
    setInputValue: (value: React.SetStateAction<string>) => void,
    setRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void,
    setisFilterMobileActivated: (isClicked: React.SetStateAction<boolean>) => void
    value: AutocompleteValue
}

export default function AutocompleteLi({setLiClicked, setInputValue, setRestaurantDetails, value, setisFilterMobileActivated} : AutocompleteLiProps) {
    const isRestaurant = (value: AutocompleteValue): value is Restaurant & Type => value.type === "Restaurant"
      
    const handleClickRestaurantLi = (value: Restaurant) => {
        setRestaurantDetails(value)
        setisFilterMobileActivated(false)
    }
      
    const handleLiClicked = (liValue: string) => {
        setInputValue(liValue)
        setLiClicked(true)
        setTimeout(() => {
            setLiClicked(false)
        }, 100);
    
}
    return <li onClick={ isRestaurant(value) ? () => handleClickRestaurantLi(value) : (e) => handleLiClicked((e.target as HTMLLIElement).textContent ?? "")} className="hover:scale-105 hover:opacity-50 transition duration-700 w-full cursor-pointer">{ !isRestaurant(value) ? value.city + ', ' + value.depCode : value.name + ` (${value.postalCode})`}</li>
} 