import HeaderMain from "./HeaderMain";
import HeaderSideMenu from "./HeaderSideMenu";

export default function HeaderLayout() {

    return (
        <header className='shadow-lg shadow-slate-300 h-24 flex justify-center items-center mb-16 bg-gradient-to-t from-transparent from-55% to-indigo-200 to-100%'>
        <HeaderMain />
       <HeaderSideMenu />
    </header>
    )
}