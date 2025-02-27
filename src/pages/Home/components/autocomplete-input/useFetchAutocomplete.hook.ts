import { useEffect, useState } from "react"
import { AutocompleteValue } from "../../types/autocomplete"
import { getLocations } from "../../services/location"
import { getSpecificRestaurant } from "../../services/restaurant"

export default function useFetchAutocomplete( input: string, isInForm: boolean, 
    isLiClicked: boolean,  setAutocompleteVisibility: (visibility: React.SetStateAction<'' | 'hidden'>) => void, 
setIsAutocompleteVisible?: (isVisible: React.SetStateAction<boolean>) => void,inputValue?: string, isSearchBtnClicked?: boolean) {
    const [autocompleteValues, setAutocompleteValues] = useState<AutocompleteValue[]>([])
    const [isLoading, setLoading] = useState(false)


    const verifyEntry = () => {
        if ((!inputValue && isInForm)  || (!input && !isInForm ) || isLiClicked) {
            setAutocompleteVisibility('hidden') 
            setIsAutocompleteVisible?.(false)
            return false;
        }
        return true
  }
     useEffect(() => {
            const fetchAutocomplete = async (inputValue : string) : Promise<void> => {
                if (!verifyEntry()) return;
                setAutocompleteVisibility('')
                setIsAutocompleteVisible?.(true)
                setLoading(true)
              
                 
                if (!isSearchBtnClicked && isInForm) {
                    const locations = await getLocations(inputValue)
                    setAutocompleteValues(locations); 
                }
                else {
                    const searchedRestaurant = await getSpecificRestaurant(inputValue)
                    setAutocompleteValues(searchedRestaurant)
                }
                setLoading(false)
        
            }
                  fetchAutocomplete(inputValue ?? input)
              }, [inputValue, input])

              useEffect(() => {
                verifyEntry()
              }, [isLiClicked])

           useEffect(() => {
            if (autocompleteValues.length) setAutocompleteValues([])
            }, [isSearchBtnClicked])

        return {
            autocompleteValues,
            isLoading
        }

}