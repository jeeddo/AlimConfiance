export default function DiscoverButtons() {
    return <div className='w-full flex lg:flex-row flex-col justify-center items-center bg-blue-900 text-white shadow-sm shadow-blue-900 hover:shadow hover:shadow-blue-900 transition duration-500 rounded-lg lg:h-[64px] h-[80px]'>
       
    <button className="w-full lg:w-fit px-5 py-2 active:scale-95 hover:text-slate-200 hover:bg-blue-600 transition duration-500 rounded-b-none lg:rounded-l-lg lg:rounded-r-none rounded-lg h-full">Découvrir</button>
   
     <button className=" px-5 py-2 active:scale-95 hover:text-slate-200 hover:bg-blue-600 transition duration-500 rounded-t-none lg:rounded-r-lg lg:rounded-l-none rounded-lg w-full lg:w-max h-full">Trouver un restaurant</button>
  
</div>
}