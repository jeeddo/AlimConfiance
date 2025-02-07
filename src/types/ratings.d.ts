enum Ratings {
    EXCELLENT = 'Très satisfaisant',
    GOOD = 'Satisfaisant',
    AVERAGE = 'A améliorer',
    POOR = 'Mauvais'
}

type RatingColor = Lowercase<RatingsKeys>

export type RatingsKeys = keyof typeof Ratings

export interface Rating {
    rate: Ratings,
    color: RatingColor
}


export default Ratings