import type { Restaurant } from "../../types/restaurant"

interface SingleCardProps {
    restaurant: Restaurant,
    handleClick: (restaurant: Restaurant) => void
}

export default function SingleCard({restaurant, handleClick} : SingleCardProps) {

return <div onClick={() => handleClick(restaurant)} className='relative w-full xl:w-[360px] bg-primary rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
    <div className='absolute top-3 right-3'>
        <p className='text-xs sm:text-sm font-semibold italic'>{restaurant.rating.rate}</p>
        <div className={`w-2 h-2 bg-${restaurant.rating.color} rounded-full absolute top-1/2 -translate-y-1/2 -left-4`}></div>

    </div>
    <div className='flex flex-col justify-center items-start gap-5'>
        <div className='flex flex-col justify-center items-start gap-3'>
        <h2 className='font-bold text-main text-base sm:text-lg xl:w-[175px] xl:truncate xs:w-fit w-[200px]'>{restaurant.name}</h2>
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