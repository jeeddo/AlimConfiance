import { checkType } from '../../../utils-lib/checkType'
import type { AutocompleteValue } from '../types/autocomplete'
import type { Restaurant } from '../types/restaurant'

export interface AutocompleteLiProps {
  setLiClicked: (isClicked: boolean) => void
  setInputValue?: (value: React.SetStateAction<string>) => void
  setRestaurantDetails: (
    restaurant: React.SetStateAction<Restaurant | null>
  ) => void
  setisFilterMobileActivated?: (
    isClicked: React.SetStateAction<boolean>
  ) => void
  value: AutocompleteValue
}

export default function AutocompleteLi({
  setLiClicked,
  setInputValue,
  setRestaurantDetails,
  value,
  setisFilterMobileActivated
}: AutocompleteLiProps) {
  const isRestaurant = checkType<AutocompleteValue, Restaurant>(
    value,
    value.type === 'Restaurant'
  )
  const handleClickRestaurantLi = (value: Restaurant) => {
    setRestaurantDetails(value)
    setisFilterMobileActivated?.(false)
  }

  const handleLiClicked = (liValue: string) => {
    setInputValue?.(liValue)
    setLiClicked(true)
    setTimeout(() => {
      setLiClicked(false)
    }, 100)
  }
  return (
    <li
      onClick={
        isRestaurant
          ? () => handleClickRestaurantLi(value)
          : e => handleLiClicked((e.target as HTMLLIElement).textContent ?? '')
      }
      className='w-full cursor-pointer truncate transition duration-700 hover:scale-105 hover:opacity-50'>
      {!isRestaurant
        ? value.city + ', ' + value.depCode
        : value.name + ` (${value.postalCode})`}
    </li>
  )
}
