import MainForm from "./MainForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as chevronDown } from "@fortawesome/free-solid-svg-icons";
import ControleSanitaire from '../../assets/images/ControleSanitaire.jpg'
import type { MainFormProps } from "./MainForm";
import type { DiscoverButtonsProps } from "./DiscoverButtons";
import DiscoverButtons from "./DiscoverButtons";

interface FilterModalMobileDevicesPros extends MainFormProps, DiscoverButtonsProps {
    isFilterMobileActivated: boolean,
}

export default function FilterModalMobileDevices({isFilterMobileActivated, setBtnState, isSearchBtnClicked, ...props} : Omit<FilterModalMobileDevicesPros, 'breakPoint'>) {
    return ( <div className={`${isFilterMobileActivated ? 'h-[85%]' : 'h-0'} transition-all overflow-y-auto duration-700 bg-bg md:hidden fixed bottom-0 w-full flex flex-col justify-start items-center gap-16 rounded-t-2xl xs:text-base text-sm`}>
    <header className='brightness-75 grayscale hover:grayscale-0 group transition-all duration-200 z-20 relative flex flex-col justify-center items-center gap-6 w-full rounded-t-2xl py-5 px-2 h-1/5 font-extrabold'>
        <FontAwesomeIcon onClick={() => props.setisFilterMobileActivated(false)} className='cursor-pointer text-base' icon={chevronDown} />
        <h2 className='text-base xs:text-lg group-hover:text-main'>Les contrôles sanitaires accessibles à tous</h2>
        <img className='absolute h-full w-full opacity-45 -z-30 rounded-t-2xl' src={ControleSanitaire} alt="Contrôles sanitaires (aliments)" />
    </header>
    <main className='flex flex-col justify-center items-center gap-7 w-3/4'>
    <DiscoverButtons isSearchBtnClicked={isSearchBtnClicked} setBtnState={setBtnState} breakPoint="xs" />
    <MainForm isSearchBtnClicked={isSearchBtnClicked} breakPoint="xs" {...props} />
    </main>
</div>
    )
}