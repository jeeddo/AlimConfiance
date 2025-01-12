import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark as closeIcon, faPrint as printerIcon } from "@fortawesome/free-solid-svg-icons"
import Logo2 from '../../assets/images/Logo2.png'
import { Restaurant } from "../../types/restaurant.d"

interface CardDetailsPrintModalProps {
    handleClick: (restaurant: Restaurant | null) => void,
    restaurantDetails: Restaurant | null,
}
export default function CardDetailsPrintModal({handleClick, restaurantDetails}: CardDetailsPrintModalProps) {

    return  restaurantDetails && (<div className='z-50 flex flex-col justify-center items-start gap-2 w-full xs:w-3/4 bg-neutral-100 absolute top-0 left-0 rounded-md xs:text-sm text-xs '>
    <header className='h-10 bg-indigo-200 flex justify-center items-center w-full rounded-t-md'>
        <button onClick={() => handleClick(null)} className='sm:text-base text-sm hover:opacity-65 transition duration-300 w-full h-full'> <FontAwesomeIcon icon={closeIcon} />
        </button>
    </header>
    <main className='flex flex-col justify-center items-start gap-3 p-5 border-dashed border-2 border-indigo-200 m-4 rounded'>
        <div className='flex justify-center items-center gap-3'>
            <img className='w-1/5 shadow' src={Logo2} alt="Logo ministère de l'agriculture et de l'alimentation" />
            <h2>alimconfiance.gouv.fr</h2>
            <button className=' bg-blue-900 text-white px-3 py-1 rounded active:scale-95 transition duration-500 shadow-lg'>Imprimer<FontAwesomeIcon icon={printerIcon} /></button>
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
            <div className='flex flex-col justify-center items-start gap-3'>
                <h3 className='xs:text-base text-sm text-blue-900 font-semibold'>{restaurantDetails.name}</h3>
                <p className='bg-blue-900 px-3 py-1 text-white rounded-full shadow-md'>{restaurantDetails.activity}</p>
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
            <p className='text-base sm:text-xl xs:px-12 xs:py-5 px-8 py-3 border border-indigo-200 hover:border-2 hover:scale-105 hover:shadow-md xs:hover:shadow-lg transition-all duration-700 rounded-lg shadow'>{restaurantDetails.rating.rate}</p>
            <div className={`h-2 w-2 rounded-full absolute bg-${restaurantDetails.rating.color} top-2 right-2`}>

            </div>
        </div>
    </main>
</div>)
}