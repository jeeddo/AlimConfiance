import type { Restaurant } from "./restaurant"

interface Location {
    city: string,
    depCode: string
    type: 'Location'
}

type AutocompleteValue = Restaurant | Location

export type {Location, AutocompleteValue};