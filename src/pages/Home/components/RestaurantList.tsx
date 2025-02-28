import { Children } from '../../../types/common'

export default function RestaurantList({ children }: Children) {
  return (
    <div className='mb-1 grid w-full grid-cols-1 gap-y-5 text-xs sm:text-base xl:grid-cols-2 xl:gap-x-3'>
      {children}
    </div>
  )
}
