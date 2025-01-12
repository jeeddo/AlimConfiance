import type {Rating} from "./ratings"

export interface Restaurant {
name: string,
address: string,
postalCode: number,
city: string,
inspectionDate: string,
activity: string,
rating: Rating
}