import Logo1 from '../../../assets/images/Logo1.png'
import LogoAlimConfiance from '../../../assets/images/LogoAlimConfiance.svg'
import scrollToTop from '../../../utils-lib/scrollToTop'
import CopyrightNotice, {type CopyrightNoticeProps } from '../../ui/CopyrightNotice'

export interface FooterMainProps extends Omit<CopyrightNoticeProps, 'className'> {
    logo1?: string,
    logo2?: string
}
export default function FooterMain({logo1 = Logo1, logo2 = LogoAlimConfiance, ...rest}: FooterMainProps) {
    return    <div className='max-w-4xl mx-auto w-full flex lg:justify-between justify-around items-center'>
    <div onClick={scrollToTop} className='flex justify-center items-center gap-2 md:gap-5 h-full w-1/2 cursor-pointer hover:bg-indigo rounded-md py-3 px-4 transition duration-500'>
    {logo1 && <img className='w-[20%] sm:w-[13%]' src={logo1} alt="Logo république francaise" />}
    <img className='w-[85%] sm:w-[65%]' src={logo2} alt="Logo alimconfiance" />
    </div>
    <CopyrightNotice {...rest} />
    </div>
}