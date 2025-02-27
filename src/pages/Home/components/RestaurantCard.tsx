import type { Restaurant } from "../types/restaurant"
import { Rating } from "../types/ratings"
import { BG_RATES_COLORS } from "../utils-lib/constants"
import Badge from "../../../components/ui/badge/Badge"

interface RestaurantCardProps {
    restaurant: Restaurant,
    setRestaurantDetails: (restaurant: React.SetStateAction<Restaurant | null>) => void
}
type RestaurantContentProps = Omit<Restaurant, 'type' | 'rating' | 'inspectionDate'>

export default function RestaurantCard({restaurant, setRestaurantDetails} : RestaurantCardProps) {

return <div onClick={() => setRestaurantDetails(restaurant)} className='relative w-full xl:w-[360px] bg-primary rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
    <RestaurantRating rate={(restaurant.rating as Rating).rate} color={(restaurant.rating as Rating).color} />
    <RestaurantContent activity={restaurant.activity} address={restaurant.address} city={restaurant.city} postalCode={restaurant.postalCode} name={restaurant.name} />
</div>
}

export function RestaurantRating({color, rate}: Rating) {
    return <div className='absolute top-3 right-3'>
    <p className='text-xs sm:text-sm font-semibold italic'>{rate}</p>
    <Badge asPill size={'xs'} className={`absolute top-1/2 -translate-y-1/2 -left-4 ${BG_RATES_COLORS[color]}`} />

</div>
}

export function RestaurantContent({activity, name, address, postalCode, city}: RestaurantContentProps) {
    return   <div className='flex flex-col justify-center items-start gap-5'>
    <div className='flex flex-col justify-center items-start gap-3 w-full'>
    <h2 className='font-bold text-main text-base sm:text-lg xl:w-[175px] truncate xs:w-9/12 w-[200px]'>{name}</h2>
    <Badge size='sm' variant='main' className="sm:text-sm">{activity}</Badge>
    </div>
    <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
        <p>{address}</p>
        <p>{postalCode}</p>
        <p>{city}</p>
    </div>
</div>
}