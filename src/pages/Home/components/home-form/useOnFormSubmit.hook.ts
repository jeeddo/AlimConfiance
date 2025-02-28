import { getFilteredRestaurants } from '../../services/restaurant'
import { SortFilter } from '../../types/filter'
import { Restaurant } from '../../types/restaurant'
import { LIMIT } from '../../utils-lib/constants'
import { useEffect } from 'react'

export default function useOnFormSubmit(
  hygieneLevel: string,
  sortFilter: SortFilter,
  offset: number,
  isFilterActivated: boolean,
  inputValue: string,
  setisFilterMobileActivated: (
    isActivated: React.SetStateAction<boolean>
  ) => void,
  setFilteredData: (results: React.SetStateAction<Restaurant[]>) => void,
  setNbOfRestaurant: (nbRestaurant: React.SetStateAction<number>) => void,
  setIsFilteredRestaurantLoading: (
    isLoading: React.SetStateAction<boolean>
  ) => void,
  setIsFilterActivated: (isActivated: React.SetStateAction<boolean>) => void,
  setError: (error: React.SetStateAction<string>) => void
): (e?: React.FormEvent<HTMLFormElement>) => Promise<void> {
  const handleFormSubmit = async (
    e?: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    if (e) e.preventDefault()
    if (!inputValue && hygieneLevel === 'Tous les niveaux' && !sortFilter) {
      setError('Le formulaire est vide..')
      return
    }
    setisFilterMobileActivated(false)
    setIsFilteredRestaurantLoading(true)
    setIsFilterActivated(true)
    const { restaurants, total_count } = await getFilteredRestaurants(
      inputValue,
      hygieneLevel,
      sortFilter,
      LIMIT,
      offset
    )
    setFilteredData(restaurants)
    setNbOfRestaurant(total_count)
    setIsFilteredRestaurantLoading(false)
  }
  useEffect(() => {
    if (isFilterActivated) handleFormSubmit()
  }, [offset, sortFilter])

  return handleFormSubmit
}
