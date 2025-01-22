import AdvancedFilterButtons from "./AdvancedFilterButtons";
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
import formatRate from "../../utils/formatRate";
import formatDate from "../../utils/formatDate";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

export default function MainLayout() {
  
  
  
  const [restaurantData, setRestaurantData] = useState<Restaurant[]>([]);
  const [restaurantDetails, setRestaurantDetails] = useState<Restaurant | null>(null);
  const [printRestaurantDetails, setPrintRestaurantDetails] = useState<Restaurant | null>(null);
  const [isLoading, setLoading] = useState(false)
  const [filteredRestaurantData, setFilteredRestaurantData] = useState<Restaurant[]>([])
  const [isFilterActivated, setIsFilterActivated] = useState(false)
  const limit = 6;  
  const [currentPage, setCurrentPage] = useState(0); 
  const [filteredRestaurantCount, setFilteredRestaurantCount] = useState(0);
  const [isFilteredRestaurantLoading, setIsFilteredRestaurantLoading] = useState(false)
  const [isSearchRestaurantBtnClicked, setIsSearchRestaurantBtnClicked] = useState(false)
  const [isFilterMobileActivated, setisFilterMobileActivated] = useState(false)
  const offsetFilteredData = useMemo(() => currentPage * limit, [currentPage])
  const nbMaxData = 10000;  
  const pageCount = useMemo( () => !isFilterActivated ? Math.floor(nbMaxData / limit) : Math.ceil((filteredRestaurantCount ?? 0) / limit), [isFilterActivated, filteredRestaurantCount])

  const fecthRestaurantData = async (page: number): Promise<void> => {
    try {
      setLoading(true)
      const offset = page * limit;
      const api = await fetch(`https://dgal.opendatasoft.com/api/explore/v2.1/catalog/datasets/export_alimconfiance/records?limit=${limit}&offset=${offset}&where=app_libelle_activite_etablissement="Restaurants"`);
      if (!api.ok) console.log((await api.json()).message);
      const data = await api.json();
      setRestaurantData(data.results.map((restaurant: Record<string, unknown>) => ({
        name: restaurant.app_libelle_etablissement,
        address: restaurant.adresse_2_ua,
        postalCode: restaurant.code_postal,
        city: restaurant.libelle_commune,
        inspectionDate: formatDate(restaurant.date_inspection as string),
        activity: Array.isArray(restaurant.app_libelle_activite_etablissement) ? restaurant.app_libelle_activite_etablissement[0] : '',
        rating: formatRate(restaurant.synthese_eval_sanit as string)
      })));
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isFilterActivated) fecthRestaurantData(currentPage);
  }, [currentPage]);

  useEffect(() => {
      setCurrentPage(0)
  }, [isFilterActivated])

  const handleClickRestaurantModalDetails = (restaurant: Restaurant | null) => {
    setRestaurantDetails(restaurant);
  };
  const handleClickPrintRestaurantDetails = (restaurant: Restaurant | null) => {
    setPrintRestaurantDetails(restaurant);
  };

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);  
  };

  const setTotalCount = (count : number) => {
    setFilteredRestaurantCount(count);
  }

  const setFilteredRestaurant = (filteredRestaurant: Restaurant[]) => {
    setFilteredRestaurantData(filteredRestaurant)
  }

  const setIsFilteredModeActivated = async (isActivated: boolean) => {
    setIsFilterActivated(isActivated)
  }

  const setFilteredRestaurantLoading = (isLoading: boolean) => {
    setIsFilteredRestaurantLoading(isLoading)
  }

  const setBtnState = (state: boolean) => setIsSearchRestaurantBtnClicked(state) 


  return  <main className='max-w-6xl mx-auto px-5 flex justify-center xl:items-center items-start md:gap-12 xl:gap-20 lg:gap-16 transition-all overflow-x-hidden' style={{ minHeight: 'var(--viewport-minus-header-plus-footer)' }}>
      <div className='hidden xl:mt-0 mt-10 md:flex flex-col justify-center items-start gap-12 w-[350px] lg:text-base text-sm'>
        <DiscoverButtons setBtnState={setBtnState} breakPoint="lg" />
        <MainForm setCurrentPage={setCurrentPage} isFilterActivated={isFilterActivated} setisFilterMobileActivated={setisFilterMobileActivated} isSearchBtnClicked={isSearchRestaurantBtnClicked} breakPoint="lg" limit={limit} setFilteredData={setFilteredRestaurant} setNbOfRestaurant={setTotalCount} offset={offsetFilteredData} setIsFilterActivated={setIsFilteredModeActivated} setIsFilteredRestaurantLoading={setFilteredRestaurantLoading} setRestaurantDetails={setRestaurantDetails} />
      </div>

      <div className='w-full relative flex flex-col justify-center items-start gap-10'>
        <SearchAndTooltip setisFilterMobileActivated={setisFilterMobileActivated} />
        <AdvancedFilterButtons />

        <RestaurantList>
        {!isLoading && !isFilterActivated && restaurantData.map((restaurant: Restaurant, i: number) => (<RestaurantCard key={i} handleClick={handleClickRestaurantModalDetails} restaurant={restaurant} />))}
        {!isFilteredRestaurantLoading && isFilterActivated && filteredRestaurantData.map((restaurant: Restaurant, i: number) => (<RestaurantCard key={i} handleClick={handleClickRestaurantModalDetails} restaurant={restaurant} />))}
        {!isFilteredRestaurantLoading && isFilterActivated && filteredRestaurantData.length === 0 && <p className="text-lg text-main">No results found</p>}
       {(isLoading || isFilteredRestaurantLoading) && restaurantData.map((_, index) => <RestaurantCardSkeleton key={index} />)}
        </RestaurantList>

        <ReactPaginate
          breakLabel="..."
          nextLabel={<span className='hover:opacity-50 transition duration-200 sm:text-base text-sm'><FontAwesomeIcon icon={chevronRight} /></span>}
          onPageChange={handlePageChange} 
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<span className='hover:opacity-50 transition duration-200 sm:text-base text-sm'><FontAwesomeIcon icon={chevronLeft} /></span>}
          renderOnZeroPageCount={null}
          className='flex justify-center items-center sm:gap-3 gap-1 w-full'
          pageClassName="sm:text-base text-sm bg-primary px-3 py-2 rounded-lg hover:bg-secondary cursor-pointer relative before:content-[''] before:absolute before:w-3 before:rounded-lg before:h-[1px] before:bg-slate-400 before:bottom-[7px] before:left-1/2 before:-translate-x-1/2 before:scale-0 hover:before:scale-100 transition-all duration-700"
          activeClassName='bg-secondary border border-main'
          forcePage={currentPage}
        />

        <RestaurantDetailsModal setRestaurantDetailsPrinter={handleClickPrintRestaurantDetails} handleClick={handleClickRestaurantModalDetails} restaurantDetails={restaurantDetails} />
        <RestaurantDetailsPrintModal restaurantDetails={printRestaurantDetails} handleClick={handleClickPrintRestaurantDetails} />
      </div>

      <FilterModalMobileDevices setCurrentPage={setCurrentPage}  isFilterActivated={isFilterActivated}  setBtnState={setBtnState} isSearchBtnClicked={isSearchRestaurantBtnClicked} breakPoint="xs" isFilterMobileActivated={isFilterMobileActivated} setisFilterMobileActivated={setisFilterMobileActivated} limit={limit} setFilteredData={setFilteredRestaurant} setNbOfRestaurant={setTotalCount} offset={offsetFilteredData} setIsFilterActivated={setIsFilteredModeActivated} setIsFilteredRestaurantLoading={setFilteredRestaurantLoading} setRestaurantDetails={setRestaurantDetails} />
    </main>
  
}