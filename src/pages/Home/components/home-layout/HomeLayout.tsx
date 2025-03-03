import { useGlobalContext } from '../../../../contexts/global/useGlobalContext.hook'
import scrollToTop from '../../../../utils-lib/scrollToTop'
import type { Restaurant } from '../../types/restaurant'
import { PAGE_COUNT } from '../../utils-lib/constants'
import DiscoverButtons from '../DiscoverButtons'
import FilterModalMobileDevices from '../FilterModalMobileDevices'
import RestaurantCard from '../RestaurantCard'
import RestaurantCardSkeleton from '../RestaurantCardSkeleton'
import RestaurantDetailsModal from '../RestaurantDetailsModal'
import RestaurantDetailsPrintModal from '../RestaurantDetailsPrintModal'
import RestaurantList from '../RestaurantList'
import SearchAndTooltip from '../SearchAndTooltip'
import SortButtons from '../SortButtons'
import HomeForm from '../home-form/HomeForm'
import useFetchRestaurant from './hooks/useFetchRestaurant.hook'
import useHomeLayoutState from './hooks/useHomeLayoutState.hook'
import {
  faChevronLeft as chevronLeft,
  faChevronRight as chevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'

export default function HomeLayout() {
  const {
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
    pageCountFilteredRestaurant
  } = useHomeLayoutState()

  const { isMobile } = useGlobalContext()

  const { restaurantData, isLoading } = useFetchRestaurant(
    offset,
    currentPage,
    isFilterActivated
  )

  useEffect(() => {
    setCurrentPage(prev => (prev ? 0 : prev))
  }, [isFilterActivated, setCurrentPage])

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
    scrollToTop()
  }

  return (
    <main
      className='mx-auto flex max-w-6xl animate-fade-in items-start justify-center px-5 opacity-0 transition-all md:gap-12 lg:gap-16 xl:items-center xl:gap-20'
      style={{ minHeight: 'var(--viewport-minus-header-plus-footer)' }}>
      <div className='mt-10 hidden w-[350px] flex-col items-start justify-center gap-12 text-sm md:flex lg:text-base xl:mt-0'>
        {!isMobile && (
          <>
            {' '}
            <DiscoverButtons
              isSearchBtnClicked={isSearchRestaurantBtnClicked}
              setBtnState={setIsSearchRestaurantBtnClicked}
              breakPoint='lg'
            />
            <HomeForm
              hasCurrentPage={currentPage > 0}
              setSortFilter={setSortFilter}
              sortFilter={sortFilter}
              setCurrentPage={setCurrentPage}
              isFilterActivated={isFilterActivated}
              setisFilterMobileActivated={setisFilterMobileActivated}
              isSearchBtnClicked={isSearchRestaurantBtnClicked}
              breakPoint='lg'
              setFilteredData={setFilteredRestaurantData}
              setNbOfRestaurant={setFilteredRestaurantCount}
              offset={offset}
              setIsFilterActivated={setIsFilterActivated}
              setIsFilteredRestaurantLoading={setIsFilteredRestaurantLoading}
              setRestaurantDetails={setRestaurantDetails}
            />{' '}
          </>
        )}
      </div>

      <div className='relative flex w-full flex-col items-start justify-center gap-10'>
        {isMobile && (
          <SearchAndTooltip
            isFilterMobileActivated={isFilterMobileActivated}
            setisFilterMobileActivated={setisFilterMobileActivated}
            setRestaurantDetails={setRestaurantDetails}
          />
        )}
        <SortButtons
          setCurrentPage={setCurrentPage}
          isFilterActivated={isFilterActivated}
          sortFilter={sortFilter}
          setIsFilterActivated={setIsFilterActivated}
          setSortFilter={setSortFilter}
        />

        <RestaurantList>
          {!isLoading &&
            !isFilterActivated &&
            restaurantData.map((restaurant: Restaurant, i: number) => (
              <RestaurantCard
                key={i}
                setRestaurantDetails={setRestaurantDetails}
                restaurant={restaurant}
              />
            ))}
          {!isFilteredRestaurantLoading &&
            isFilterActivated &&
            filteredRestaurantData.map((restaurant: Restaurant, i: number) => (
              <RestaurantCard
                key={i}
                setRestaurantDetails={setRestaurantDetails}
                restaurant={restaurant}
              />
            ))}
          {!isFilteredRestaurantLoading &&
            isFilterActivated &&
            filteredRestaurantData.length === 0 && (
              <p className='text-lg text-main'>No results found</p>
            )}
          {(isLoading || isFilteredRestaurantLoading) &&
            restaurantData.map((_, i) => <RestaurantCardSkeleton key={i} />)}
        </RestaurantList>

        <ReactPaginate
          breakLabel='...'
          nextLabel={
            <span className='text-sm transition duration-200 hover:opacity-50 sm:text-base'>
              <FontAwesomeIcon icon={chevronRight} />
            </span>
          }
          onPageChange={handlePageChange}
          pageRangeDisplayed={3}
          pageCount={
            isFilterActivated ? pageCountFilteredRestaurant : PAGE_COUNT
          }
          previousLabel={
            <span className='text-sm transition duration-200 hover:opacity-50 sm:text-base'>
              <FontAwesomeIcon icon={chevronLeft} />
            </span>
          }
          renderOnZeroPageCount={null}
          className='flex w-full items-center justify-center gap-1 overflow-x-hidden sm:gap-3'
          pageClassName="sm:text-base text-sm bg-primary px-3 py-2 rounded-lg hover:bg-secondary cursor-pointer relative before:content-[''] before:absolute before:w-3 before:rounded-lg before:h-[1px] before:bg-slate-400 before:bottom-[7px] before:left-1/2 before:-translate-x-1/2 before:scale-0 hover:before:scale-100 transition-all duration-700"
          activeClassName='bg-secondary border border-main'
          forcePage={currentPage}
        />

        <RestaurantDetailsModal
          setRestaurantDetailsPrinter={setPrintRestaurantDetails}
          setRestaurantDetails={setRestaurantDetails}
          restaurantDetails={restaurantDetails}
        />
        <RestaurantDetailsPrintModal
          restaurantDetails={printRestaurantDetails}
          setPrintRestaurantDetails={setPrintRestaurantDetails}
        />
      </div>

      {isMobile && (
        <FilterModalMobileDevices
          hasCurrentPage={currentPage > 0}
          setSortFilter={setSortFilter}
          sortFilter={sortFilter}
          setCurrentPage={setCurrentPage}
          isFilterActivated={isFilterActivated}
          setBtnState={setIsSearchRestaurantBtnClicked}
          isSearchBtnClicked={isSearchRestaurantBtnClicked}
          isFilterMobileActivated={isFilterMobileActivated}
          setisFilterMobileActivated={setisFilterMobileActivated}
          setFilteredData={setFilteredRestaurantData}
          setNbOfRestaurant={setFilteredRestaurantCount}
          offset={offset}
          setIsFilterActivated={setIsFilterActivated}
          setIsFilteredRestaurantLoading={setIsFilteredRestaurantLoading}
          setRestaurantDetails={setRestaurantDetails}
        />
      )}
    </main>
  )
}
