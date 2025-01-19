export default function RestaurantCardSkeleton() {
    return  <div className=' before:content-[""] before:animate-skeleton before:-translate-x-full before:absolute before:inset-0  before:bg-gradient-to-r before:from-transparent before:via-slate-100/50 relative w-full xl:w-[360px] bg-primary rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
    <div className='absolute top-3 right-3'>
        <p className='w-28 h-3 bg-secondary rounded-lg'></p>
        <div className={`w-2 h-2 bg-green-400 rounded-full opacity-70 absolute top-1/2 -translate-y-1/2 -left-4`}></div>

    </div>
    <div className='flex flex-col justify-center items-start gap-5'>
        <div className='flex flex-col justify-center items-start gap-3'>
        <h2 className='h-4 bg-secondary w-[200px] xl:w-40 rounded-lg'></h2>
        <p className='h-5 w-24 rounded-md bg-main'></p>
        </div>
        <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
            <p className="bg-secondary h-3 w-28 rounded-lg"></p>
            <p className="bg-secondary h-3 w-24 rounded-lg"></p>
            <p className="bg-secondary h-3 w-20 rounded-lg"></p>
        </div>
    </div>
</div>
}