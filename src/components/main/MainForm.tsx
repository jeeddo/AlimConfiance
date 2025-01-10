import { faLocationDot as locationIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"

export default function MainForm({breakPoint} : {breakPoint: string}) {

    const [location, setLocation] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [autocompleteVisibility, setAutocompleteVisibility] = useState<'hidden' | ''>(() => 'hidden')
    const [isLiClicked, setLiClicked] = useState<boolean>(false)
    const [isLoading, setLoading] = useState(false)
    const divElement = useRef<null | HTMLDivElement>(null)
    useEffect(() => {
        fetchLocation()
        !inputValue || isLiClicked ? setAutocompleteVisibility('hidden') : setAutocompleteVisibility('')
     }, [inputValue])


    const handleInputValueChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue(e.target.value)
        
    }  
    const handleLiClicked = (e: React.MouseEvent<HTMLLIElement>) => {
             setInputValue((e.currentTarget as HTMLLIElement).textContent ?? '')
            setLiClicked(true)
            setTimeout(() => {
                setLiClicked(false)
            }, 100);

    }



    const fetchLocation = async (): Promise<void> => {
        if (!inputValue) return;
        
        try {
            setLoading(true)
             const api = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-france-commune/records?limit=15&where=com_name like "${inputValue}" or dep_code like "${inputValue}" or reg_name like "${inputValue}" or dep_name like "${inputValue}"`);
             
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
        window.addEventListener('click' , handleClickOutside)
    return () => removeEventListener('click', handleClickOutside)
     }, [])

     const handleOnFocusAutocompleteVisibility = () => {
        if (inputValue) setAutocompleteVisibility('')
     }

     const handleClickOutside = (e: MouseEvent) => {
        
           
            if (!divElement.current?.contains((e.target as Node))) setAutocompleteVisibility('hidden')
     }


     

    return (
      
        
       <form className='flex flex-col justify-center items-start gap-8 w-full'>
           <div className='flex flex-col w-full justify-center items-start gap-2 '>
               <label htmlFor="localisation" className={`text-base ${breakPoint}:text-lg font-semibold italic`}>Localisation</label>
               <div ref={divElement} className='w-full relative'>
               <input value={inputValue} onFocus={handleOnFocusAutocompleteVisibility} onChange={handleInputValueChange} className='w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded' type="text" autoComplete='off' placeholder='Enter a localisation' id='localisation' />
               <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 right-3' icon={locationIcon} />
               <ul  className={autocompleteVisibility + ' absolute top-[125%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-start gap-2 bg-slate-200 rounded-xl py-3 px-4 w-11/12 max-h-[200px] overflow-y-auto'}>
               {location.length > 0 && location.map((location: Record<string, string>, i) => (<li key={i} onClick={handleLiClicked} className="hover:scale-105 hover:opacity-50 transition duration-700 w-full cursor-pointer">{location.city + ', ' + location.depCode}</li>))}
               {location.length === 0 && !isLoading && <p>Not found...</p>}
               {isLoading && <p>Loading...</p>}
               
           </ul>
               </div>


           </div>
           <div className='flex flex-col justify-center items-start gap-2 w-full'>
           <label className={`text-base ${breakPoint}:text-lg font-semibold italic`} htmlFor="niveau-hygiène">Niveau d'hygiène</label>
           <select className=" w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded" id="niveau-hygiène">
               <option>Tous les niveaux</option>
               <option >A corriger de manière urgente</option>
               <option >A améliorer</option>
               <option >Satisfaisant</option>
               <option >Très Satisfaisant</option>
           </select>
           </div>
           <div className='flex flex-col w-full justify-center items-center gap-5 mt-5'>
           <button className='text-white bg-blue-900 px-7 py-2 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-slate-200 hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Rechercher</button>
           <button className={`text-blue-900 bg-transparent  px-5 ${breakPoint}:px-7 py-2 rounded-lg shadow-lg border border-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-xl transition duration-700`} >Réinitialiser les filtres</button>
           </div>
          
       </form>
    )
}