export default function SingleCard() {
    return <div className='relative w-full xl:w-[360px] bg-slate-200 rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
    <div className='absolute top-3 right-3'>
        <p className='text-xs sm:text-sm font-semibold italic'>Très satisfaisant</p>
        <div className='w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -translate-y-1/2 -left-4'></div>

    </div>
    <div className='flex flex-col justify-center items-start gap-5'>
        <div className='flex flex-col justify-center items-start gap-3'>
        <h2 className='font-bold text-blue-900 text-base sm:text-lg xl:w-[175px] xl:truncate xs:w-fit w-[200px]'>MERCURE CITE EPISCOPALE D'ALBI</h2>
        <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-blue-900'>Restaurants</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
            <p>2 PL GENERAL LECLERC</p>
            <p>38500</p>
            <p>Voiron</p>
        </div>
    </div>
</div>
}