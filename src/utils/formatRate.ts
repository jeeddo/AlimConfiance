import  Ratings ,{type Rating } from "../types/ratings.d";

 export default function formatRate (rating: string): Rating {
    switch (rating) {
      case 'Très satisfaisant':
        return {rate: Ratings.Excellent, color: 'green-400'};
      case 'Satisfaisant':
        return {rate: Ratings.Good, color: 'yellow-500'};
      case 'A améliorer':
        return {rate: Ratings.Average, color: 'orange-400'};
      case 'A corriger de manière urgente':
        return {rate: Ratings.Poor,color: 'red-700'};
      default:
        throw new Error('Invalid rating');
    }
  };