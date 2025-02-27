import { Restaurant } from "../types/restaurant";
import fetchData from "../../../utils-lib/fetch";
import createRate from '../utils-lib/createRate'
import { RatingsKeys } from "../types/ratings";
import { RESTAURANT_PATH } from "../utils-lib/constants";
import formatDate from "../../../utils-lib/formatDate";
import { Unwrap } from "../../../types/common";

type FilteredRestaurant = {total_count: number, restaurants: Restaurant[]};

export const getRestaurant = async (limit: number, offset: number): Promise<Restaurant[]> => {
   const urlPath =  RESTAURANT_PATH + '?limit=' + limit + '&offset=' + offset 
   const restaurant = await fetchData<Unwrap<ReturnType<typeof getRestaurant>>>(urlPath)
   if (restaurant === undefined) return []
   return restaurant.map((restaurant: Restaurant) => ({...restaurant, inspectionDate: formatDate(restaurant.inspectionDate), rating: createRate(restaurant.rating as RatingsKeys)}))
}


export const getSpecificRestaurant = async (queryValue: string): Promise<Restaurant[]> => {
    const urlPath =  RESTAURANT_PATH + '/search?query=' + queryValue
    const restaurant = await fetchData<Unwrap<ReturnType<typeof getSpecificRestaurant>>>(urlPath)
    if (restaurant === undefined) return []
    return restaurant.map((restaurant: Restaurant) => ({...restaurant, inspectionDate: formatDate(restaurant.inspectionDate), rating: createRate(restaurant.rating as RatingsKeys)}))
}


export const getFilteredRestaurants = async (location: string, hygieneLevel: string, sortFilter: string, limit: number, offset: number): Promise<FilteredRestaurant> => {
    const urlPath = RESTAURANT_PATH + `/filter?location=${location}&hygieneLevel=${hygieneLevel}&sortFilter=${sortFilter}&limit=${limit}&offset=${offset}`
    const restaurant = await fetchData<Unwrap<ReturnType<typeof getFilteredRestaurants>>>(urlPath)
    if (restaurant === undefined) return {total_count: 0, restaurants: []}
    const {total_count, restaurants} = restaurant
    return {total_count, restaurants: restaurants.map((restaurant: Restaurant) => ({...restaurant, inspectionDate: formatDate(restaurant.inspectionDate) ,rating: createRate(restaurant.rating as RatingsKeys)}))}
}