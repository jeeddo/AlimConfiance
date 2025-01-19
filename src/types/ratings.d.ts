enum Ratings {
    Excellent = 'Très satisfaisant',
    Good = 'Satisfaisant',
    Average = 'A améliorer',
    Poor = 'Mauvais'
}

type RatingColor = 'excellent' | 'good' | 'average' | 'poor'

export interface Rating {
    rate: Ratings,
    color: RatingColor
}

export default Ratings