import ControleSanitaire from '../../../assets/images/ControleSanitaire.jpg'
import type { DiscoverButtonsProps } from './DiscoverButtons'
import DiscoverButtons from './DiscoverButtons'
import HomeForm from './home-form/HomeForm'
import { type HomeFormProps } from './home-form/homeForm.types'
import { faChevronDown as chevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FilterModalMobileDevices extends HomeFormProps, DiscoverButtonsProps {
  isFilterMobileActivated: boolean
}
type FilterModalMobileDevicesProps = Omit<
  FilterModalMobileDevices,
  'breakPoint'
>
export default function FilterModalMobileDevices({
  isFilterMobileActivated,
  setBtnState,
  isSearchBtnClicked,
  ...props
}: FilterModalMobileDevicesProps) {
  return (
    <div
      className={`${isFilterMobileActivated ? 'h-[85%]' : 'h-0'} fixed bottom-0 flex w-full flex-col items-center justify-start gap-16 overflow-y-auto rounded-t-2xl bg-bg text-sm transition-all duration-700 xs:text-base md:hidden`}>
      <header className='group relative z-20 flex h-1/5 w-full flex-col items-center justify-center gap-6 rounded-t-2xl px-2 py-5 font-extrabold brightness-75 grayscale transition-all duration-200 hover:grayscale-0'>
        <FontAwesomeIcon
          onClick={() => props.setisFilterMobileActivated(false)}
          className='cursor-pointer text-base'
          icon={chevronDown}
        />
        <h2 className='text-base group-hover:text-main xs:text-lg'>
          Les contrôles sanitaires accessibles à tous
        </h2>
        <img
          className='absolute -z-30 h-full w-full rounded-t-2xl opacity-45'
          src={ControleSanitaire}
          alt='Contrôles sanitaires (aliments)'
        />
      </header>
      <main className='flex w-3/4 flex-col items-center justify-center gap-7'>
        <DiscoverButtons
          isSearchBtnClicked={isSearchBtnClicked}
          setBtnState={setBtnState}
          breakPoint='xs'
        />
        <HomeForm
          isSearchBtnClicked={isSearchBtnClicked}
          breakPoint='xs'
          {...props}
        />
      </main>
    </div>
  )
}
