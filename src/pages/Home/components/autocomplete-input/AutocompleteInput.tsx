import Input from '../../../../components/ui/form/Input'
import useClickOutside from '../../../../hooks/useClickOutside'
import { MOBILE_DEVICES_WIDTH } from '../../../../utils-lib/constants'
import type { AutocompleteLiProps } from '../AutocompleteLi'
import AutocompleteList from '../AutocompleteList'
import useFetchAutocomplete from './useFetchAutocomplete.hook'
import {
  faLocationDot as locationIcon,
  faSearch as searchIcon
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'

export interface AutocompleteInputProps
  extends Omit<AutocompleteLiProps, 'value' | 'setLiClicked'> {
  inputValue: string
  isInForm: boolean
  className: string
  isSearchBtnClicked: boolean
  handleInputValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setIsAutocompleteVisible: (isVisible: React.SetStateAction<boolean>) => void
}

type AutocompleteInputPropsType = Partial<AutocompleteInputProps> &
  Required<Pick<AutocompleteLiProps, 'setRestaurantDetails'>>

export default function AutocompleteInput({
  inputValue,
  isSearchBtnClicked,
  isInForm = true,
  className,
  handleInputValueChange,
  setIsAutocompleteVisible,
  ...props
}: AutocompleteInputPropsType) {
  const divElement = useRef<null | HTMLDivElement>(null)
  const [autocompleteVisibility, setAutocompleteVisibility] = useState<
    'hidden' | ''
  >('hidden')
  const [isLiClicked, setLiClicked] = useState(false)
  const [input, setInput] = useState('')
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { isLoading, autocompleteValues } = useFetchAutocomplete(
    input,
    isInForm,
    isLiClicked,
    setAutocompleteVisibility,
    setIsAutocompleteVisible,
    inputValue,
    isSearchBtnClicked
  )

  const clickOutsideAction = () => {
    if (window.innerWidth <= MOBILE_DEVICES_WIDTH && input) {
      setInput('')
    }
    setAutocompleteVisibility('hidden')
    setIsAutocompleteVisible?.(false)
    setShowInput(false)
  }

  useClickOutside(
    divElement,
    clickOutsideAction,
    false,
    autocompleteVisibility === ''
  )

  const handleOnFocusAutocompleteVisibility = () => {
    if (inputValue || input) {
      setAutocompleteVisibility('')
      setIsAutocompleteVisible?.(true)
    }
  }

  const handleClass = (): string => {
    let letClass = className
    if (!isInForm && showInput) letClass += ' xs:w-[220px]'
    else if (!isInForm && !showInput) letClass += ' w-12 placeholder:invisible'
    else return 'w-full rounded'
    return letClass ?? ''
  }
  const onClick = () => {
    if (
      window.innerWidth <= MOBILE_DEVICES_WIDTH &&
      !showInput &&
      inputRef.current
    ) {
      const end = inputRef.current.value.length
      setShowInput(true)
      inputRef.current?.focus()
      inputRef.current?.setSelectionRange(end, end)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (handleInputValueChange) handleInputValueChange(e)
    else setInput(e.target.value)
  }

  return (
    <div
      onClick={onClick}
      ref={divElement}
      className={`${isInForm ? 'w-full' : ''} relative`}>
      <Input
        value={inputValue ?? input}
        ref={inputRef}
        onFocus={handleOnFocusAutocompleteVisibility}
        onChange={onChange}
        className={handleClass()}
        type='text'
        autoComplete='off'
        placeholder={
          isSearchBtnClicked || !isInForm
            ? 'Search a restaurant'
            : 'Enter a localisation'
        }
        id={isSearchBtnClicked || !isInForm ? 'search-restaurant' : 'location'}
      />
      <FontAwesomeIcon
        className={`absolute top-1/2 -translate-y-1/2 ${!showInput && !isInForm ? 'left-1/2 -translate-x-1/2 sm:left-auto sm:right-3 sm:translate-x-0' : 'right-3'}`}
        icon={isSearchBtnClicked || !isInForm ? searchIcon : locationIcon}
      />
      <AutocompleteList
        isSearchBtnClicked={isSearchBtnClicked}
        autocompleteVisibility={autocompleteVisibility}
        {...props}
        setLiClicked={setLiClicked}
        isLoading={isLoading}
        isInForm={isInForm}
        autocompleteValues={autocompleteValues}
      />
    </div>
  )
}
