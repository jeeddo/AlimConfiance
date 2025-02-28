import Badge from '../../../components/ui/badge/Badge'

export default function RestaurantCardSkeleton() {
  return (
    <div className='relative h-[204px] w-full cursor-pointer overflow-hidden rounded-md bg-primary p-6 transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:animate-skeleton before:bg-gradient-to-r before:from-transparent before:via-slate-100/50 before:content-[""] hover:opacity-85 hover:ring-2 xl:w-[360px] xl:rounded-lg'>
      <div className='absolute right-3 top-3'>
        <p className='h-3 w-28 rounded-lg bg-secondary'></p>
        <Badge
          size='xs'
          className='absolute -left-4 top-1/2 -translate-y-1/2 bg-excellent opacity-70'
          asPill
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-14'>
        <div className='flex flex-col items-start justify-center gap-3'>
          <h2 className='h-4 w-[10rem] rounded-lg bg-secondary xs:w-[200px] xl:w-40'></h2>
          <p className='h-5 w-24 rounded-md bg-main'></p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2 sm:text-sm'>
          <p className='h-3 w-[11rem] rounded-lg bg-secondary xs:w-[14rem]'></p>
          <p className='h-3 w-[10rem] rounded-lg bg-secondary xs:w-[12rem]'></p>
          <p className='h-3 w-[9rem] rounded-lg bg-secondary xs:w-[10rem]'></p>
        </div>
      </div>
    </div>
  )
}
