import { AutocompleteValue } from '../types/autocomplete'
import AutocompleteLi, { AutocompleteLiProps } from './AutocompleteLi'

interface autocompleteListProps extends Omit<AutocompleteLiProps, 'value'> {
  autocompleteVisibility: '' | 'hidden'
  autocompleteValues: AutocompleteValue[]
  isLoading: boolean
  setLiClicked: (isLiClicked: React.SetStateAction<boolean>) => void
  isInForm: boolean
  isSearchBtnClicked?: boolean
}

export default function AutocompleteList({
  autocompleteVisibility,
  autocompleteValues,
  isLoading,
  isInForm,
  isSearchBtnClicked,
  ...props
}: autocompleteListProps) {
  return (
    <ul
      className={
        autocompleteVisibility +
        ` absolute left-1/2 top-[125%] flex -translate-x-1/2 flex-col items-start justify-center gap-2 ${isInForm ? 'bg-primary' : 'bg-secondary'} rounded-xl px-4 py-3 ${!isSearchBtnClicked && isInForm ? 'w-11/12' : 'w-full'} z-50 max-h-[245px] overflow-y-auto`
      }>
      {autocompleteValues.length > 0 &&
        autocompleteValues.map((value: AutocompleteValue, i) => (
          <AutocompleteLi key={i} {...props} value={value} />
        ))}
      {autocompleteValues.length === 0 && !isLoading && <p>Not found...</p>}
      {isLoading && <p>Loading...</p>}
    </ul>
  )
}
