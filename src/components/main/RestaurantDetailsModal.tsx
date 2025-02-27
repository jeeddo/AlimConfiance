import { faXmark as closeIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RestaurantImg from '../../assets/images/RestaurantImg.png'
import Restaurant2 from '../../assets/images/Restaurant2.png'
import type { Restaurant } from "../../types/restaurant.d"
import generateRandomNumber from "../../utils-lib/generateRandomNumber"
import { Rating } from "../../types/ratings"
import { BG_RATES_COLORS } from "../../utils-lib/constants"
import Button from "../ui/button/Button"
import Badge from "../ui/badge/Badge"

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
    <Button onClick={() => setRestaurantDetails(null)} className="xs:text-base text-sm absolute top-2 left-1/2 -translate-x-1/2 hover:opacity-65 transition duration-300 hover:bg-indigo " variant={"ghost"}><FontAwesomeIcon icon={closeIcon}/></Button>

</header>


}


function DetailsModalContent({setRestaurantDetails, setRestaurantDetailsPrinter, restaurantDetails} : CardDetailsModalProps) {
    if (restaurantDetails)
    return    <main className='flex justify-between items-center px-4 py-3 md:text-base sm:text-sm text-xs'>
    <div className='flex flex-col justify-center items-start gap-5'> 
        <div className='flex flex-col justify-center items-start gap-1'>
        <Badge className="mb-2" asPill variant='green' size='sm'>{restaurantDetails.activity}</Badge>
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
            <Badge variant='default' size='md'>{(restaurantDetails.rating as Rating).rate}</Badge>
            <Badge size='xs' asPill className={`absolute xs:top-2 xs:right-2 right-[5px] top-[5px] ${BG_RATES_COLORS[(restaurantDetails.rating as Rating).color]}`} />
        </div>
        <Button className="px-1 xs:px-3 py-2 shadow hover:shadow-md hover:rounded-lg" onClick={() => {setRestaurantDetailsPrinter(restaurantDetails); setRestaurantDetails(null)}} >Imprimer cette affichette</Button>
    </div>
    </main>
}