import HeaderMain from "./HeaderMain";
import HeaderSideMenu from "../side-menu/SideMenu";
export default function HeaderLayout() {

    return (
        <header className='animate-slide-in opacity-0 -translate-y-full shadow-lg shadow-secondary h-24 flex justify-center items-center mb-16 bg-gradient-to-t from-transparent from-55% to-indigo to-100%'>
        <HeaderMain />
       <HeaderSideMenu />
    </header>
    )
}