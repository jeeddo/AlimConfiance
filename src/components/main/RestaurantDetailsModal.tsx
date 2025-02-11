import { faXmark as closeIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RestaurantImg from '../../assets/images/RestaurantImg.png'
import Restaurant2 from '../../assets/images/Restaurant2.png'
import type { Restaurant } from "../../types/restaurant.d"
import clsx from "clsx"
import generateRandomNumber from "../../utils/generateRandomNumber"
import { Rating } from "../../types/ratings"

interface CardDetailsModalProps {
    restaurantDetails: Restaurant | null,
    setRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void
    setRestaurantDetailsPrinter: (Restaurant: React.SetStateAction<Restaurant | null>) => void,
}

type DetailsModalHeaderProps = Pick<CardDetailsModalProps, 'setRestaurantDetails'>
export default function RestaurantDetailsModal({...props}: CardDetailsModalProps) {

  
    return   props.restaurantDetails !== null && (<div className='absolute bottom-0 w-full bg-bg rounded-md'>
    <DetailsModalHeader setRestaurantDetails={props.setRestaurantDetails} />
     <DetailsModalContent {...props} />
    </div>)
    
}
    

function DetailsModalHeader({setRestaurantDetails} : DetailsModalHeaderProps) {

    const chooseRestaurantImg = () => {
        const randomNumber = generateRandomNumber()
        if (randomNumber === 1) return Restaurant2
        return RestaurantImg 
    }


    return   <header className='relative flex justify-between items-center bg-indigo px-4 rounded-t-md' >
    <h2 className='md:text-lg text-base text-main font-semibold'>Restaurants</h2>
    <img className='w-1/3' src={chooseRestaurantImg()} alt="Restaurant" />
    <button onClick={() => setRestaurantDetails(null)} className=' xs:text-base text-sm absolute top-2 left-1/2 -translate-x-1/2 hover:opacity-65 transition duration-300' ><FontAwesomeIcon icon={closeIcon}/></button>

</header>


}


function DetailsModalContent({setRestaurantDetails, setRestaurantDetailsPrinter, restaurantDetails} : CardDetailsModalProps) {
    if (restaurantDetails)
    return    <main className='flex justify-between items-center px-4 py-3 md:text-base sm:text-sm text-xs'>
    <div className='flex flex-col justify-center items-start gap-5'> 
        <div className='flex flex-col justify-center items-start gap-1'>
        <p className='mb-2 bg-green-700 text-white px-2 py-1 rounded-full shadow-md'>{restaurantDetails.activity}</p>
        <h4>{restaurantDetails.name}</h4>
        <p >{restaurantDetails.address}</p>
        <p >{restaurantDetails.postalCode}</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-1'>
            <p><strong>Date de l'inspection : </strong>{restaurantDetails.inspectionDate}</p>
            <p><strong>Niveau d'hygiène : </strong>{(restaurantDetails.rating as Rating).rate}</p>
        </div>
      
    </div>
    <div className='flex flex-col justify-center items-center gap-5'>
        <div className='relative'>
            <p className='px-3 py-4 xs:p-5 shadow border border-indigo xl:text-xl md:text-lg xs:text-base hover:border-2 hover:scale-105 transition-all duration-700 rounded-lg'>{(restaurantDetails.rating as Rating).rate}</p>
            <div className={clsx(`h-2 w-2 rounded-full absolute xs:top-2 xs:right-2 right-[5px] top-[5px]`, {'bg-poor': (restaurantDetails.rating as Rating).color === 'poor', 'bg-average': (restaurantDetails.rating as Rating).color === 'average', 'bg-good': (restaurantDetails.rating as Rating).color === 'good', 'bg-excellent':(restaurantDetails.rating as Rating).color === 'excellent'})}></div>
        </div>
        <button onClick={() => {setRestaurantDetailsPrinter(restaurantDetails); setRestaurantDetails(null)}} className=' bg-main text-white px-1 xs:px-3 py-2 rounded-lg sm:rounded-md shadow-lg hover:shadow-xl active:scale-95 hover:bg-blue-600 hover:text-primary transition-all duration-700 '>Imprimer cette affichette</button>
    </div>
    </main>
}