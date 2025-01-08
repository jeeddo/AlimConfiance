import { faXmark as closeIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Restaurant from '../../assets/images/Restaurant.png'

export default function CardDetailsModal() {
    return    <div className='hidden absolute bottom-0 w-full bg-neutral-100 rounded-md'>
    <header className='relative flex justify-between items-center bg-indigo-200 px-4 rounded-t-md' >
        <h2 className='md:text-lg text-base text-blue-900 font-semibold'>Restaurants</h2>
        <img className='w-1/3' src={Restaurant} alt="Restaurant" />
        <button className=' xs:text-base text-sm absolute top-2 left-1/2 -translate-x-1/2 hover:opacity-65 transition duration-300' ><FontAwesomeIcon icon={closeIcon}/></button>
  
    </header>
    
        <main className='flex justify-between items-center px-4 py-3 md:text-base sm:text-sm text-xs'>
        <div className='flex flex-col justify-center items-start gap-5'> 
            <div className='flex flex-col justify-center items-start gap-1'>
            <p className='mb-2 bg-green-700 text-white px-2 py-1 rounded-full shadow-md'>Restaurants</p>
            <h4>LE CAMPING EN FAMILLE</h4>
            <p >3 RUE DES CORBIEREES</p>
            <p >66470 Sainte-Marie-la-Mer</p>
            </div>
            <div className='flex flex-col justify-center items-start gap-1'>
                <p><strong>Date de l'inspection : </strong>18 juil. 2024</p>
                <p><strong>Niveau d'hygiène : </strong>Très satisfaisant</p>
            </div>
          
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='relative'>
                <p className='px-3 py-4 xs:p-5 shadow border border-indigo-200 xl:text-xl md:text-lg xs:text-base hover:border-2 hover:scale-105 transition-all duration-700 rounded-lg'>Très satisfaisant</p>
                <div className='h-2 w-2 bg-green-400 rounded-full absolute xs:top-2 xs:right-2 right-[5px] top-[5px]'></div>
            </div>
            <button className=' bg-blue-900 text-white px-1 xs:px-3 py-2 rounded-lg sm:rounded-md shadow-lg hover:shadow-xl active:scale-95 hover:bg-blue-600 hover:text-slate-200 transition-all duration-700 '>Imprimer cette affichette</button>
        </div>
        </main>
    </div>
    
}