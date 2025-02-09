import clsx from "clsx"

export interface DiscoverButtonsProps {
    setBtnState: (state: React.SetStateAction<boolean>) => void,
    breakPoint: string,
    isSearchBtnClicked: boolean
}

export default function DiscoverButtons({setBtnState, breakPoint, isSearchBtnClicked}: DiscoverButtonsProps) {

   const breakPointLg = breakPoint === 'lg';
   const breakPointXs = breakPoint === 'xs';
   const handleClickBtnDiscover = () => {
    if (!isSearchBtnClicked) return
    setBtnState(false)
   }
   const handleClickBtnSearch = () => {
    if (isSearchBtnClicked) return
    setBtnState(true)
   }

    return <div className={clsx(`w-full flex flex-col justify-center items-center bg-main text-white shadow shadow-main hover:shadow hover:shadow-main transition duration-500 rounded-lg h-[80px]`, breakPointLg && 'lg:flex-row lg:h-[64px]', breakPointXs && 'xs:h-[64px] xs:flex-row')}>
       
    <button onClick={handleClickBtnDiscover} className={clsx(`w-full px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-b-none rounded-lg h-full`, breakPointLg && 'lg:rounded-r-none lg:rounded-l-lg lg:w-fit', breakPointXs && 'xs:rounded-r-none xs:rounded-l-lg xs:w-1/2')}>Découvrir</button>
    <button onClick={handleClickBtnSearch} className={ clsx(`px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-t-none  rounded-lg w-full  h-full`, breakPointLg && 'lg:w-max lg:rounded-l-none lg:rounded-r-lg', breakPointXs && 'xs:w-1/2 xs:rounded-l-none xs:rounded-r-lg')}>Trouver un restaurant</button>
  
</div>
}