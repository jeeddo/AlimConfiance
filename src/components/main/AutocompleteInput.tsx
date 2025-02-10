import { useRef, useState, useEffect } from "react"
import type { AutocompleteValue } from "../../types/autocomplete.d"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot as locationIcon, faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons"
import AutocompleteLi from "./AutocompleteLi"
import type { AutocompleteLiProps } from "./AutocompleteLi"
import useClickOutside from "../../hooks/useClickOutside"
import { getLocations } from "../../services/location"
import { getSpecificRestaurant } from "../../services/restaurant"
import { MOBILE_DEVICES_WIDTH } from "../../utils/constants"
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
    const inputRef = useRef<HTMLInputElement | null>(null)

    
    const clickOutsideAction = () => {
        if (window.innerWidth <= MOBILE_DEVICES_WIDTH && input) {
            setInput('')
        }
        setAutocompleteVisibility('hidden')
        setIsAutocompleteVisible?.(false)
        setShowInput(false)
    }
    useEffect(() => {
        setAutocompleteValues([])
    }, [isSearchBtnClicked])


    useClickOutside(divElement, clickOutsideAction, false, autocompleteVisibility === '')

         
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
          }, [inputValue, input, isLiClicked])
       
          
    const fetchAutocomplete = async (inputValue : string) : Promise<void> => {
        setAutocompleteVisibility('')
        setIsAutocompleteVisible?.(true)
        setLoading(true)
      
         
        if (!isSearchBtnClicked && isInForm) {
            const locations = await getLocations(inputValue)
            setAutocompleteValues(locations); 
        }
        else {
            const searchedRestaurant = await getSpecificRestaurant(inputValue)
            setAutocompleteValues(searchedRestaurant)
        }
        setLoading(false)
    }

    const handleClass = (): string => {
        let letClass = className
        if (!isInForm && showInput) letClass += ' w-[220px]'
        else if (!isInForm && !showInput ) letClass += ' w-12 placeholder:invisible'
        else return 'w-full rounded'
        return letClass ?? ''
    }
    const onClick = () => {
         if (window.innerWidth <= MOBILE_DEVICES_WIDTH && !showInput && inputRef.current) {
            const end = inputRef.current.value.length;
            setShowInput(true)
            inputRef.current?.focus()
            inputRef.current?.setSelectionRange(end, end)
 
        } 
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (handleInputValueChange) handleInputValueChange(e)
        else setInput(e.target.value)
    }

    
    return <div onClick={onClick} ref={divElement} className={`${isInForm ? 'w-full' : ''} relative`}>
    <input value={inputValue ?? input} ref={inputRef} onFocus={handleOnFocusAutocompleteVisibility} onChange={onChange} className={`${handleClass()} px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none`} type="text" autoComplete='off' placeholder={isSearchBtnClicked || !isInForm ? 'Search a restaurant' : 'Enter a localisation'} id='localisation' />
    <FontAwesomeIcon className={`absolute top-1/2 -translate-y-1/2 ${!showInput && !isInForm ? 'left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-3' : 'right-3 '}`} icon={isSearchBtnClicked || !isInForm ? searchIcon : locationIcon} />
    <ul  className={autocompleteVisibility + ` absolute top-[125%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-start gap-2 ${isInForm ? 'bg-primary' : 'bg-secondary'} rounded-xl py-3 px-4 ${!isSearchBtnClicked && isInForm ? 'w-11/12' : 'w-full'} max-h-[200px] overflow-y-auto overflow-x-hidden z-50`}>
    {autocompleteValues.length > 0 && autocompleteValues.map((value: AutocompleteValue, i) => (<AutocompleteLi key={i} setLiClicked={setLiClicked} {...props} value={value} />))}
    {autocompleteValues.length === 0 && !isLoading && <p>Not found...</p>}
    {isLoading && <p>Loading...</p>}
    
</ul>
    </div>
}