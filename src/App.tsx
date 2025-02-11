import { useEffect, useState } from "react"
import FooterLayout from "./components/footer/FooterLayout"
import HeaderLayout from "./components/header/HeaderLayout"
import MainLayout from "./components/main/main-layout/MainLayout"
import { MAX_MOBILE_DEVICES_WIDTH } from "./utils/constants"
import SideMenu from "./components/side-menu/SideMenu"

function App() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(( ) => {
        const handleResize = () => {
            if (window.innerWidth <= MAX_MOBILE_DEVICES_WIDTH) setIsMobile(true)
            else setIsMobile(false)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    return (
        <>
        <SideMenu />
        <HeaderLayout />
        <MainLayout isMobile={isMobile} />
        <FooterLayout />
        </>
    )
}

export default App
