import Ratings from './ratings'

export type SortFilter = 'bestRated' | 'mostRecent' | ''

export type HygieneLevel =
  | Ratings.EXCELLENT
  | Ratings.GOOD
  | Ratings.AVERAGE
  | 'Tous les niveaux'
  | 'A corriger de manière urgente'
