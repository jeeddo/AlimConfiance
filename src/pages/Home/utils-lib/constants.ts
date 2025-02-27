import type { HygieneLevel } from "../types/filter";
import type { HelpToSearch } from "../types/helpSeach";
import type { BgRatesColors } from "../types/ratings";
import Ratings from "../types/ratings";

export const LOCATION_PATH = import.meta.env.VITE_BACKEND_LOCATION_PATH || '/api/location';

export const RESTAURANT_PATH = import.meta.env.VITE_BACKEND_RESTAURANT_PATH || '/api/restaurant';

export const NB_MAX_DATA = 10000;  

export const LIMIT = 6;  

export const PAGE_COUNT = Math.floor(NB_MAX_DATA / LIMIT)

export const HYGIENE_LEVELS: HygieneLevel[] = ['Tous les niveaux', Ratings.EXCELLENT, Ratings.GOOD, Ratings.AVERAGE, 'A corriger de manière urgente']

export const BG_RATES_COLORS: BgRatesColors = {
    'poor': 'bg-poor',
    'average': 'bg-average',
    'good': 'bg-good',
    'excellent': 'bg-excellent'
}

export const HELP_TO_SEARCH: HelpToSearch = {
    title: 'Aide à la recherche',
    subtitle: 'Vous pouvez rechercher un établissement selon plusieurs critères : ',
    demo: [
        {name: 'son nom', example: '(PASTA Y DOLCE)'},
        {name: 'sa commune', example: '(Nantes)'},
        {name: 'son code SIRET', example: '(306094)'}
    ]
}