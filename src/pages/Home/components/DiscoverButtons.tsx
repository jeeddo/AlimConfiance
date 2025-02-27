import clsx from "clsx"
import Button from "../../../components/ui/button/Button";

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
     

       <Button onClick={handleClickBtnDiscover} className={clsx('w-full px-5 py-2  active:scale-[.98] duration-500 hover:rounded-lg shadow-none hover:shadow-none hover:rounded-b-none hover:translate-y-0 h-full', breakPointLg && 'lg:hover:rounded-r-none lg:hover:rounded-l-lg lg:w-fit', breakPointXs && 'xs:hover:rounded-r-none xs:hover:rounded-l-lg xs:w-1/2')}>Découvrir</Button>
       <Button onClick={handleClickBtnSearch} className={clsx('px-5 py-2 active:scale-[.98] duration-500 shadow-none hover:shadow-none hover:rounded-lg  hover:translate-y-0 hover:rounded-t-none  w-full  h-full ', breakPointLg && 'lg:w-max lg:hover:rounded-l-none lg:hover:rounded-r-lg', breakPointXs && 'xs:w-1/2 xs:hover:rounded-l-none xs:hover:rounded-r-lg')}>Trouver un restaurant</Button>
  

</div>
}