import { faCircleQuestion as circleQuestionIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import type { Restaurant } from "../../types/restaurant.d"
import formatDate from "../../utils/formatDate"
import formatRate from "../../utils/formatRate"
import formatFilterQueryString from "../../utils/formatFilterQueryString"
import AutocompleteInput from "./AutocompleteInput"

export interface MainFormProps {
    breakPoint : string,
    limit: number,
    offset : number,
    setFilteredData: (results: Restaurant[]) => void,
    setNbOfRestaurant : (nbRestaurant: number) => void,
    setIsFilterActivated: (isActivated: boolean) => void,
    setIsFilteredRestaurantLoading: (isLoading: boolean) => void,
    setRestaurantDetails: (restaurant : React.SetStateAction<Restaurant | null>) => void,
    setisFilterMobileActivated: (isClicked: React.SetStateAction<boolean>) => void,
    setCurrentPage: (page: React.SetStateAction<number>) => void,
    isSearchBtnClicked: boolean,
    isFilterActivated: boolean
}
export default function MainForm({breakPoint, limit, offset, isFilterActivated,setFilteredData, setCurrentPage, setNbOfRestaurant, setisFilterMobileActivated, setIsFilterActivated, setIsFilteredRestaurantLoading, isSearchBtnClicked, setRestaurantDetails} : MainFormProps) {

    const [inputValue, setinputValue] = useState('')
    const [hygieneLevel, setHygieneLevel] = useState('Tous les niveaux')
    const [error, setError] = useState('')
    const [autocompleteVisibility, setAutocompleteVisibility] = useState(false)

  

     useEffect(() => {
        if (isFilterActivated) handleFormSubmit();
     }, [offset])

    const handleInputValueChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setinputValue(e.target.value)
        setError('')
    }  





   

     const handleSelectValueChange = (e: React.ChangeEvent) => {
        setHygieneLevel((e.target as HTMLSelectElement).value)
        setError('')
     }

     const handleFormSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()    
        
        if (!inputValue && hygieneLevel === 'Tous les niveaux') {
            setError('Le formulaire est vide..')
            return 
        }
        setisFilterMobileActivated(false)
        setIsFilteredRestaurantLoading(true)
        setIsFilterActivated(true)
        const restaurantLocation = inputValue.includes(',') ? inputValue.split(', ') : inputValue;
        try {
            const api = await fetch('https://dgal.opendatasoft.com/api/explore/v2.1/catalog/datasets/export_alimconfiance/records?limit=' + limit + '&offset=' + offset + '&where=app_libelle_activite_etablissement="Restaurants" ' + formatFilterQueryString(restaurantLocation, hygieneLevel))
            const response = await api.json()
            if (!api.ok) throw new Error('Failed to search..')
            setFilteredData(response.results.map((restaurant: Record<string, unknown>) => ({
                    name: restaurant.app_libelle_etablissement,
                    address: restaurant.adresse_2_ua,
                    postalCode: restaurant.code_postal,
                    city: restaurant.libelle_commune,
                    inspectionDate: formatDate(restaurant.date_inspection as string),
                    activity: Array.isArray(restaurant.app_libelle_activite_etablissement) ? restaurant.app_libelle_activite_etablissement[0] : '',
                    rating: formatRate(restaurant.synthese_eval_sanit as string)
                  })));
            setNbOfRestaurant(response.total_count)
        } catch (error) {
            if (error instanceof Error) console.log(error.message)
        }
    finally {
        setIsFilteredRestaurantLoading(false)
    }
     }

     
     const handleResetFilters = () => {
        setinputValue('')
        setHygieneLevel('Tous les niveaux')
        setIsFilterActivated(false)
     }

    return (
      
        
       <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-start gap-8 w-full'>
           <div className='flex flex-col w-full justify-center items-start gap-2 '>
               <label htmlFor="localisation" className={`text-base ${breakPoint}:text-lg font-semibold italic`}>{isSearchBtnClicked ? 'Rechercher' : 'Localisation'}</label>
               <AutocompleteInput setIsAutocompleteVisible={setAutocompleteVisibility} inputValue={inputValue} handleInputValueChange={handleInputValueChange} isSearchBtnClicked={isSearchBtnClicked} setInputValue={setinputValue} setRestaurantDetails={setRestaurantDetails} setisFilterMobileActivated={setisFilterMobileActivated}  />


           </div>


           {isSearchBtnClicked && <div className={`flex justify-center items-start gap-2 lg:gap-3 bg-secondary rounded px-3 lg:px-4 py-3 ${breakPoint === 'xs' ? 'h-[180px] w-11/12 mx-auto' : 'h-[200px] lg:h-[230px] w-full'} ${(autocompleteVisibility && breakPoint === 'lg') ? 'translate-y-[93%] lg:translate-y-[85%]' : (autocompleteVisibility && breakPoint === 'xs') ? 'translate-y-[105%]' : ''} transition-all duration-700`}>
                <div className={`bg-main h-full ${breakPoint === 'xs' ? 'w-[1.5rem]' : 'w-[25%]'} text-bg rounded`}>
                <FontAwesomeIcon className="w-full" icon={circleQuestionIcon} />
                </div>
                <div className="flex flex-col justify-center items-start gap-4 px-1">
                    <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="lg:tracking-normal tracking-tighter text-lg font-semibold text-main">Aide à la recherche</h3>
                    <p className="leading-4">Vous pouvez rechercher un établissement selon plusieurs critères :</p>
                    </div>
                    <ul className="list-disc flex flex-col justify-center items-start gap-[2px] w-full ml-3">
                        <li> <span className="italic font-semibold">son nom</span> (PASTA Y DOLCE)</li>
                        <li><span className="italic font-semibold">sa commune</span> (Nantes)</li>
                        <li><span className="italic font-semibold">son code SIRET</span> (306094)</li>
                    </ul>
                </div>
           </div>}



           <div className={ (isSearchBtnClicked ? 'hidden' : '') +  ' flex flex-col justify-center items-start gap-2 w-full'}>
           <label className={`text-base ${breakPoint}:text-lg font-semibold italic`} htmlFor="niveau-hygiène">Niveau d'hygiène</label>
           <select value={hygieneLevel} onChange={handleSelectValueChange}  className=" w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded" id="niveau-hygiène">
               <option>Tous les niveaux</option>
               <option >A corriger de manière urgente</option>
               <option >A améliorer</option>
               <option >Satisfaisant</option>
               <option >Très satisfaisant</option>
           </select>
           {error && <p className="w-full text-center text-xs text-poor tracking-wide">{error}</p>}
           </div>
           <div className={(isSearchBtnClicked ? 'hidden' : '') + ' flex flex-col w-full justify-center items-center gap-5 mt-5'}>
           <button onClick={() => setCurrentPage(0)} className='text-white bg-main px-7 py-2 rounded-lg shadow-md shadow-main hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-primary hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Rechercher</button>
           <button onClick={handleResetFilters} type="button" className={`text-main bg-transparent  px-5 ${breakPoint}:px-7 py-2 rounded-lg shadow-lg border border-main hover:bg-main hover:text-white hover:shadow-xl transition duration-700`} >Réinitialiser les filtres</button>
           </div>
          
       </form>
    )
}