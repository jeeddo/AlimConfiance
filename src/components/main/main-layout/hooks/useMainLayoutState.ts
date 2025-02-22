import { useMemo, useState } from "react";
import { LIMIT, NB_MAX_DATA, PAGE_COUNT } from "../../../../utils-lib/constants";
import calculateOffset from "../../../../utils-lib/calculateOffset";
import { SortFilter } from "../../../../types/filter.d";
import { Restaurant } from "../../../../types/restaurant.d";

export default function useMainLayoutState() {
     const [restaurantDetails, setRestaurantDetails] = useState<Restaurant | null>(null);
      const [printRestaurantDetails, setPrintRestaurantDetails] = useState<Restaurant | null>(null);
      const [filteredRestaurantData, setFilteredRestaurantData] = useState<Restaurant[]>([])
      const [isFilterActivated, setIsFilterActivated] = useState(false)
      const [currentPage, setCurrentPage] = useState(0); 
      const [filteredRestaurantCount, setFilteredRestaurantCount] = useState(0);
      const [isFilteredRestaurantLoading, setIsFilteredRestaurantLoading] = useState(false)
      const [isSearchRestaurantBtnClicked, setIsSearchRestaurantBtnClicked] = useState(false)
      const [isFilterMobileActivated, setisFilterMobileActivated] = useState(false)
      const [sortFilter, setSortFilter] = useState<SortFilter>('')
      const offset = useMemo(() => calculateOffset(currentPage, LIMIT), [currentPage])
      const offsetFilteredData = useMemo(() => calculateOffset(currentPage, LIMIT), [currentPage])
      const pageCountFilteredRestaurant = useMemo(() => filteredRestaurantCount > NB_MAX_DATA ? PAGE_COUNT :  Math.ceil((filteredRestaurantCount) / LIMIT), [filteredRestaurantCount])
    
      return {
        restaurantDetails,
        setRestaurantDetails,
        printRestaurantDetails,
        setPrintRestaurantDetails,
        filteredRestaurantData,
        setFilteredRestaurantData,
        isFilterActivated,
        setIsFilterActivated,
        currentPage,
        setCurrentPage,
        filteredRestaurantCount,
        setFilteredRestaurantCount,
        isFilteredRestaurantLoading,
        setIsFilteredRestaurantLoading,
        isSearchRestaurantBtnClicked,
        setIsSearchRestaurantBtnClicked,
        isFilterMobileActivated,
        setisFilterMobileActivated,
        sortFilter,
        setSortFilter,
        offset,
        offsetFilteredData,
        pageCountFilteredRestaurant
      }
}