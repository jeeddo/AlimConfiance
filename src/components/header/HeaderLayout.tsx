import HeaderMain from "./HeaderMain";
import HeaderSideMenu from "./HeaderSideMenu";
import { useState } from "react";
export default function HeaderLayout() {
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <header className='animate-slide-in opacity-0 -translate-y-full shadow-lg shadow-secondary h-24 flex justify-center items-center mb-16 bg-gradient-to-t from-transparent from-55% to-indigo to-100%'>
        <HeaderMain setShowSideBar={setShowSideBar} />
       <HeaderSideMenu setShowSideBar={setShowSideBar} isSideBarOpen={showSideBar} />
    </header>
    )
}