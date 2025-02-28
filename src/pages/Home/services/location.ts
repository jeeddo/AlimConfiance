import { Unwrap } from '../../../types/common'
import fetchData from '../../../utils-lib/fetch'
import type { Location } from '../types/autocomplete'
import { LOCATION_PATH } from '../utils-lib/constants'

export const getLocations = async (queryValue: string): Promise<Location[]> => {
  const urlPath = LOCATION_PATH + '?query=' + queryValue
  const locations =
    await fetchData<Unwrap<ReturnType<typeof getLocations>>>(urlPath)
  if (locations === undefined) return []
  return locations
}
