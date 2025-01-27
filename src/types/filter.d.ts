import Ratings from "./ratings";

export type SortFilter = 'bestRated' | 'mostRecent' | '';

export type HygieneLevel = Ratings.Excellent | Ratings.Good | Ratings.Average | 'Tous les niveaux' | 'A corriger de manière urgente'
