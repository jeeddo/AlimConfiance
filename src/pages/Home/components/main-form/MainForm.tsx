import { faCircleQuestion as circleQuestionIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import AutocompleteInput from "../autocomplete-input/AutocompleteInput"
import clsx from "clsx"
import type { HygieneLevel } from "../../types/filter"
import useOnFormSubmit from "./useOnFormSubmit.hook"
import { FormButtonsProps, FormErrorProps, FormLabelProps, HelpToSearchProps, MainFormProps, SelectFormProps } from "./mainForm.types"
import { HYGIENE_LEVELS, HELP_TO_SEARCH } from "../../utils-lib/constants"
import Select from "../../../../components/ui/form/Select"
import Label from "../../../../components/ui/form/Label"
import Form from "../../../../components/ui/form/Form"
import ErrorMsg from "../../../../components/ui/ErrorMsg"
import Button from "../../../../components/ui/button/Button"

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
        
        if (hasCurrentPage) setCurrentPage(0)
     }
     const handleResetFilters = () => {

        if (isFilterActivated || (inputValue || hygieneLevel !== 'Tous les niveaux')) {
            setInputValue('')
            setHygieneLevel('Tous les niveaux')
            setSortFilter('')
            setIsFilterActivated(false)
        }
      
     }
    return (
        <Form onSubmit={handleFormSubmit} >
        <div className='flex flex-col w-full justify-center items-start gap-2 '>
               <FormLabel htmlFor={!isSearchBtnClicked ? 'location' : 'search-restaurant'} labelTxt={!isSearchBtnClicked ? 'Localisation' : 'Rechercher'} breakPointLg={breakPointLg} breakPointXs={breakPointXs} />
               <AutocompleteInput setIsAutocompleteVisible={setAutocompleteVisibility} inputValue={inputValue} handleInputValueChange={handleInputValueChange} isSearchBtnClicked={isSearchBtnClicked} setInputValue={setInputValue} setRestaurantDetails={setRestaurantDetails} setisFilterMobileActivated={setisFilterMobileActivated}  />
           </div>


           {isSearchBtnClicked && <HelpToSearch helpToSearch={HELP_TO_SEARCH} breakPointLg={breakPointLg} breakPointXs={breakPointXs} isAutocompleteVisible={autocompleteVisibility} />}



           <div className={ (isSearchBtnClicked ? 'hidden' : '') +  ' flex flex-col justify-center items-start gap-2 w-full'}>
            <FormLabel htmlFor='hygiene-level' labelTxt="Niveau d'hygiène" breakPointLg={breakPointLg} breakPointXs={breakPointXs} />
           <SelectForm handleSelectValueChange={handleSelectValueChange} hygieneLevel={hygieneLevel} />
           {error && <FormError error={error} />}
           </div>

           <FormButtons isSearchBtnClicked={isSearchBtnClicked} breakPointLg={breakPointLg} breakPointXs={breakPointXs} onClickReset={handleResetFilters} onClickSearch={handleClick} />
        

        </Form>
          
          
    )
}

function HelpToSearch({breakPointLg, breakPointXs, isAutocompleteVisible, helpToSearch}: HelpToSearchProps) {
    const {title, subtitle, demo} = helpToSearch
    
    return <div className={`flex justify-center items-start gap-2 lg:gap-3 bg-secondary rounded px-3 lg:px-4 py-3 ${breakPointXs ? 'h-[180px] w-11/12 mx-auto' : 'h-[200px] lg:h-[230px] w-full'} ${(isAutocompleteVisible && breakPointLg) ? 'translate-y-[97%]' : (isAutocompleteVisible && breakPointXs) && 'translate-y-[122%]'} transition-all duration-700`}>
    <div className={`bg-main h-full ${breakPointXs ? 'w-0 xs:w-[1.8rem]' : 'w-[20%]'} text-bg rounded`}>
    <FontAwesomeIcon className="w-full dark:text-primary" icon={circleQuestionIcon} />
    </div>
    <div className="flex flex-col justify-center items-start gap-4 px-1">
        <div className="flex flex-col justify-center items-start gap-2">
        <h3 className="lg:tracking-normal tracking-tighter text-lg font-semibold text-main">{title}</h3>
        <p className="leading-4">{subtitle}</p>
        </div>
        <ul className="list-disc flex flex-col justify-center items-start gap-[2px] w-full ml-3">
            {demo.slice(0, 3).map(({name, example}) => {return <li key={name}><span className="font-semibold italic mr-1">{name}</span>{example}</li>})}
        </ul>
    </div>
</div>
}

function FormButtons({isSearchBtnClicked, breakPointLg, breakPointXs, onClickReset, onClickSearch}: FormButtonsProps) {
  
    return    <div className={(isSearchBtnClicked ? 'hidden' : '') + ' flex flex-col w-full justify-center items-center gap-5 mt-5'}>
        <Button type="submit" variant='main' className="px-7 py-2" onClick={onClickSearch}>Rechercher</Button>
        <Button onClick={onClickReset} variant={"outline"} className={clsx(breakPointLg && 'lg:px-7', breakPointXs && 'xs:px-7')}>Réinitialiser les filtres</Button>
    </div>
}

function SelectForm({hygieneLevel, handleSelectValueChange}: SelectFormProps) {

    return <Select id="hygiene-level" value={hygieneLevel} onChange={handleSelectValueChange}>    {HYGIENE_LEVELS.map((hygieneLevel, i) => <option key={i}>{hygieneLevel}</option>)}
</Select>
}

function FormError({error}: FormErrorProps) {
    return <ErrorMsg>{error}</ErrorMsg>
}

function FormLabel({breakPointLg, breakPointXs, htmlFor, labelTxt}: FormLabelProps) {
    return <Label htmlFor={htmlFor} className={clsx(breakPointLg && 'lg:text-lg', breakPointXs && 'xs:text-lg')}>{labelTxt}</Label>
}
