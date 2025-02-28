import Badge from '../../../components/ui/badge/Badge'
import { Rating } from '../types/ratings'
import type { Restaurant } from '../types/restaurant'
import { BG_RATES_COLORS } from '../utils-lib/constants'

interface RestaurantCardProps {
  restaurant: Restaurant
  setRestaurantDetails: (
    restaurant: React.SetStateAction<Restaurant | null>
  ) => void
}
type RestaurantContentProps = Omit<
  Restaurant,
  'type' | 'rating' | 'inspectionDate'
>

export default function RestaurantCard({
  restaurant,
  setRestaurantDetails
}: RestaurantCardProps) {
  return (
    <div
      onClick={() => setRestaurantDetails(restaurant)}
      className='relative w-full cursor-pointer overflow-hidden rounded-md bg-primary p-6 transition-all duration-500 hover:opacity-85 hover:ring-2 xl:w-[360px] xl:rounded-lg'>
      <RestaurantRating
        rate={(restaurant.rating as Rating).rate}
        color={(restaurant.rating as Rating).color}
      />
      <RestaurantContent
        activity={restaurant.activity}
        address={restaurant.address}
        city={restaurant.city}
        postalCode={restaurant.postalCode}
        name={restaurant.name}
      />
    </div>
  )
}

export function RestaurantRating({ color, rate }: Rating) {
  return (
    <div className='absolute right-3 top-3'>
      <p className='text-xs font-semibold italic sm:text-sm'>{rate}</p>
      <Badge
        asPill
        size={'xs'}
        className={`absolute -left-4 top-1/2 -translate-y-1/2 ${BG_RATES_COLORS[color]}`}
      />
    </div>
  )
}

export function RestaurantContent({
  activity,
  name,
  address,
  postalCode,
  city
}: RestaurantContentProps) {
  return (
    <div className='flex flex-col items-start justify-center gap-5'>
      <div className='flex w-full flex-col items-start justify-center gap-3'>
        <h2 className='w-[200px] truncate text-base font-bold text-main xs:w-9/12 sm:text-lg xl:w-[175px]'>
          {name}
        </h2>
        <Badge size='sm' variant='main' className='sm:text-sm'>
          {activity}
        </Badge>
      </div>
      <div className='flex flex-col items-start justify-center gap-1 sm:text-sm'>
        <p>{address}</p>
        <p>{postalCode}</p>
        <p>{city}</p>
      </div>
    </div>
  )
}
