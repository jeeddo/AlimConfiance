import useDebounce from '../../../../hooks/useDebounce'
import { getLocations } from '../../services/location'
import { getSpecificRestaurant } from '../../services/restaurant'
import { AutocompleteValue } from '../../types/autocomplete'
import { useCallback, useEffect, useState } from 'react'

export default function useFetchAutocomplete(
  input: string,
  isInForm: boolean,
  isLiClicked: boolean,
  setAutocompleteVisibility: (
    visibility: React.SetStateAction<'' | 'hidden'>
  ) => void,
  setIsAutocompleteVisible?: (isVisible: React.SetStateAction<boolean>) => void,
  inputValue?: string,
  isSearchBtnClicked?: boolean
) {
  const [autocompleteValues, setAutocompleteValues] = useState<
    AutocompleteValue[]
  >([])
  const [isLoading, setLoading] = useState(false)

  useDebounce(
    useCallback(
      () => fetchAutocomplete(inputValue ?? input),
      // eslint-disable-next-line
      [input, inputValue]
    ),
    600,
    input,
    inputValue
  )

  const verifyEntry = useCallback((): boolean => {
    if ((!inputValue && isInForm) || (!input && !isInForm) || isLiClicked) {
      setAutocompleteVisibility('hidden')
      setIsAutocompleteVisible?.(false)
      return false
    }
    return true
  }, [
    isInForm,
    input,
    inputValue,
    isLiClicked,
    setAutocompleteVisibility,
    setIsAutocompleteVisible
  ])

  useEffect(() => {
    verifyEntry()
  }, [isLiClicked, verifyEntry])

  useEffect(() => {
    setAutocompleteValues(prev => (prev.length ? [] : prev))
  }, [isSearchBtnClicked])

  const fetchAutocomplete = async (inputValue: string): Promise<void> => {
    if (!verifyEntry()) return
    setAutocompleteVisibility('')
    setIsAutocompleteVisible?.(true)
    setLoading(true)

    if (!isSearchBtnClicked && isInForm) {
      const locations = await getLocations(inputValue)
      setAutocompleteValues(locations)
    } else {
      const searchedRestaurant = await getSpecificRestaurant(inputValue)
      setAutocompleteValues(searchedRestaurant)
    }
    setLoading(false)
  }

  return {
    autocompleteValues,
    isLoading
  }
}
