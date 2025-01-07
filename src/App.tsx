import { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as moonDarkMode, faStar as starDarkMode, faSun as sunLightMode, faBars as menuIcon, faXmark as closeIcon, 
    faDesktop as pcIcon, faLocationDot as locationIcon, faArrowUp as arrowUpIcon, faArrowDown as arrowDownIcon, faPrint as printerIcon,
faQuestion as questionMarkIcon, faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons";
import LogoAlimConfiance from './assets/images/LogoAlimConfiance.svg'
import Restaurant from './assets/images/Restaurant.png'
import Logo2 from './assets/images/Logo2.png'
import Logo1 from './assets/images/Logo1.png'
function App() {
    return (
        <>
            <header className='shadow-lg shadow-slate-300 h-24 flex justify-center items-center mb-16 bg-gradient-to-t from-transparent from-55% to-indigo-200 to-100%'>
                <div className='max-w-6xl mx-auto w-full flex xl:justify-between justify-around items-center'>
                    <img className='min-w-[200px] max-w-[33%]' src={LogoAlimConfiance} alt="Logo AlimConfiance" />
                    <div className="relative w-fit cursor-pointer sm:inline-block hidden text-blue-900">
                        <FontAwesomeIcon className='md:text-3xl text-2xl' icon={moonDarkMode} />
                        <FontAwesomeIcon className='w-3 absolute top-1/4 -translate-y-1/2 -right-3' icon={starDarkMode} />
                        <FontAwesomeIcon className='w-2 absolute top-[67%] -translate-y-1/2 -right-4' icon={starDarkMode} />
                    </div>
                    <button className='sm:hidden inline-block text-xl'><FontAwesomeIcon icon={menuIcon} /></button>
                </div>
                <div className='z-50 fixed inset-0 bg-slate-400 bg-opacity-50  hidden flex justify-end'>
                        <div className='relative h-full xs:w-[40%] w-[60%] backdrop-blur-sm bg-slate-200 p-12 xs:p-14'>
                            <button className='absolute top-4 right-6 text-xl hover:opacity-55 active:scale-75 transition duration-500' ><FontAwesomeIcon icon={closeIcon}/></button>
                            <div  className='flex flex-col items-start justify-center gap-3'>
                            <h3 className='font-semibold hover:font-bold inline-block text-lg'>Theme</h3>
                            <ul className='flex flex-col justify-center items-start w-full gap-1'>
                            <li>
                            <button className='flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={sunLightMode} />Light</button>
                            </li>
                            <li>
                            <button className='flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={moonDarkMode} />Dark</button>
                            </li>
                            <li>
                            <button className=' flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={pcIcon} />System</button>   
                            </li>                     
                        </ul>
                            </div>
                            <p className='absolute bottom-5 text-xs left-1/2 -translate-x-1/2 w-full text-center leading-5'>© 2024 by AlimConfiance. <br />  All right reserved.</p>
                        </div>
                    </div>
            </header>
            <main className='max-w-6xl mx-auto px-5 flex  justify-center xl:items-center items-start md:gap-12 xl:gap-20 lg:gap-16 overflow-x-hidden'>
                    <div className='hidden xl:mt-0 mt-10 md:flex flex-col justify-center items-start gap-12 w-[350px] lg:text-base text-sm'>
                        <div className='w-full flex lg:flex-row flex-col justify-center items-center bg-blue-900 text-white shadow-sm shadow-blue-900 hover:shadow hover:shadow-blue-900 transition duration-500 rounded-lg lg:h-[64px] h-[80px]'>
                       
                        <button className="w-full lg:w-fit px-5 py-2 active:scale-95 hover:text-slate-200 hover:bg-blue-600 transition duration-500 rounded-b-none lg:rounded-l-lg lg:rounded-r-none rounded-lg h-full">Découvrir</button>
                       
                         <button className=" px-5 py-2 active:scale-95 hover:text-slate-200 hover:bg-blue-600 transition duration-500 rounded-t-none lg:rounded-r-lg lg:rounded-l-none rounded-lg w-max h-full">Trouver un restaurant</button>
                      
                        </div>
                        <form className='flex flex-col justify-center items-start gap-8 w-full'>
                            <div className='flex flex-col w-full justify-center items-start gap-2 '>
                                <label htmlFor="localisation" className='text-base lg:text-lg font-semibold italic'>Localisation</label>
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
                            <label className='text-base lg:text-lg font-semibold italic' htmlFor="niveau-hygiène">Niveau d'hygiène</label>
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
                            <button className='text-blue-900 bg-transparent  px-5 lg:px-7 py-2 rounded-lg shadow-lg border border-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-xl transition duration-700' >Réinitialiser les filtres</button>
                            </div>
                           
                        </form>
                    </div>





                    <div className='w-full relative flex flex-col justify-center items-start gap-10 '>
                        <div className='md:hidden sm:text-base text-sm flex w-full justify-around items-center mt-1'>
                            <button className='text-white bg-blue-900 px-7 py-2 rounded-lg shadow-md shadow-blue-900 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 hover:text-slate-200 hover:rounded-xl hover:-translate-y-1 transition-all duration-700'>Filtrer</button>
                            <div className='relative'>
                            <input readOnly className='sm:w-[300px] sm:placeholder:visible placeholder:invisible w-10 px-4 py-1 shadow-md bg-slate-100 focus:ring-2 focus:shadow-lg transition-all duration-500 outline-none rounded-xl sm:rounded' type="text" autoComplete='off' placeholder='Search a restaurant' />
                            <FontAwesomeIcon className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer' icon={searchIcon} />
                            </div>
                            <span data-tooltip="Vous pouvez rechercher un établissement selon plusieurs critères :Son nom, sa commune, son code SIRET, son numéro d'agrément" className="before:shadow-lg before:italic before:border before:border-slate-300 before:px-5 before:py-2 text-sm relative before:content-[attr(data-tooltip)] before:absolute before:bg-slate-200 before:z-10 before:w-[230px]
                             before:top-[135%] before:-right-2 before:rounded-lg 
                             after:content-[''] after:absolute after:border-b-[6px] after:border-slate-200
                             after:border-l-[4px] after:border-l-transparent after:border-r-[4px] after:border-r-transparent after:top-[110%] after:z-20 after:right-[1px] after:scale-0 before:scale-0 hover:after:scale-100 hover:before:scale-100 before:transition after:transition after:duration-700 before:duration-700 before:origin-top-right after:origin-bottom-right"><FontAwesomeIcon icon={questionMarkIcon} /></span> 
                        </div>

                        <div className='flex justify-center items-center gap-3 sm:gap-5 lg:gap-7 text-xs sm:text-sm'>
                            <button className='md:px-4 sm:px-3 px-2 py-1 flex justify-center items-center gap-2 rounded-md hover:bg-slate-300 transition duration-500'>Les plus récents <FontAwesomeIcon className='text-xs' icon={arrowUpIcon} /></button>
                            <button className='md:px-4 sm:px-3 px-2 py-1 flex justify-center items-center gap-2 rounded-md hover:bg-slate-300 transition duration-500'>Les mieux notés <FontAwesomeIcon className='text-xs' icon={arrowDownIcon} /></button>
                        </div>

                        <div className='w-full grid xl:grid-cols-2 grid-cols-1 xl:gap-x-3 gap-y-5 sm:text-base text-xs mb-1'>
                        <div className='relative w-full xl:w-[380px] bg-slate-200 rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
                            <div className='absolute top-3 right-3'>
                                <p className='text-xs sm:text-sm font-semibold italic'>Très satisfaisant</p>
                                <div className='w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -translate-y-1/2 -left-4'></div>

                            </div>
                            <div className='flex flex-col justify-center items-start gap-5'>
                                <div className='flex flex-col justify-center items-start gap-3'>
                                <h2 className='font-bold text-blue-900 text-base sm:text-lg xl:w-[175px] xl:truncate xs:w-fit w-[200px]'>MERCURE CITE EPISCOPALE D'ALBI</h2>
                                <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-blue-900'>Restaurants</p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
                                    <p>2 PL GENERAL LECLERC</p>
                                    <p>38500</p>
                                    <p>Voiron</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full xl:w-[380px] bg-slate-200 rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
                            <div className='absolute top-3 right-3'>
                                <p className='text-xs sm:text-sm font-semibold italic'>Très satisfaisant</p>
                                <div className='w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -translate-y-1/2 -left-4'></div>

                            </div>
                            <div className='flex flex-col justify-center items-start gap-5'>
                                <div className='flex flex-col justify-center items-start gap-3'>
                                <h2 className='font-bold text-blue-900 text-base sm:text-lg lg:w-[175px] lg:truncate xs:w-fit w-[200px]'>MERCURE CITE EPISCOPALE D'ALBI</h2>
                                <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-blue-900'>Restaurants</p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
                                    <p>2 PL GENERAL LECLERC</p>
                                    <p>38500</p>
                                    <p>Voiron</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full xl:w-[380px] bg-slate-200 rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
                            <div className='absolute top-3 right-3'>
                                <p className='text-xs sm:text-sm font-semibold italic'>Très satisfaisant</p>
                                <div className='w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -translate-y-1/2 -left-4'></div>

                            </div>
                            <div className='flex flex-col justify-center items-start gap-5'>
                                <div className='flex flex-col justify-center items-start gap-3'>
                                <h2 className='font-bold text-blue-900 text-base sm:text-lg lg:w-[175px] lg:truncate xs:w-fit w-[200px]'>MERCURE CITE EPISCOPALE D'ALBI</h2>
                                <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-blue-900'>Restaurants</p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
                                    <p>2 PL GENERAL LECLERC</p>
                                    <p>38500</p>
                                    <p>Voiron</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full xl:w-[380px] bg-slate-200 rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
                            <div className='absolute top-3 right-3'>
                                <p className='text-xs sm:text-sm font-semibold italic'>Très satisfaisant</p>
                                <div className='w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -translate-y-1/2 -left-4'></div>

                            </div>
                            <div className='flex flex-col justify-center items-start gap-5'>
                                <div className='flex flex-col justify-center items-start gap-3'>
                                <h2 className='font-bold text-blue-900 text-base sm:text-lg lg:w-[175px] lg:truncate xs:w-fit w-[200px]'>MERCURE CITE EPISCOPALE D'ALBI</h2>
                                <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-blue-900'>Restaurants</p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
                                    <p>2 PL GENERAL LECLERC</p>
                                    <p>38500</p>
                                    <p>Voiron</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full xl:w-[380px] bg-slate-200 rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
                            <div className='absolute top-3 right-3'>
                                <p className='text-xs sm:text-sm font-semibold italic'>Très satisfaisant</p>
                                <div className='w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -translate-y-1/2 -left-4'></div>

                            </div>
                            <div className='flex flex-col justify-center items-start gap-5'>
                                <div className='flex flex-col justify-center items-start gap-3'>
                                <h2 className='font-bold text-blue-900 text-base sm:text-lg lg:w-[175px] lg:truncate xs:w-fit w-[200px]'>MERCURE CITE EPISCOPALE D'ALBI</h2>
                                <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-blue-900'>Restaurants</p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
                                    <p>2 PL GENERAL LECLERC</p>
                                    <p>38500</p>
                                    <p>Voiron</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full xl:w-[380px] bg-slate-200 rounded-md xl:rounded-lg p-6 overflow-hidden hover:ring-2 hover:opacity-85 transition-all duration-500 cursor-pointer'>
                            <div className='absolute top-3 right-3'>
                                <p className='text-xs sm:text-sm font-semibold italic'>Très satisfaisant</p>
                                <div className='w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -translate-y-1/2 -left-4'></div>

                            </div>
                            <div className='flex flex-col justify-center items-start gap-5'>
                                <div className='flex flex-col justify-center items-start gap-3'>
                                <h2 className='font-bold text-blue-900 text-base sm:text-lg lg:w-[175px] lg:truncate xs:w-fit w-[200px]'>MERCURE CITE EPISCOPALE D'ALBI</h2>
                                <p className='px-2 text-white sm:text-sm py-1 rounded-lg bg-blue-900'>Restaurants</p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-1 sm:text-sm'>
                                    <p>2 PL GENERAL LECLERC</p>
                                    <p>38500</p>
                                    <p>Voiron</p>
                                </div>
                            </div>
                        </div>
                        
         
                        
      
                        
                       
                        </div>
                        <div className='hidden absolute bottom-0 w-full bg-neutral-100'>
                            <header className='relative flex justify-between items-center bg-indigo-200 px-4' >
                                <h2 className='text-lg text-blue-900 font-semibold'>Restaurants</h2>
                                <img className='w-1/3' src={Restaurant} alt="" />
                                <button className='absolute top-2 left-1/2 -translate-x-1/2 hover:opacity-65 transition duration-300' ><FontAwesomeIcon icon={closeIcon}/></button>
                          
                            </header>
                            
                                <main className='flex justify-between items-center px-4 py-3 text-sm'>
                                <div className='flex flex-col justify-center items-start gap-5'> 
                                    <div className='flex flex-col justify-center items-start gap-1'>
                                    <p className='mb-2 bg-green-700 text-white px-2 py-1 rounded-full shadow-md'>Restaurants</p>
                                    <h4 className='text-xs'>LE CAMPING EN FAMILLE</h4>
                                    <p className='text-xs'>3 RUE DES CORBIEREES</p>
                                    <p className='text-xs'>66470 Sainte-Marie-la-Mer</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-start gap-1 text-xs'>
                                        <p><strong>Date de l'inspection : </strong>18 juil. 2024</p>
                                        <p><strong>Niveau d'hygiène : </strong>Très satisfaisant</p>
                                    </div>
                                  
                                </div>
                                <div className='flex flex-col justify-center items-center gap-5'>
                                    <div className='relative'>
                                        <p className='p-5 border border-indigo-200 hover:border-2 hover:scale-105 transition-all duration-700 rounded-lg'>Très satisfaisant</p>
                                        <div className='h-2 w-2 bg-green-400 rounded-full absolute top-2 right-2'></div>
                                    </div>
                                    <button className='text-xs bg-blue-900 text-white px-3 py-1 rounded-xl shadow-xl hover:shadow-2xl active:scale-95 hover:bg-blue-600 hover:text-slate-200 transition-all duration-700 '>Imprimer cette affichette</button>
                                </div>
                                </main>
                            </div>



                            <div className='hidden flex flex-col justify-center items-start gap-2 w-1/2 bg-neutral-100 absolute top-0 left-0 rounded-md text-sm '>
                                <header className='h-10 bg-indigo-200 flex justify-center items-center w-full rounded-t-md'>
                                    <button className='hover:opacity-65 transition duration-300 w-full h-full'> <FontAwesomeIcon icon={closeIcon} />
                                    </button>
                                </header>
                                <main className='flex flex-col justify-center items-start gap-3 p-5 border-dashed border-2 border-indigo-200 m-4 rounded'>
                                    <div className='flex justify-center items-center gap-3'>
                                        <img className='w-1/5 shadow' src={Logo2} alt="Logo ministère de l'agriculture et de l'alimentation" />
                                        <h2>alimconfiance.gouv.fr</h2>
                                        <button className='bg-blue-900 text-white px-3 py-1 rounded active:scale-95 transition duration-500 shadow-lg'>Imprimer <FontAwesomeIcon icon={printerIcon} /></button>
                                    </div>
                                    <div className='flex flex-col justify-center items-start gap-4'>
                                        <div className='flex flex-col justify-center items-start gap-1'>
                                            <h3 className='text-base text-blue-900 font-semibold'>LES ARCHERS</h3>
                                            <p className='bg-blue-900 px-3 py-1 text-white rounded-full text-xs shadow-md'>Restaurants</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-start gap-1'>
                                            <p>2 PL GENERAL LECLERC</p>
                                            <p>38500 Voiron</p>
                                        </div>
                                    </div>
                                    <hr className='text-slate-500 w-1/3 rounded-full' />
                                    <div className='flex flex-col justify-center items-start gap-1'>
                                        <p><strong>Date de l'inspection : </strong> 07 févr.2024</p>
                                        <p className='italic underline'>Validité 1 an</p>
                                    </div>
                                    <div className='relative max-w-full mx-auto mt-5'>
                                        <p className='text-xl px-12 py-5 border border-indigo-200 hover:border-2 hover:scale-105 hover:shadow-lg transition-all duration-700 rounded-lg shadow-md'>Très satisfaisant</p>
                                        <div className='h-2 w-2 rounded-full absolute bg-green-400 top-2 right-2'>

                                        </div>
                                    </div>
                                </main>
                            </div>

                        </div>
                    
               
            </main>


            <footer className='h-24 mt-16 flex justify-center items-center border-t-blue-900 border bg-gradient-to-bl from-55% from-transparent to-100% to-indigo-200'>
                <div className='max-w-4xl mx-auto w-full flex lg:justify-between justify-around items-center'>
                <div className='flex justify-center items-center gap-2 md:gap-5 h-full w-1/2 cursor-pointer hover:bg-indigo-100 rounded-md py-3 px-4 transition duration-500'>
                <img className='w-[13%]' src={Logo1} alt="Logo république francaise" />
                <img className='w-[65%]' src={LogoAlimConfiance} alt="Logo alimconfiance" />
                </div>
                <p className=' text-center  text-xs sm:text-sm leading-5'>© 2024 by AlimConfiance. <br />  All right reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default App
