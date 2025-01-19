import  Ratings ,{type Rating } from "../types/ratings.d";

 export default function formatRate (rating: string): Rating {
    switch (rating) {
      case 'Très satisfaisant':
        return {rate: Ratings.Excellent, color: 'excellent'};
      case 'Satisfaisant':
        return {rate: Ratings.Good, color: 'good'};
      case 'A améliorer':
        return {rate: Ratings.Average, color: 'average'};
      case 'A corriger de manière urgente':
        return {rate: Ratings.Poor,color: 'poor'};
      default:
        throw new Error('Invalid rating');
    }
  };