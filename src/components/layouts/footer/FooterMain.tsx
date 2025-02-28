import Logo1 from '../../../assets/images/Logo1.png'
import LogoAlimConfiance from '../../../assets/images/LogoAlimConfiance.svg'
import scrollToTop from '../../../utils-lib/scrollToTop'
import CopyrightNotice, {
  type CopyrightNoticeProps
} from '../../ui/CopyrightNotice'

export interface FooterMainProps
  extends Omit<CopyrightNoticeProps, 'className'> {
  logo1?: string
  logo2?: string
}
export default function FooterMain({
  logo1 = Logo1,
  logo2 = LogoAlimConfiance,
  ...rest
}: FooterMainProps) {
  return (
    <div className='mx-auto flex w-full max-w-4xl items-center justify-around lg:justify-between'>
      <div
        onClick={scrollToTop}
        className='flex h-full w-1/2 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-3 transition duration-500 hover:bg-indigo md:gap-5'>
        {logo1 && (
          <img
            className='w-[20%] sm:w-[13%]'
            src={logo1}
            alt='Logo république francaise'
          />
        )}
        <img
          className='w-[85%] sm:w-[65%]'
          src={logo2}
          alt='Logo alimconfiance'
        />
      </div>
      <CopyrightNotice {...rest} />
    </div>
  )
}
