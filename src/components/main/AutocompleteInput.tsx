import { useRef, useState, useEffect } from "react"
import type { AutocompleteValue } from "../../types/autocomplete.d"
import formatDate from "../../utils/formatDate"
import formatRate from "../../utils/formatRate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot as locationIcon, faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons"
import AutocompleteLi from "./AutocompleteLi"
import type { AutocompleteLiProps } from "./AutocompleteLi"
export interface AutocompleteInputProps extends Omit<AutocompleteLiProps, 'value' | 'setLiClicked'> {
    inputValue: string,
    isInForm: boolean,
    className: string,
    isSearchBtnClicked: boolean, 
    handleInputValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsAutocompleteVisible: (isVisible: boolean) => void
}

type AutocompleteInputPropsType = Partial<AutocompleteInputProps> & Required<Pick<AutocompleteLiProps, 'setRestaurantDetails'>>

export default function AutocompleteInput({inputValue, isSearchBtnClicked, isInForm = true, className, handleInputValueChange, setIsAutocompleteVisible, ...props}: AutocompleteInputPropsType ) {
    const divElement = useRef<null | HTMLDivElement>(null)
    const [autocompleteVisibility, setAutocompleteVisibility] = useState<'hidden' | ''>('hidden')
    const [isLiClicked, setLiClicked] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const [autocompleteValues, setAutocompleteValues] = useState<AutocompleteValue[]>([])
    const [showInput, setShowInput] = useState(false)

    useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
            
               
                if (!divElement.current?.contains((e.target as Node))){
                    setAutocompleteVisibility('hidden')
                    setIsAutocompleteVisible?.(false)
                    setShowInput(false)
                } 
         }
            window.addEventListener('click' , handleClickOutside)
        return () => removeEventListener('click', handleClickOutside)
         }, [])
    
         
     const handleOnFocusAutocompleteVisibility = () => {
        if (inputValue || input)  {
            setAutocompleteVisibility('')
            setIsAutocompleteVisible?.(true)
        }
     }

       useEffect(() => {
             if ((!inputValue && isInForm)  || (!input && !isInForm ) || isLiClicked) {
                 setAutocompleteVisibility('hidden') 
                 setIsAutocompleteVisible?.(false)
                 return;
             }
              fetchAutocomplete(inputValue ?? input)
          }, [inputValue, input])
       
          
    const fetchAutocomplete = async (inputValue : string) : Promise<void> => {
        try {
           setAutocompleteVisibility('')
           setIsAutocompleteVisible?.(true)
           setLoading(true)
           if (!isSearchBtnClicked && isInForm) {
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

    const handleClass = (): string => {
        let letClass = className
        if (!isInForm && showInput) letClass += ' w-[220px]'
        else if (!isInForm && !showInput ) letClass += ' w-10 placeholder:invisible'
        else return 'w-full rounded'
        return letClass ?? ''
    }

    return <div onClick={() => { if (window.innerWidth <= 640) setShowInput(true)}} ref={divElement} className={`${isInForm ? 'w-full' : ''} relative`}>
    <input value={inputValue} onFocus={handleOnFocusAutocompleteVisibility} onChange={(e) => handleInputValueChange?.(e) ?? setInput(e.target.value)} className={`${handleClass()} px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none`} type="text" autoComplete='off' placeholder={isSearchBtnClicked || !isInForm ? 'Search a restaurant' : 'Enter a localisation'} id='localisation' />
    <FontAwesomeIcon className={`absolute top-1/2 -translate-y-1/2 ${!showInput && !isInForm ? 'left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-3' : 'right-3 '}`} icon={isSearchBtnClicked || !isInForm ? searchIcon : locationIcon} />
    <ul  className={autocompleteVisibility + ` absolute top-[125%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-start gap-2 ${isInForm ? 'bg-primary' : 'bg-secondary'} rounded-xl py-3 px-4 ${!isSearchBtnClicked && isInForm ? 'w-11/12' : 'w-full'} max-h-[200px] overflow-y-auto overflow-x-hidden z-50`}>
    {autocompleteValues.length > 0 && autocompleteValues.map((value: AutocompleteValue, i) => (<AutocompleteLi key={i} setLiClicked={setLiClicked} {...props} value={value} />))}
    {autocompleteValues.length === 0 && !isLoading && <p>Not found...</p>}
    {isLoading && <p>Loading...</p>}
    
</ul>
    </div>
}