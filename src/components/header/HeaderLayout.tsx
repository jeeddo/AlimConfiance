import { ClassName } from "../../types/common";
import { cn } from "../../utils-lib/cn";
import HeaderMain, { HeaderMainProps } from "./HeaderMain";

interface HeaderLayoutProps extends HeaderMainProps, ClassName {}
export default function HeaderLayout({className, logo}: HeaderLayoutProps) {

    return (
        <header className={cn('animate-slide-in opacity-0 -translate-y-full shadow-lg shadow-secondary h-24 flex justify-center items-center mb-16 bg-gradient-to-t from-transparent from-55% to-indigo to-100%', className)}>
        <HeaderMain logo={logo} />
    </header>
    )
}