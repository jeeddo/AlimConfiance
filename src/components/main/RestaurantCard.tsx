import clsx from "clsx"
import type { Restaurant } from "../../types/restaurant"
import { Rating } from "../../types/ratings"

interface RestaurantCardProps {
    restaurant: Restaurant,
    setRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void
}

export default function RestaurantCard({restaurant, setRestaurantDetails} : RestaurantCardProps) {

return <div onClick={() => setRestaurantDetails(restaurant)} className='relative w-full xl:w-[360px] bg-primary rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
    <div className='absolute top-3 right-3'>
        <p className='text-xs sm:text-sm font-semibold italic'>{(restaurant.rating as Rating).rate}</p>
        <div className={clsx(`w-2 h-2 rounded-full absolute top-1/2 -translate-y-1/2 -left-4`, {'bg-poor': (restaurant.rating as Rating).color === 'poor', 'bg-average': (restaurant.rating as Rating).color === 'average', 'bg-good': (restaurant.rating as Rating).color === 'good', 'bg-excellent': (restaurant.rating as Rating).color === 'excellent'})}></div>

    </div>
    <div className='flex flex-col justify-center items-start gap-5'>
        <div className='flex flex-col justify-center items-start gap-3 w-full'>
        <h2 className='font-bold text-main text-base sm:text-lg xl:w-[175px] truncate xs:w-9/12 w-[200px]'>{restaurant.name}</h2>
        <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-main'>{restaurant.activity}</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
            <p>{restaurant.address}</p>
            <p>{restaurant.postalCode}</p>
            <p>{restaurant.city}</p>
        </div>
    </div>
</div>
}