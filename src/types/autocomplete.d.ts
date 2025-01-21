import type { Restaurant } from "./restaurant"

interface Location {
    city: string,
    depCode: string
}
type Type = {
    type: 'Location' | 'Restaurant'
}

type AutocompleteValue = (Restaurant & Type) | (Location & Type)

export type {Location, AutocompleteValue, Type};