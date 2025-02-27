import type { HygieneLevel, SortFilter } from "../../types/filter"
import type { Restaurant } from "../../types/restaurant"
import type { HelpToSearch } from "../../types/helpSeach"

export interface HomeFormProps {
    breakPoint : string,
    offset : number,
    sortFilter: SortFilter,
    setSortFilter: (filter: React.SetStateAction<SortFilter>) => void,
    setFilteredData: (results: React.SetStateAction<Restaurant[]>) => void,
    setNbOfRestaurant : (nbRestaurant: React.SetStateAction<number>) => void,
    setIsFilterActivated: (isActivated: React.SetStateAction<boolean>) => void,
    setIsFilteredRestaurantLoading: (isLoading: React.SetStateAction<boolean>) => void,
    setRestaurantDetails: (restaurant : React.SetStateAction<Restaurant | null>) => void,
    setisFilterMobileActivated: (isClicked: React.SetStateAction<boolean>) => void,
    setCurrentPage: (page: React.SetStateAction<number>) => void,
    isSearchBtnClicked: boolean,
    isFilterActivated: boolean,
    hasCurrentPage: boolean

}

interface BreakPoints {
    breakPointLg: boolean,
    breakPointXs: boolean
}

export interface HelpToSearchProps extends BreakPoints {
    isAutocompleteVisible: boolean,
    helpToSearch: HelpToSearch
}

export interface FormButtonsProps extends BreakPoints {
    isSearchBtnClicked: boolean,
    onClickReset: () => void,
    onClickSearch: () => void
}

export interface SelectFormProps {
    hygieneLevel: HygieneLevel,
    handleSelectValueChange: (e: React.ChangeEvent) => void
}

export interface FormErrorProps {
    error: string
}
export interface FormLabelProps extends BreakPoints {
    labelTxt: string,
    htmlFor: string,
}