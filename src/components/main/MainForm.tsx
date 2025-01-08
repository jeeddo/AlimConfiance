import { faLocationDot as locationIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MainForm({breakPoint} : {breakPoint: string}) {
    return (
      
        
       <form className='flex flex-col justify-center items-start gap-8 w-full'>
           <div className='flex flex-col w-full justify-center items-start gap-2 '>
               <label htmlFor="localisation" className={`text-base ${breakPoint}:text-lg font-semibold italic`}>Localisation</label>
               <div className='w-full relative'>
               <input className='w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded' type="text" autoComplete='off' placeholder='Enter a localisation' id='localisation' />
               <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 right-3' icon={locationIcon} />
               <ul className=' hidden absolute top-[125%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-start gap-1 text-sm bg-slate-200 rounded-xl py-2 px-4 w-11/12 max-h-[200px] overflow-y-scroll'>
               <li className='hover:scale-105 hover:opacity-50 transition duration-700 w-full'>
                   Paris
               </li>
               <li>
                   Bouches-du-Rhone, France
               </li>
               <li>
                   Bouches-du-Rhone, France vegeregre
               </li>
               <li>
                   Bouches-du-Rhone, France vegeregre
               </li>
               <li>
                   Bouches-du-Rhone, France vegeregre
               </li>
               <li>
                   Bouches-du-Rhone, France vegeregre
               </li>
               <li>
                   Bouches-du-Rhone, France vegeregre
               </li>
               <li>
                   Bouches-du-Rhone, France vegeregre
               </li>
               <li>
                   Bouches-du-Rhone, France vegeregre
               </li>
           </ul>
               </div>


           </div>
           <div className='flex flex-col justify-center items-start gap-2 w-full'>
           <label className={`text-base ${breakPoint}:text-lg font-semibold italic`} htmlFor="niveau-hygiène">Niveau d'hygiène</label>
           <select className=" w-full px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded" id="niveau-hygiène">
               <option>Tous les niveaux</option>
               <option >A corriger de manière urgente</option>
               <option >A améliorer</option>
               <option >Satisfaisant</option>
               <option >Très Satisfaisant</option>
           </select>
           </div>
           <div className='flex flex-col w-full justify-center items-center gap-5 mt-5'>
           <button className='text-white bg-blue-900 px-7 py-2 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-slate-200 hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Rechercher</button>
           <button className={`text-blue-900 bg-transparent  px-5 ${breakPoint}:px-7 py-2 rounded-lg shadow-lg border border-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-xl transition duration-700`} >Réinitialiser les filtres</button>
           </div>
          
       </form>
    )
}