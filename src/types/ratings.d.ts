enum Ratings {
    Excellent = 'Très satisfaisant',
    Good = 'Satisfaisant',
    Average = 'A améliorer',
    Poor = 'Mauvais'
}

type RatingColor = 'green-400' | 'yellow-500' | 'orange-400' | 'red-700'

export interface Rating {
    rate: Ratings,
    color: RatingColor
}

export default Ratings