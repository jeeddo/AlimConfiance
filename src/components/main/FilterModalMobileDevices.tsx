import MainForm from "./MainForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as chevronDown } from "@fortawesome/free-solid-svg-icons";
import ControleSanitaire from '../../assets/images/ControleSanitaire.jpg'

export default function FilterModalMobileDevices() {
    return ( <div className='scale-0 bg-bg md:hidden fixed bottom-0 w-full h-[85%] flex flex-col justify-start items-center gap-16 rounded-t-2xl xs:text-base text-sm'>
    <header className='brightness-75 grayscale hover:grayscale-0 transition-all duration-200 z-20 relative flex flex-col justify-center items-center gap-6 w-full rounded-t-2xl py-5 px-2 h-1/5 font-extrabold'>
        <FontAwesomeIcon className='cursor-pointer text-base' icon={chevronDown} />
        <h2 className='text-lg'>Les contrôles sanitaires accessibles à tous</h2>
        <img className='absolute inset-0 h-full w-full opacity-45 -z-30 rounded-t-2xl' src={ControleSanitaire} alt="Contrôles sanitaires (aliments)" />
    </header>
    <main className='flex flex-col justify-center items-center gap-7 w-3/4'>
    <div className='w-full flex xs:flex-row flex-col justify-center items-center bg-main text-white shadow-sm shadow-main hover:shadow hover:shadow-main transition duration-500 rounded-lg lg:h-[64px] h-[80px]'>
   
    <button className="w-full px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-b-none xs:rounded-l-lg xs:rounded-r-none rounded-lg h-full">Découvrir</button>
   
     <button className=" px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-t-none xs:rounded-r-lg xs:rounded-l-none rounded-lg w-full h-full">Trouver un restaurant</button>
  
     </div>
    <MainForm breakPoint="xs" />
    </main>
</div>
    )

}