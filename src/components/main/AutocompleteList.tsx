import { AutocompleteValue } from "../../types/autocomplete"
import AutocompleteLi, { AutocompleteLiProps } from "./AutocompleteLi"

interface autocompleteListProps extends Omit<AutocompleteLiProps, 'value'> {
    autocompleteVisibility: '' | 'hidden',
    autocompleteValues: AutocompleteValue[],
    isLoading: boolean,
    setLiClicked: (isLiClicked: React.SetStateAction<boolean>) => void,
    isInForm: boolean,
    isSearchBtnClicked?: boolean
}

export default function AutocompleteList({autocompleteVisibility, autocompleteValues, isLoading, isInForm, isSearchBtnClicked, ...props}: autocompleteListProps) {
   return  <ul  className={autocompleteVisibility + ` absolute top-[125%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-start gap-2 ${isInForm ? 'bg-primary' : 'bg-secondary'} rounded-xl py-3 px-4 ${!isSearchBtnClicked && isInForm ? 'w-11/12' : 'w-full'} max-h-[245px] overflow-y-auto z-50`}>
    {autocompleteValues.length > 0 && autocompleteValues.map((value: AutocompleteValue, i) => (<AutocompleteLi key={i} {...props} value={value} />))}
    {autocompleteValues.length === 0 && !isLoading && <p>Not found...</p>}
    {isLoading && <p>Loading...</p>}
    </ul>
}