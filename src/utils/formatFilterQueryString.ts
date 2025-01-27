import type { SortFilter, HygieneLevel } from "../types/filter.d"
export default function formatFilterQueryString(restaurantLocation : string | string[], hygieneLevel: HygieneLevel, sortFilter: SortFilter ): string {
    if (!(restaurantLocation || restaurantLocation.length) && hygieneLevel === 'Tous les niveaux' && sortFilter) return formatSortFilterQueryString(sortFilter)
    else if (Array.isArray(restaurantLocation)) {
        if (restaurantLocation && hygieneLevel === 'Tous les niveaux') return `and (libelle_commune like "${restaurantLocation[0]}" or dep_code like "${restaurantLocation[1]}")${formatSortFilterQueryString(sortFilter)}`
        else if (!restaurantLocation &&  hygieneLevel !== 'Tous les niveaux') return `and synthese_eval_sanit="${hygieneLevel}"${formatSortFilterQueryString(sortFilter)}`
        return `and (libelle_commune like "${restaurantLocation[0]}" or dep_code like "${restaurantLocation[1]}") and synthese_eval_sanit="${hygieneLevel}"${formatSortFilterQueryString(sortFilter)}`    
    }
   else {
    if (restaurantLocation && hygieneLevel === 'Tous les niveaux') return `and (libelle_commune like "${restaurantLocation}" or dep_code like "${restaurantLocation}")${formatSortFilterQueryString(sortFilter)}`
    else if (!restaurantLocation &&  hygieneLevel !== 'Tous les niveaux') return `and synthese_eval_sanit="${hygieneLevel}"${formatSortFilterQueryString(sortFilter)}`
    return `and (libelle_commune like "${restaurantLocation}" or dep_code like "${restaurantLocation}") and synthese_eval_sanit="${hygieneLevel}"${formatSortFilterQueryString(sortFilter)}`    
   }
}

function formatSortFilterQueryString(sortFilter: SortFilter) {
    if (sortFilter) {
        let queryKey = '&order_by=';
        switch(sortFilter) {
            case 'bestRated' : 
                queryKey += 'synthese_eval_sanit desc';
                break;
            default: queryKey += 'date_inspection desc';
        }
        return queryKey;
    }
    return ''
}