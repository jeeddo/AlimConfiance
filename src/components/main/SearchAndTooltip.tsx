import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch as searchIcon, faQuestion as questionMarkIcon } from "@fortawesome/free-solid-svg-icons"

export default function SearchAndTooltip() {
   return  <div className='md:hidden sm:text-base text-sm flex w-full justify-around items-center mt-1'>
    <button className='text-white bg-main px-7 py-2 rounded-lg shadow-md shadow-main hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-primary hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Filtrer</button>
    <div className='relative'>
    <input readOnly className='sm:w-[300px] sm:placeholder:visible placeholder:invisible w-10 px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded-xl sm:rounded' type="text" autoComplete='off' placeholder='Search a restaurant' />
    <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer' icon={searchIcon} />
    </div>
    <span data-tooltip="Vous pouvez rechercher un établissement selon plusieurs critères :Son nom, sa commune, son code SIRET, son numéro d'agrément" className="before:shadow-lg before:italic before:border before:border-secondary before:px-5 before:py-2 text-sm relative before:content-[attr(data-tooltip)] before:absolute before:bg-primary before:z-10 before:w-[230px]
     before:top-[135%] before:-right-2 before:rounded-lg 
     after:content-[''] after:absolute after:border-b-[6px] after:border-primary
     after:border-l-[4px] after:border-l-transparent after:border-r-[4px] after:border-r-transparent after:top-[110%] after:z-20 after:right-[1px] after:scale-0 before:scale-0 hover:after:scale-100 hover:before:scale-100 before:transition after:transition after:duration-700 before:duration-700 before:origin-top-right after:origin-bottom-right"><FontAwesomeIcon icon={questionMarkIcon} /></span> 
</div>
}