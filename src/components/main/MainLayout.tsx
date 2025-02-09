import RestaurantDetailsModal from "./RestaurantDetailsModal";
import RestaurantDetailsPrintModal from "./RestaurantDetailsPrintModal";
import RestaurantList from "./RestaurantList";
import DiscoverButtons from "./DiscoverButtons";
import FilterModalMobileDevices from "./FilterModalMobileDevices";
import MainForm from "./MainForm";
import SearchAndTooltip from "./SearchAndTooltip";
import RestaurantCard from "./RestaurantCard";
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft as chevronLeft, faChevronRight as chevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useMemo } from "react";
import type { Restaurant } from "../../types/restaurant.d";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";
import scrollToTop from "../../utils/scrollToTop";
import calculateOffset from "../../utils/calculateOffset";
import SortButtons from "./SortButtons";
import type { SortFilter } from "../../types/filter.d";
import { getRestaurant } from "../../services/restaurant";

export default function MainLayout({isMobile}: {isMobile: boolean}) {
  
  const [restaurantData, setRestaurantData] = useState<Restaurant[]>([]);
  const [restaurantDetails, setRestaurantDetails] = useState<Restaurant | null>(null);
  const [printRestaurantDetails, setPrintRestaurantDetails] = useState<Restaurant | null>(null);
  const [isLoading, setLoading] = useState(false)
  const [filteredRestaurantData, setFilteredRestaurantData] = useState<Restaurant[]>([])
  const [isFilterActivated, setIsFilterActivated] = useState(false)
  const [currentPage, setCurrentPage] = useState(0); 
  const [filteredRestaurantCount, setFilteredRestaurantCount] = useState(0);
  const [isFilteredRestaurantLoading, setIsFilteredRestaurantLoading] = useState(false)
  const [isSearchRestaurantBtnClicked, setIsSearchRestaurantBtnClicked] = useState(false)
  const [isFilterMobileActivated, setisFilterMobileActivated] = useState(false)
  const [sortFilter, setSortFilter] = useState<SortFilter>('')
  const limit = 6;  
  const offset = useMemo(() => calculateOffset(currentPage, limit), [currentPage])
  const offsetFilteredData = useMemo(() => calculateOffset(currentPage, limit), [currentPage])
  const nbMaxData = 10000;  
  const pageCount = Math.floor(nbMaxData / limit)
  const pageCountFilteredRestaurant = useMemo(() => filteredRestaurantCount > nbMaxData ? pageCount :  Math.ceil((filteredRestaurantCount) / limit), [filteredRestaurantCount])

  const fecthRestaurantData = async (limit: number, offset: number): Promise<void> => {
      setLoading(true)
        const restaurant = await getRestaurant(limit, offset)
        setRestaurantData(restaurant);
        setLoading(false);
    
  };
  useEffect(() => {
    if (!isFilterActivated) fecthRestaurantData(limit, offset);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage) setCurrentPage(0)
  }, [isFilterActivated])
  

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);  
    scrollToTop()
  };



  return  <main className=' animate-fade-in opacity-0 max-w-6xl mx-auto px-5 flex justify-center xl:items-center items-start md:gap-12 xl:gap-20 lg:gap-16 transition-all' style={{ minHeight: 'var(--viewport-minus-header-plus-footer)' }}>
      <div className='hidden xl:mt-0 mt-10 md:flex flex-col justify-center items-start gap-12 w-[350px] lg:text-base text-sm'>
        <DiscoverButtons isSearchBtnClicked={isSearchRestaurantBtnClicked} setBtnState={setIsSearchRestaurantBtnClicked} breakPoint="lg" />
        {!isMobile && <MainForm  hasCurrentPage={currentPage > 0} setSortFilter={setSortFilter} sortFilter={sortFilter} setCurrentPage={setCurrentPage} isFilterActivated={isFilterActivated} setisFilterMobileActivated={setisFilterMobileActivated} isSearchBtnClicked={isSearchRestaurantBtnClicked} breakPoint="lg" limit={limit} setFilteredData={setFilteredRestaurantData} setNbOfRestaurant={setFilteredRestaurantCount} offset={offsetFilteredData} setIsFilterActivated={setIsFilterActivated} setIsFilteredRestaurantLoading={setIsFilteredRestaurantLoading} setRestaurantDetails={setRestaurantDetails} />}
      </div>

      <div className='w-full relative flex flex-col justify-center items-start gap-10'>
        {isMobile && <SearchAndTooltip setisFilterMobileActivated={setisFilterMobileActivated} setRestaurantDetails={setRestaurantDetails} />}
        <SortButtons setCurrentPage={setCurrentPage} isFilterActivated={isFilterActivated} sortFilter={sortFilter} setIsFilterActivated={setIsFilterActivated} setSortFilter={setSortFilter} />

        <RestaurantList>
        {!isLoading && !isFilterActivated && restaurantData.map((restaurant: Restaurant, i: number) => (<RestaurantCard key={i} setRestaurantDetails={setRestaurantDetails} restaurant={restaurant} />))}
        {!isFilteredRestaurantLoading && isFilterActivated && filteredRestaurantData.map((restaurant: Restaurant, i: number) => (<RestaurantCard key={i} setRestaurantDetails={setRestaurantDetails} restaurant={restaurant} />))}
        {!isFilteredRestaurantLoading && isFilterActivated && filteredRestaurantData.length === 0 && <p className="text-lg text-main">No results found</p>}
       {(isLoading || isFilteredRestaurantLoading) && restaurantData.map((_, i) => <RestaurantCardSkeleton key={i} />)}
        </RestaurantList>

        <ReactPaginate
          breakLabel="..."
          nextLabel={<span className='hover:opacity-50 transition duration-200 sm:text-base text-sm'><FontAwesomeIcon icon={chevronRight} /></span>}
          onPageChange={handlePageChange} 
          pageRangeDisplayed={3}
          pageCount={isFilterActivated ? pageCountFilteredRestaurant : pageCount}
          previousLabel={<span className='hover:opacity-50 transition duration-200 sm:text-base text-sm'><FontAwesomeIcon icon={chevronLeft} /></span>}
          renderOnZeroPageCount={null}
          className='flex justify-center items-center sm:gap-3 gap-1 w-full overflow-x-hidden'
          pageClassName="sm:text-base text-sm bg-primary px-3 py-2 rounded-lg hover:bg-secondary cursor-pointer relative before:content-[''] before:absolute before:w-3 before:rounded-lg before:h-[1px] before:bg-slate-400 before:bottom-[7px] before:left-1/2 before:-translate-x-1/2 before:scale-0 hover:before:scale-100 transition-all duration-700"
          activeClassName='bg-secondary border border-main'
          forcePage={currentPage}
        />

        <RestaurantDetailsModal setRestaurantDetailsPrinter={setPrintRestaurantDetails} setRestaurantDetails={setRestaurantDetails} restaurantDetails={restaurantDetails} />
        <RestaurantDetailsPrintModal restaurantDetails={printRestaurantDetails} setPrintRestaurantDetails={setPrintRestaurantDetails} />
      </div>

      {isMobile && <FilterModalMobileDevices hasCurrentPage={currentPage > 0} setSortFilter={setSortFilter} sortFilter={sortFilter} setCurrentPage={setCurrentPage}  isFilterActivated={isFilterActivated}  setBtnState={setIsSearchRestaurantBtnClicked} isSearchBtnClicked={isSearchRestaurantBtnClicked}  isFilterMobileActivated={isFilterMobileActivated} setisFilterMobileActivated={setisFilterMobileActivated} limit={limit} setFilteredData={setFilteredRestaurantData} setNbOfRestaurant={setFilteredRestaurantCount} offset={offsetFilteredData} setIsFilterActivated={setIsFilterActivated} setIsFilteredRestaurantLoading={setIsFilteredRestaurantLoading} setRestaurantDetails={setRestaurantDetails} />}
    </main>
  
}