export interface DiscoverButtonsProps {
    setBtnState: (state: boolean) => void,
    breakPoint: string
}

export default function DiscoverButtons({setBtnState, breakPoint}: DiscoverButtonsProps) {
    return <div className={`w-full flex ${breakPoint}:flex-row flex-col justify-center items-center bg-main text-white shadow shadow-main hover:shadow hover:shadow-main transition duration-500 rounded-lg ${breakPoint}:h-[64px] h-[80px]`}>
       
    <button onClick={() => setBtnState(false)} className="w-full ${breakPointDiscoverButtons}:w-fit px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-b-none ${breakPointDiscoverButtons}:rounded-l-lg ${breakPoint}:rounded-r-none rounded-lg h-full">Découvrir</button>
   
     <button onClick={() => setBtnState(true)} className=" px-5 py-2 active:scale-95 hover:text-primary hover:bg-blue-600 transition duration-500 rounded-t-none ${breakPoint}:rounded-r-lg ${breakPoint}:rounded-l-none rounded-lg w-full ${breakPoint}:w-max h-full">Trouver un restaurant</button>
  
</div>
}