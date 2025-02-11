import { faCircleQuestion as circleQuestionIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import AutocompleteInput from "../autocomplete-input/AutocompleteInput"
import clsx from "clsx"
import type { HygieneLevel } from "../../../types/filter.d"
import useOnFormSubmit from "./useOnFormSubmit.hook"
import { FormButtonsProps, FormErrorProps, FormLabelProps, HelpToSearchProps, MainFormProps, SelectFormProps } from "./mainForm.types"
import { HYGIENE_LEVELS } from "../../../utils/constants"

export default function MainForm({breakPoint, sortFilter, hasCurrentPage, setSortFilter, offset, isFilterActivated,setFilteredData, setCurrentPage, setNbOfRestaurant, setisFilterMobileActivated, setIsFilterActivated, setIsFilteredRestaurantLoading, isSearchBtnClicked, setRestaurantDetails} : MainFormProps) {

    const [inputValue, setInputValue] = useState('')
    const [hygieneLevel, setHygieneLevel] = useState<HygieneLevel>('Tous les niveaux')
    const [error, setError] = useState('')
    const [autocompleteVisibility, setAutocompleteVisibility] = useState(false)
    const breakPointLg = breakPoint === 'lg'
    const breakPointXs = breakPoint === 'xs'
  
    const handleFormSubmit = useOnFormSubmit(hygieneLevel, sortFilter, offset, isFilterActivated, inputValue, setisFilterMobileActivated, setFilteredData, setNbOfRestaurant, setIsFilteredRestaurantLoading, setIsFilterActivated, setError)

     useEffect(() => {
        if (inputValue) setInputValue('')
        
     }, [isSearchBtnClicked])
    const handleInputValueChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue(e.target.value)
        setError('')
    }  



     const handleSelectValueChange = (e: React.ChangeEvent) => {
        setHygieneLevel((e.target as HTMLSelectElement).value as HygieneLevel)
        setError('')
     }

     const handleClick = () => {
        
        if (hasCurrentPage && !isSearchBtnClicked) setCurrentPage(0)
     }
     const handleResetFilters = () => {
        if (isFilterActivated) {
            setInputValue('')
            setHygieneLevel('Tous les niveaux')
            setSortFilter('')
            setIsFilterActivated(false)
        }
      
     }
    return (
      
        
       <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-start gap-8 w-full'>
           <div className='flex flex-col w-full justify-center items-start gap-2 '>
               <FormLabel htmlFor={!isSearchBtnClicked ? 'location' : 'search-restaurant'} labelTxt={!isSearchBtnClicked ? 'Localisation' : 'Rechercher'} breakPointLg={breakPointLg} breakPointXs={breakPointXs} />
               <AutocompleteInput setIsAutocompleteVisible={setAutocompleteVisibility} inputValue={inputValue} handleInputValueChange={handleInputValueChange} isSearchBtnClicked={isSearchBtnClicked} setInputValue={setInputValue} setRestaurantDetails={setRestaurantDetails} setisFilterMobileActivated={setisFilterMobileActivated}  />
           </div>


           {isSearchBtnClicked && <HelpToSearch breakPointLg={breakPointLg} breakPointXs={breakPointXs} isAutocompleteVisible={autocompleteVisibility} />}



           <div className={ (isSearchBtnClicked ? 'hidden' : '') +  ' flex flex-col justify-center items-start gap-2 w-full'}>
            <FormLabel htmlFor='hygiene-level' labelTxt="Niveau d'hygiène" breakPointLg={breakPointLg} breakPointXs={breakPointXs} />
           <SelectForm handleSelectValueChange={handleSelectValueChange} hygieneLevel={hygieneLevel} />
           {error && <FormError error={error} />}
           </div>

           <FormButtons isSearchBtnClicked={isSearchBtnClicked} breakPointLg={breakPointLg} breakPointXs={breakPointXs} onClickReset={handleResetFilters} onClickSearch={handleClick} />
        
          
       </form>
    )
}

function HelpToSearch({breakPointLg, breakPointXs, isAutocompleteVisible}: HelpToSearchProps) {
    return <div className={`flex justify-center items-start gap-2 lg:gap-3 bg-secondary rounded px-3 lg:px-4 py-3 ${breakPointXs ? 'h-[180px] w-11/12 mx-auto' : 'h-[200px] lg:h-[230px] w-full'} ${(isAutocompleteVisible && breakPointLg) ? 'translate-y-[97%]' : (isAutocompleteVisible && breakPointXs) && 'translate-y-[122%]'} transition-all duration-700`}>
    <div className={`bg-main h-full ${breakPointXs ? 'w-0 xs:w-[1.8rem]' : 'w-[20%]'} text-bg rounded`}>
    <FontAwesomeIcon className="w-full dark:text-primary" icon={circleQuestionIcon} />
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
</div>
}

function FormButtons({isSearchBtnClicked, breakPointLg, breakPointXs, onClickReset, onClickSearch}: FormButtonsProps) {
  

    return    <div className={(isSearchBtnClicked ? 'hidden' : '') + ' flex flex-col w-full justify-center items-center gap-5 mt-5'}>
    <button onClick={onClickSearch} className='text-white bg-main px-7 py-2 rounded-lg shadow-md shadow-main hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-primary hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Rechercher</button>
    <button onClick={onClickReset} type="button" className={clsx(`text-main bg-transparent  px-5 py-2 rounded-lg shadow-lg border border-main hover:bg-main hover:text-white hover:shadow-xl transition duration-700`, breakPointLg && 'lg:px-7', breakPointXs && 'xs:px-7')} >Réinitialiser les filtres</button>
    </div>
}

function SelectForm({hygieneLevel, handleSelectValueChange}: SelectFormProps) {

    return    <select value={hygieneLevel} onChange={handleSelectValueChange}  className=" w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded" id="hygiene-level">
    {HYGIENE_LEVELS.map((hygieneLevel, i) => <option key={i}>{hygieneLevel}</option>)}
</select>
}

function FormError({error}: FormErrorProps) {
    return <p className="w-full text-center text-xs text-poor tracking-wide">{error}</p>
}

function FormLabel({breakPointLg, breakPointXs, htmlFor, labelTxt}: FormLabelProps) {
    return <label htmlFor={htmlFor} className={clsx(`text-base font-semibold italic`, breakPointLg && 'lg:text-lg', breakPointXs && 'xs:text-lg')}>{labelTxt}</label>
}
