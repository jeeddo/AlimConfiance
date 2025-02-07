import type {Rating, RatingsKeys} from "./ratings"

export interface Restaurant {
name: string,
address: string,
postalCode: number,
city: string,
inspectionDate: string,
activity: string,
rating: Rating | RatingsKeys,
type: 'Restaurant'
}
