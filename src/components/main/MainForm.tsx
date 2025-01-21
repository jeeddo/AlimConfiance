import { faLocationDot as locationIcon, faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef, useState } from "react"
import type { Restaurant } from "../../types/restaurant.d"
import formatDate from "../../utils/formatDate"
import formatRate from "../../utils/formatRate"
import formatFilterQueryString from "../../utils/formatFilterQueryString"
import AutocompleteLi from "./AutocompleteLi"
import type { AutocompleteValue } from "../../types/autocomplete.d"

interface MainFormProps {
    breakPoint : string,
    limit: number,
    offset : number,
    setFilteredData: (results: Restaurant[]) => void,
    setNbOfRestaurant : (nbRestaurant: number) => void,
    setIsFilterActivated: (isActivated: boolean) => void,
    setIsFilteredRestaurantLoading: (isLoading: boolean) => void,
    setRestaurantDetails: (restaurant : React.SetStateAction<Restaurant | null>) => void
    isSearchBtnClicked: boolean
}
export default function MainForm({breakPoint, limit, offset, setFilteredData, setNbOfRestaurant, setIsFilterActivated, setIsFilteredRestaurantLoading, isSearchBtnClicked, setRestaurantDetails} : MainFormProps) {

    const [autocompleteValues, setAutocompleteValues] = useState([])
    const [inputValue, setinputValue] = useState('')
    const [autocompleteVisibility, setAutocompleteVisibility] = useState<'hidden' | ''>('hidden')
    const [isLiClicked, setLiClicked] = useState<boolean>(false)
    const [isLoading, setLoading] = useState(false)
    const [isFilterModeActivated, setIsFilterModeActivated] = useState(false)
    const divElement = useRef<null | HTMLDivElement>(null)
    const[hygieneLevel, setHygieneLevel] = useState('Tous les niveaux')
    const [error, setError] = useState('')
    const submitBtn = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        if (!inputValue || isLiClicked) {
            setAutocompleteVisibility('hidden') 
            return;
        }
         fetchAutocomplete(inputValue)
     }, [inputValue])

     useEffect(() => {
        if (isFilterModeActivated) submitBtn.current?.click();
     }, [offset])

    const handleInputValueChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setinputValue(e.target.value)
        setError('')
    }  


    const handleLiClicked = (liValue: string) => {
            setinputValue(liValue)
            setLiClicked(true)
            setTimeout(() => {
                setLiClicked(false)
            }, 100);
        
    }



    const fetchAutocomplete = async (inputValue : string) : Promise<void> => {
         try {
            setAutocompleteVisibility('')
            setLoading(true)
            if (!isSearchBtnClicked) {
                const api = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-france-commune/records?limit=15&where=com_name like "${inputValue}" or dep_code like "${inputValue}" or reg_name like "${inputValue}" or dep_name like "${inputValue}"`);
                if (!api.ok) throw new Error('Failed to fetch data..')
   
                const filtre = (await api.json()).results.map((locationRecord: Record<string, unknown>) => {
                 
        
                    if (Array.isArray(locationRecord.com_name) && Array.isArray(locationRecord.dep_code)) {
                       return {
                           city: locationRecord.com_name[0],
                           depCode: locationRecord.dep_code[0],
                           type: 'Location'
                       }
                       
                    }
                })
        
                setAutocompleteValues(filtre); 
            }
            else {
                const api = await fetch(`https://dgal.opendatasoft.com/api/explore/v2.1/catalog/datasets/export_alimconfiance/records?limit=15&where=com_name like "${inputValue}" or dep_code like "${inputValue}" or reg_name like "${inputValue}" or dep_name like "${inputValue}" or siret like "${inputValue}" or  app_libelle_etablissement like "${inputValue}"`)
                if (!api.ok) throw new Error('Failed to fetch data..')
                    const response = await api.json()
          
                   
                    const searchedRestaurant = response.results.map((restaurant: Record<string, unknown>) => 
                             ({
                                name: restaurant.app_libelle_etablissement,
                                address: restaurant.adresse_2_ua,
                                postalCode: restaurant.code_postal,
                                city: restaurant.libelle_commune,
                                inspectionDate: formatDate(restaurant.date_inspection as string),
                                activity: Array.isArray(restaurant.app_libelle_activite_etablissement) ? restaurant.app_libelle_activite_etablissement[0] : '',
                                rating: formatRate(restaurant.synthese_eval_sanit as string),
                                type: 'Restaurant'
                              }))
                    setAutocompleteValues(searchedRestaurant)

            }
          
         } catch (error) {
             if (error instanceof Error) console.log(error.message);
         }
         finally {
            setTimeout(() => {
                setLoading(false)
            }, 200);
         }
     };



     useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
        
           
            if (!divElement.current?.contains((e.target as Node))) setAutocompleteVisibility('hidden')
     }
        window.addEventListener('click' , handleClickOutside)
    return () => removeEventListener('click', handleClickOutside)
     }, [])




     const handleOnFocusAutocompleteVisibility = () => {
        if (inputValue) setAutocompleteVisibility('')
     }

   

     const handleSelectValueChange = (e: React.ChangeEvent) => {
        setHygieneLevel((e.target as HTMLSelectElement).value)
        setError('')
     }

     const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue && hygieneLevel === 'Tous les niveaux') {
            setError('Le formulaire est vide..')
            return 
        }
        setIsFilteredRestaurantLoading(true)
        setIsFilterModeActivated(true)
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
                console.log(response.results)
            setNbOfRestaurant(response.total_count)
        } catch (error) {
            if (error instanceof Error) console.log(error.message)
        }
    finally {
        setIsFilteredRestaurantLoading(false)
    }
     }

     
     const handleResetFilters = () => {
        setIsFilterModeActivated(false)
        setinputValue('')
        setHygieneLevel('Tous les niveaux')
        setIsFilterActivated(false)
     }

    return (
      
        
       <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-start gap-8 w-full'>
           <div className='flex flex-col w-full justify-center items-start gap-2 '>
               <label htmlFor="localisation" className={`text-base ${breakPoint}:text-lg font-semibold italic`}>{isSearchBtnClicked ? 'Rechercher' : 'Localisation'}</label>
               <div ref={divElement} className='w-full relative'>
               <input value={inputValue} onFocus={handleOnFocusAutocompleteVisibility} onChange={handleInputValueChange} className='w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded' type="text" autoComplete='off' placeholder={isSearchBtnClicked ? 'Search a restaurant' : 'Enter a localisation'} id='localisation' />
               <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 right-3' icon={isSearchBtnClicked ? searchIcon : locationIcon} />
               <ul  className={autocompleteVisibility + ` absolute top-[125%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-start gap-2 bg-primary rounded-xl py-3 px-4 ${!isSearchBtnClicked ? 'w-11/12' : 'w-full'} max-h-[200px] overflow-y-auto`}>
               {autocompleteValues.length > 0 && autocompleteValues.map((value: AutocompleteValue, i) => (<AutocompleteLi key={i} handleLiClicked={handleLiClicked} setRestaurantDetails={setRestaurantDetails} value={value} />))}
               {autocompleteValues.length === 0 && !isLoading && <p>Not found...</p>}
               {isLoading && <p>Loading...</p>}
               
           </ul>
               </div>


           </div>
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
           <button ref={submitBtn} className='text-white bg-main px-7 py-2 rounded-lg shadow-md shadow-main hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-primary hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Rechercher</button>
           <button onClick={handleResetFilters} type="button" className={`text-main bg-transparent  px-5 ${breakPoint}:px-7 py-2 rounded-lg shadow-lg border border-main hover:bg-main hover:text-white hover:shadow-xl transition duration-700`} >Réinitialiser les filtres</button>
           </div>
          
       </form>
    )
}