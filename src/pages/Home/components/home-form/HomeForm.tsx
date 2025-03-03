import ErrorMsg from '../../../../components/ui/ErrorMsg'
import Button from '../../../../components/ui/button/Button'
import Form from '../../../../components/ui/form/Form'
import Label from '../../../../components/ui/form/Label'
import Select from '../../../../components/ui/form/Select'
import type { HygieneLevel } from '../../types/filter'
import { HYGIENE_LEVELS, HELP_TO_SEARCH } from '../../utils-lib/constants'
import AutocompleteInput from '../autocomplete-input/AutocompleteInput'
import {
  FormButtonsProps,
  FormErrorProps,
  FormLabelProps,
  HelpToSearchProps,
  HomeFormProps,
  SelectFormProps
} from './homeForm.types'
import useOnFormSubmit from './useOnFormSubmit.hook'
import { faCircleQuestion as circleQuestionIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

export default function HomeForm({
  breakPoint,
  sortFilter,
  hasCurrentPage,
  setSortFilter,
  offset,
  isFilterActivated,
  setFilteredData,
  setCurrentPage,
  setNbOfRestaurant,
  setisFilterMobileActivated,
  setIsFilterActivated,
  setIsFilteredRestaurantLoading,
  isSearchBtnClicked,
  setRestaurantDetails
}: HomeFormProps) {
  const [inputValue, setInputValue] = useState('')
  const [hygieneLevel, setHygieneLevel] =
    useState<HygieneLevel>('Tous les niveaux')
  const [error, setError] = useState('')
  const [autocompleteVisibility, setAutocompleteVisibility] = useState(false)
  const breakPointLg = breakPoint === 'lg'
  const breakPointXs = breakPoint === 'xs'

  const handleFormSubmit = useOnFormSubmit(
    hygieneLevel,
    sortFilter,
    offset,
    isFilterActivated,
    inputValue,
    setisFilterMobileActivated,
    setFilteredData,
    setNbOfRestaurant,
    setIsFilteredRestaurantLoading,
    setIsFilterActivated,
    setError
  )

  useEffect(() => {
    setInputValue(prev => (prev ? '' : prev))
  }, [isSearchBtnClicked])
  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (
      isFilterActivated ||
      inputValue ||
      hygieneLevel !== 'Tous les niveaux'
    ) {
      setInputValue('')
      setHygieneLevel('Tous les niveaux')
      setSortFilter('')
      setIsFilterActivated(false)
    }
  }
  return (
    <Form onSubmit={handleFormSubmit}>
      <div className='flex w-full flex-col items-start justify-center gap-2'>
        <FormLabel
          htmlFor={!isSearchBtnClicked ? 'location' : 'search-restaurant'}
          labelTxt={!isSearchBtnClicked ? 'Localisation' : 'Rechercher'}
          breakPointLg={breakPointLg}
          breakPointXs={breakPointXs}
        />
        <AutocompleteInput
          setIsAutocompleteVisible={setAutocompleteVisibility}
          inputValue={inputValue}
          handleInputValueChange={handleInputValueChange}
          isSearchBtnClicked={isSearchBtnClicked}
          setInputValue={setInputValue}
          setRestaurantDetails={setRestaurantDetails}
          setisFilterMobileActivated={setisFilterMobileActivated}
        />
      </div>

      {isSearchBtnClicked && (
        <HelpToSearch
          helpToSearch={HELP_TO_SEARCH}
          breakPointLg={breakPointLg}
          breakPointXs={breakPointXs}
          isAutocompleteVisible={autocompleteVisibility}
        />
      )}

      <div
        className={
          (isSearchBtnClicked ? 'hidden' : '') +
          ' flex w-full flex-col items-start justify-center gap-2'
        }>
        <FormLabel
          htmlFor='hygiene-level'
          labelTxt="Niveau d'hygiène"
          breakPointLg={breakPointLg}
          breakPointXs={breakPointXs}
        />
        <SelectForm
          handleSelectValueChange={handleSelectValueChange}
          hygieneLevel={hygieneLevel}
        />
        {error && <FormError error={error} />}
      </div>

      <FormButtons
        isSearchBtnClicked={isSearchBtnClicked}
        breakPointLg={breakPointLg}
        breakPointXs={breakPointXs}
        onClickReset={handleResetFilters}
        onClickSearch={handleClick}
      />
    </Form>
  )
}

function HelpToSearch({
  breakPointLg,
  breakPointXs,
  isAutocompleteVisible,
  helpToSearch
}: HelpToSearchProps) {
  const { title, subtitle, demo } = helpToSearch

  return (
    <div
      className={`flex items-start justify-center gap-2 rounded bg-secondary px-3 py-3 lg:gap-3 lg:px-4 ${breakPointXs ? 'mx-auto h-[180px] w-11/12' : 'h-[200px] w-full lg:h-[230px]'} ${isAutocompleteVisible && breakPointLg ? 'translate-y-[97%]' : isAutocompleteVisible && breakPointXs && 'translate-y-[122%]'} transition-all duration-700`}>
      <div
        className={`h-full bg-main ${breakPointXs ? 'w-0 xs:w-[1.8rem]' : 'w-[20%]'} rounded text-bg`}>
        <FontAwesomeIcon
          className='w-full dark:text-primary'
          icon={circleQuestionIcon}
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-4 px-1'>
        <div className='flex flex-col items-start justify-center gap-2'>
          <h3 className='text-lg font-semibold tracking-tighter text-main lg:tracking-normal'>
            {title}
          </h3>
          <p className='leading-4'>{subtitle}</p>
        </div>
        <ul className='ml-3 flex w-full list-disc flex-col items-start justify-center gap-[2px]'>
          {demo.slice(0, 3).map(({ name, example }) => {
            return (
              <li key={name}>
                <span className='mr-1 font-semibold italic'>{name}</span>
                {example}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function FormButtons({
  isSearchBtnClicked,
  breakPointLg,
  breakPointXs,
  onClickReset,
  onClickSearch
}: FormButtonsProps) {
  return (
    <div
      className={
        (isSearchBtnClicked ? 'hidden' : '') +
        ' mt-5 flex w-full flex-col items-center justify-center gap-5'
      }>
      <Button
        type='submit'
        variant='main'
        className='px-7 py-2'
        onClick={onClickSearch}>
        Rechercher
      </Button>
      <Button
        onClick={onClickReset}
        variant={'outline'}
        className={clsx(breakPointLg && 'lg:px-7', breakPointXs && 'xs:px-7')}>
        Réinitialiser les filtres
      </Button>
    </div>
  )
}

function SelectForm({
  hygieneLevel,
  handleSelectValueChange
}: SelectFormProps) {
  return (
    <Select
      id='hygiene-level'
      value={hygieneLevel}
      onChange={handleSelectValueChange}>
      {' '}
      {HYGIENE_LEVELS.map((hygieneLevel, i) => (
        <option key={i}>{hygieneLevel}</option>
      ))}
    </Select>
  )
}

function FormError({ error }: FormErrorProps) {
  return <ErrorMsg>{error}</ErrorMsg>
}

function FormLabel({
  breakPointLg,
  breakPointXs,
  htmlFor,
  labelTxt
}: FormLabelProps) {
  return (
    <Label
      htmlFor={htmlFor}
      className={clsx(
        breakPointLg && 'lg:text-lg',
        breakPointXs && 'xs:text-lg'
      )}>
      {labelTxt}
    </Label>
  )
}
