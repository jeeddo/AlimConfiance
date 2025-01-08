import AdvancedFilterButtons from "./AdvancedFilterButtons";
import CardDetailsModal from "./CardDetailsModal";
import CardDetailsPrintModal from "./CardDetailsPrintModal";
import CardList from "./CardList";
import DiscoverButtons from "./DiscoverButtons";
import FilterModalMobileDevices from "./FilterModalMobileDevices";
import MainForm from "./MainForm";
import SearchAndTooltip from "./SearchAndTooltip";
import SingleCard from "./SingleCard";
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft as chevronLeft, faChevronRight as chevronRight } from "@fortawesome/free-solid-svg-icons";

export default function MainLayout() {
   return  <main className='max-w-6xl mx-auto px-5 flex  justify-center xl:items-center items-start md:gap-12 xl:gap-20 lg:gap-16 transition-all overflow-x-hidden'>
    <div className='hidden xl:mt-0 mt-10 md:flex flex-col justify-center items-start gap-12 w-[350px] lg:text-base text-sm'>
        <DiscoverButtons />
        <MainForm breakPoint="lg" />
    </div>





    <div className='w-full relative flex flex-col justify-center items-start gap-10 overflow-x-hidden '>
      <SearchAndTooltip />

    <AdvancedFilterButtons />

        <CardList>
        <SingleCard />

        </CardList>
     
        

        

        
        <ReactPaginate
            breakLabel="..."
            nextLabel={<span className='hover:opacity-50 transition duration-200 sm:text-base text-sm'><FontAwesomeIcon icon={chevronRight} /></span>}
            // onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={1000}
            previousLabel={<span className='hover:opacity-50 transition duration-200 sm:text-base text-sm'><FontAwesomeIcon icon={chevronLeft} /></span>}
            renderOnZeroPageCount={null}
            className='flex justify-center items-center sm:gap-3 gap-1 w-full'
            pageClassName=" sm:text-base text-sm bg-slate-200 px-3 py-2 rounded-lg hover:bg-slate-300 cursor-pointer relative before:content-[''] before:absolute before:w-3 before:rounded-lg before:h-[1px] before:bg-slate-400 before:bottom-[7px] before:left-1/2 before:-translate-x-1/2 before:scale-0 hover:before:scale-100 transition-all duration-700"                            
            activeClassName='bg-slate-300 border border-blue-900'
          
        />

     <CardDetailsModal />



          <CardDetailsPrintModal />

        </div>
    


   <FilterModalMobileDevices />

</main>

}