import { ReactNode } from "react";

export default function RestaurantList({children} : {children: ReactNode}) {
    return   <div className='w-full grid xl:grid-cols-2 grid-cols-1 xl:gap-x-3 gap-y-5 sm:text-base text-xs mb-1'>
        {children}
</div>
}