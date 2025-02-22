import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark as closeIcon, faPrint as printerIcon } from "@fortawesome/free-solid-svg-icons"
import Logo2 from '../../assets/images/Logo2.png'
import type { Restaurant } from "../../types/restaurant"
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Rating } from "../../types/ratings";
import { BG_RATES_COLORS } from "../../utils-lib/constants";

interface CardDetailsPrintModalProps {
    setPrintRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void,
    restaurantDetails: Restaurant | null,
}

type PrintModalContentProps = Pick<CardDetailsPrintModalProps, 'restaurantDetails'>
type PrintModalHeaderProps = Pick<CardDetailsPrintModalProps, 'setPrintRestaurantDetails'>
export default function RestaurantDetailsPrintModal({setPrintRestaurantDetails, restaurantDetails}: CardDetailsPrintModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const printModal = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (restaurantDetails) setIsModalOpen(true)
        else setIsModalOpen(false)
    }, [restaurantDetails])


    useClickOutside(printModal, () => setPrintRestaurantDetails(null), false, isModalOpen)
   

    return  isModalOpen && restaurantDetails !== null && (<div ref={printModal} className='z-50 flex flex-col justify-center items-start gap-2 w-full xs:w-3/4 bg-bg absolute top-0 left-0 rounded-md xs:text-sm text-xs '>
    <PrintModalHeader setPrintRestaurantDetails={setPrintRestaurantDetails} />
    <PrintModalContent restaurantDetails={restaurantDetails} />
    
</div>)
}

function PrintModalHeader({setPrintRestaurantDetails}: PrintModalHeaderProps) {
    return <header className='h-10 bg-indigo flex justify-center items-center w-full rounded-t-md'>
    <button onClick={() => setPrintRestaurantDetails(null)} className='sm:text-base text-sm hover:opacity-65 transition duration-300 w-full h-full'> <FontAwesomeIcon icon={closeIcon} />
    </button>
</header>
}
function PrintModalContent({restaurantDetails}: PrintModalContentProps) {
    const [isPrintBtnClicked, setPrintBtnClicked] = useState(false)
    const contentRef = useRef<HTMLDivElement | null>(null);

    const reactToPrint = useReactToPrint({
        contentRef,
        onAfterPrint: () => setPrintBtnClicked(false)
    });
   useEffect(() => {
    if (isPrintBtnClicked) reactToPrint()
   }, [isPrintBtnClicked])

   if (restaurantDetails)
    return <main ref={contentRef} className='flex flex-col justify-center items-start md:gap-5 gap-4 p-5 border-dashed border-2 border-indigo m-4 rounded'>
    <div  className={`flex ${isPrintBtnClicked ? 'justify-between' : 'justify-around'} items-center gap-2 mb-1`}>
        <img className='w-1/5 shadow' src={Logo2} alt="Logo ministère de l'agriculture et de l'alimentation" />
        <h2>alimconfiance.gouv.fr</h2>
        { !isPrintBtnClicked &&
            <button onClick={() => setPrintBtnClicked(true)} className='bg-main flex justify-center items-center gap-2 text-white px-3 py-1 rounded active:scale-95 transition duration-500 hover:bg-indigo hover:text-main hover:shadow-indigo shadow-lg'>Imprimer<FontAwesomeIcon icon={printerIcon} /></button>
        }
    </div>
    <div className='flex flex-col justify-center items-start gap-4'>
        <div className='flex flex-col justify-center items-start gap-3'>
            <h3 className='xs:text-base text-sm text-main font-semibold'>{restaurantDetails.name}</h3>
            <p className='bg-main px-3 py-1 text-white rounded-full shadow-md'>{restaurantDetails.activity}</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-1'>
            <p>{restaurantDetails.address}</p>
            <p>{restaurantDetails.postalCode + ' ' + restaurantDetails.city}</p>
        </div>
    </div>
    <hr className='text-slate-500 w-1/3 rounded-full' />
    <div className='flex flex-col justify-center items-start gap-1'>
        <p><strong>Date de l'inspection : </strong>{restaurantDetails.inspectionDate}</p>
        <p className='italic underline'>Validité 1 an</p>
    </div>
    <div className='relative max-w-full mx-auto mt-5'>
        <p className='text-base sm:text-xl xs:px-12 xs:py-5 px-8 py-3 border border-indigo hover:border-2 hover:scale-105 hover:shadow-md xs:hover:shadow-lg transition-all duration-700 rounded-lg shadow'>{(restaurantDetails.rating as Rating).rate}</p>
        <div className={`h-2 w-2 rounded-full absolute top-2 right-2 ${BG_RATES_COLORS[(restaurantDetails.rating as Rating).color]}`}>

        </div>
    </div>
</main>
}