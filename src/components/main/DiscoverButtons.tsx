export default function DiscoverButtons({setBtnSate}: {setBtnSate: (state: boolean) => void}) {
    return <div className='w-full flex lg:flex-row flex-col justify-center items-center bg-main text-white shadow shadow-main hover:shadow hover:shadow-main transition duration-500 rounded-lg lg:h-[64px] h-[80px]'>
       
    <button onClick={() => setBtnSate(false)} className="w-full lg:w-fit px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-b-none lg:rounded-l-lg lg:rounded-r-none rounded-lg h-full">Découvrir</button>
   
     <button onClick={() => setBtnSate(true)} className=" px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-t-none lg:rounded-r-lg lg:rounded-l-none rounded-lg w-full lg:w-max h-full">Trouver un restaurant</button>
  
</div>
}