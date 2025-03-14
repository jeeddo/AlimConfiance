import { getRestaurant } from '../../../services/restaurant'
import { Restaurant } from '../../../types/restaurant'
import { LIMIT } from '../../../utils-lib/constants'
import { useEffect, useState } from 'react'

export default function useFetchRestaurant(
  offset: number,
  currentPage: number,
  isFilterActivated: boolean
) {
  const [restaurantData, setRestaurantData] = useState<Restaurant[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fecthRestaurantData = async (
      limit: number,
      offset: number
    ): Promise<void> => {
      setLoading(true)
      const restaurant = await getRestaurant(limit, offset)
      setRestaurantData(restaurant)
      setLoading(false)
    }
    if (!isFilterActivated) fecthRestaurantData(LIMIT, offset)
  }, [currentPage, isFilterActivated, offset])

  return {
    isLoading,
    restaurantData
  }
}
