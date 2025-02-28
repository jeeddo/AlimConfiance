import Button from '../../../components/ui/button/Button'
import clsx from 'clsx'

export interface DiscoverButtonsProps {
  setBtnState: (state: React.SetStateAction<boolean>) => void
  breakPoint: string
  isSearchBtnClicked: boolean
}

export default function DiscoverButtons({
  setBtnState,
  breakPoint,
  isSearchBtnClicked
}: DiscoverButtonsProps) {
  const breakPointLg = breakPoint === 'lg'
  const breakPointXs = breakPoint === 'xs'
  const handleClickBtnDiscover = () => {
    if (!isSearchBtnClicked) return
    setBtnState(false)
  }
  const handleClickBtnSearch = () => {
    if (isSearchBtnClicked) return
    setBtnState(true)
  }

  return (
    <div
      className={clsx(
        `flex h-[80px] w-full flex-col items-center justify-center rounded-lg bg-main text-white shadow shadow-main transition duration-500 hover:shadow hover:shadow-main`,
        breakPointLg && 'lg:h-[64px] lg:flex-row',
        breakPointXs && 'xs:h-[64px] xs:flex-row'
      )}>
      <Button
        onClick={handleClickBtnDiscover}
        className={clsx(
          'h-full w-full px-5 py-2 shadow-none duration-500 hover:translate-y-0 hover:rounded-lg hover:rounded-b-none hover:shadow-none active:scale-[.98]',
          breakPointLg &&
            'lg:w-fit lg:hover:rounded-l-lg lg:hover:rounded-r-none',
          breakPointXs &&
            'xs:w-1/2 xs:hover:rounded-l-lg xs:hover:rounded-r-none'
        )}>
        Découvrir
      </Button>
      <Button
        onClick={handleClickBtnSearch}
        className={clsx(
          'h-full w-full px-5 py-2 shadow-none duration-500 hover:translate-y-0 hover:rounded-lg hover:rounded-t-none hover:shadow-none active:scale-[.98]',
          breakPointLg &&
            'lg:w-max lg:hover:rounded-l-none lg:hover:rounded-r-lg',
          breakPointXs &&
            'xs:w-1/2 xs:hover:rounded-l-none xs:hover:rounded-r-lg'
        )}>
        Trouver un restaurant
      </Button>
    </div>
  )
}
