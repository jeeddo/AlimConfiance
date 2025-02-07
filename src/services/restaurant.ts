import { Restaurant } from "../types/restaurant";
import fetchData from "../utils/fetch";
import createRate from '../utils/createRate'
import { RatingsKeys } from "../types/ratings";
import { RESTAURANT_PATH } from "../utils/constants";
import formatDate from "../utils/formatDate";

type FilteredRestaurant = {total_count: number, restaurants: Restaurant[]};

export const getRestaurant = async (limit: number, offset: number): Promise<Restaurant[]> => {
   const urlPath =  RESTAURANT_PATH + '?limit=' + limit + '&offset=' + offset 
   const restaurant = await fetchData<Restaurant[]>(urlPath)
   if (restaurant === undefined) return []
   return restaurant.map((restaurant: Restaurant) => ({...restaurant, inspectionDate: formatDate(restaurant.inspectionDate), rating: createRate(restaurant.rating as RatingsKeys)}))
}


export const getSpecificRestaurant = async (queryValue: string): Promise<Restaurant[]> => {
    const urlPath =  RESTAURANT_PATH + '/search?query=' + queryValue
    const restaurant = await fetchData<Restaurant[]>(urlPath)
    if (restaurant === undefined) return []
    return restaurant.map((restaurant: Restaurant) => ({...restaurant, inspectionDate: formatDate(restaurant.inspectionDate), rating: createRate(restaurant.rating as RatingsKeys)}))
}


export const getFilteredRestaurants = async (location: string, hygieneLevel: string, sortFilter: string, limit: number, offset: number): Promise<FilteredRestaurant> => {
    const urlPath = RESTAURANT_PATH + `/filter?location=${location}&hygieneLevel=${hygieneLevel}&sortFilter=${sortFilter}&limit=${limit}&offset=${offset}`
    const restaurant = await fetchData<FilteredRestaurant>(urlPath)
    if (restaurant === undefined) return {total_count: 0, restaurants: []}
    const {total_count, restaurants} = restaurant
    return {total_count, restaurants: restaurants.map((restaurant: Restaurant) => ({...restaurant, inspectionDate: formatDate(restaurant.inspectionDate) ,rating: createRate(restaurant.rating as RatingsKeys)}))}
}