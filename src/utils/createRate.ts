import  Ratings , {type RatingsKeys, type Rating } from "../types/ratings.d";

 export default function createRate (rating: RatingsKeys): Rating {
    switch (rating) {
      case 'EXCELLENT':
        return {rate: Ratings.EXCELLENT, color: 'excellent'};
      case 'GOOD':
        return {rate: Ratings.GOOD, color: 'good'};
      case 'AVERAGE':
        return {rate: Ratings.AVERAGE, color: 'average'};
      case 'POOR':
        return {rate: Ratings.POOR,color: 'poor'};
      default:
        throw new Error('Invalid rating');
    }
  }