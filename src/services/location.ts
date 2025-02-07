import type { Location } from "../types/autocomplete.d"
import { LOCATION_PATH } from "../utils/constants"
import fetchData from "../utils/fetch"

export const getLocations = async (queryValue: string): Promise<Location[]> => {
    const urlPath = LOCATION_PATH + '?query=' + queryValue
    const locations = await fetchData<Location[]>(urlPath)
    if (locations === undefined) return []
    return locations;
}