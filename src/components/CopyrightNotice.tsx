interface CopyrightNoticeProps {
    className?: string
}

export default function CopyrightNotice({className}: CopyrightNoticeProps) {
    return <p className={'dark:font-semibold text-center  text-xs sm:text-sm leading-5 ' + className}>© {new Date().getFullYear()} by AlimConfiance. <br />  All right reserved.</p>
}
