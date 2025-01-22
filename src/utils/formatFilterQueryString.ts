export default function formatFilterQueryString(restaurantLocation : string | string[], hygieneLevel: string ): string {
    if (Array.isArray(restaurantLocation)) {
        if (restaurantLocation && hygieneLevel === 'Tous les niveaux') return `and (libelle_commune like "${restaurantLocation[0]}" or dep_code like "${restaurantLocation[1]}")`
        else if (!restaurantLocation &&  hygieneLevel !== 'Tous les niveaux') return `and synthese_eval_sanit="${hygieneLevel}"`
        return `and (libelle_commune like "${restaurantLocation[0]}" or dep_code like "${restaurantLocation[1]}") and synthese_eval_sanit="${hygieneLevel}"`    
    }
   else {
    if (restaurantLocation && hygieneLevel === 'Tous les niveaux') return `and (libelle_commune like "${restaurantLocation}" or dep_code like "${restaurantLocation}")`
    else if (!restaurantLocation &&  hygieneLevel !== 'Tous les niveaux') return `and synthese_eval_sanit="${hygieneLevel}"`
    return `and (libelle_commune like "${restaurantLocation}" or dep_code like "${restaurantLocation}") and synthese_eval_sanit="${hygieneLevel}"`    
   }
}