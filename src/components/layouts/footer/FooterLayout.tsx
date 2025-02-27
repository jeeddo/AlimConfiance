import { ClassName } from "../../../types/common";
import { cn } from "../../../utils-lib/cn";
import FooterMain, {type FooterMainProps } from "./FooterMain";

interface FooterLayoutProps extends FooterMainProps, ClassName {}
export default function FooterLayout({className, ...props}: FooterLayoutProps) {
    return      <footer className={cn('h-24 mt-16 flex justify-center items-center border-t-main border-b-0 border-l-0 border-r-0 border bg-gradient-to-bl from-55% from-transparent to-100% to-indigo', className)}>
 
    <FooterMain {...props} />
</footer>
}