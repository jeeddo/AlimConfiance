import { faLocationDot as locationIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef, useState } from "react"
import { Restaurant } from "../../types/restaurant.d"
import formatDate from "../../utils/formatDate"
import formatRate from "../../utils/formatRate"
import formatFilterQueryString from "../../utils/formatFilterQueryString"

interface MainFormProps {
    breakPoint : string,
    limit: number,
    offset : number,
    setFilteredData: (results: Restaurant[]) => void,
    setNbOfRestaurant : (nbRestaurant: number) => void,
    setIsFilterActivated: (isActivated: boolean) => void,
    setIsFilteredRestaurantLoading: (isLoading: boolean) => void
}
export default function MainForm({breakPoint, limit, offset, setFilteredData, setNbOfRestaurant, setIsFilterActivated, setIsFilteredRestaurantLoading} : MainFormProps) {

    const [location, setLocation] = useState([])
    const [inputValueLocation, setInputValueLocation] = useState('')
    const [autocompleteVisibility, setAutocompleteVisibility] = useState<'hidden' | ''>('hidden')
    const [isLiClicked, setLiClicked] = useState<boolean>(false)
    const [isLoading, setLoading] = useState(false)
    const [isFilterModeActivated, setIsFilterModeActivated] = useState(false)
    const divElement = useRef<null | HTMLDivElement>(null)
    const[hygieneLevel, setHygieneLevel] = useState('Tous les niveaux')
    const [error, setError] = useState('')
    const submitBtn = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        if (!inputValueLocation || isLiClicked) {
            setAutocompleteVisibility('hidden') 
            return;
        }
        fetchLocation(inputValueLocation)
     }, [inputValueLocation])

     useEffect(() => {
        if (isFilterModeActivated) submitBtn.current?.click();
     }, [offset])

    const handleInputValueChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setInputValueLocation(e.target.value)
        setError('')
    }  


    const handleLiClicked = (e: React.MouseEvent<HTMLLIElement>) => {
             setInputValueLocation((e.currentTarget as HTMLLIElement).textContent ?? '')
            setLiClicked(true)
            setTimeout(() => {
                setLiClicked(false)
            }, 100);

    }



    const fetchLocation = async (inputValueLocation : string) : Promise<void> => {

        try {
            setAutocompleteVisibility('')
            setLoading(true)
             const api = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-france-commune/records?limit=15&where=com_name like "${inputValueLocation}" or dep_code like "${inputValueLocation}" or reg_name like "${inputValueLocation}" or dep_name like "${inputValueLocation}"`);
             if (!api.ok) throw new Error('Failed to fetch data..')

             const filtre = (await api.json()).results.map((locationRecord: Record<string, unknown>) => {
              
     
                 if (Array.isArray(locationRecord.com_name) && Array.isArray(locationRecord.dep_code)) {
                    return {
                        city: locationRecord.com_name[0],
                        depCode: locationRecord.dep_code[0]
                    }
                    
                 }
             })
     
             setLocation(filtre); 
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
        if (inputValueLocation) setAutocompleteVisibility('')
     }

   

     const handleSelectValueChange = (e: React.ChangeEvent) => {
        setHygieneLevel((e.target as HTMLSelectElement).value)
        setError('')
     }

     const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValueLocation && hygieneLevel === 'Tous les niveaux') {
            setError('Le formulaire est vide..')
            return 
        }
        setIsFilteredRestaurantLoading(true)
        setIsFilterModeActivated(true)
        setIsFilterActivated(true)
        const restaurantLocation = inputValueLocation.includes(',') ? inputValueLocation.split(', ') : inputValueLocation;
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
        setInputValueLocation('')
        setHygieneLevel('Tous les niveaux')
        setIsFilterActivated(false)
     }

    return (
      
        
       <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-start gap-8 w-full'>
           <div className='flex flex-col w-full justify-center items-start gap-2 '>
               <label htmlFor="localisation" className={`text-base ${breakPoint}:text-lg font-semibold italic`}>Localisation</label>
               <div ref={divElement} className='w-full relative'>
               <input value={inputValueLocation} onFocus={handleOnFocusAutocompleteVisibility} onChange={handleInputValueChange} className='w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded' type="text" autoComplete='off' placeholder='Enter a localisation' id='localisation' />
               <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 right-3' icon={locationIcon} />
               <ul  className={autocompleteVisibility + ' absolute top-[125%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-start gap-2 bg-primary rounded-xl py-3 px-4 w-11/12 max-h-[200px] overflow-y-auto'}>
               {location.length > 0 && location.map((location: Record<string, string>, i) => (<li key={i} onClick={handleLiClicked} className="hover:scale-105 hover:opacity-50 transition duration-700 w-full cursor-pointer">{location.city + ', ' + location.depCode}</li>))}
               {location.length === 0 && !isLoading && <p>Not found...</p>}
               {isLoading && <p>Loading...</p>}
               
           </ul>
               </div>


           </div>
           <div className='flex flex-col justify-center items-start gap-2 w-full'>
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
           <div className='flex flex-col w-full justify-center items-center gap-5 mt-5'>
           <button ref={submitBtn} className='text-white bg-main px-7 py-2 rounded-lg shadow-md shadow-main hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-primary hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Rechercher</button>
           <button onClick={handleResetFilters} type="button" className={`text-main bg-transparent  px-5 ${breakPoint}:px-7 py-2 rounded-lg shadow-lg border border-main hover:bg-main hover:text-white hover:shadow-xl transition duration-700`} >Réinitialiser les filtres</button>
           </div>
          
       </form>
    )
}