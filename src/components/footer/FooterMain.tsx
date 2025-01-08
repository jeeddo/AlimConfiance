import Logo1 from '../../assets/images/Logo1.png'
import LogoAlimConfiance from '../../assets/images/LogoAlimConfiance.svg'


export default function FooterMain() {
    return    <div className='max-w-4xl mx-auto w-full flex lg:justify-between justify-around items-center'>
    <div className='flex justify-center items-center gap-2 md:gap-5 h-full w-1/2 cursor-pointer hover:bg-indigo-100 rounded-md py-3 px-4 transition duration-500'>
    <img className='w-[20%] sm:w-[13%]' src={Logo1} alt="Logo république francaise" />
    <img className='w-[85%] sm:w-[65%]' src={LogoAlimConfiance} alt="Logo alimconfiance" />
    </div>
    <p className=' text-center  text-xs sm:text-sm leading-5'>© 2024 by AlimConfiance. <br />  All right reserved.</p>
    </div>
}