import { useEffect, useState } from "react"
import FooterLayout from "./components/footer/FooterLayout"
import HeaderLayout from "./components/header/HeaderLayout"
import MainLayout from "./components/main/MainLayout"
import { MAX_MOBILE_DEVICES_WIDTH } from "./utils/constants"

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
        <HeaderLayout />
        <MainLayout isMobile={isMobile} />
        <FooterLayout />
        </>
    )
}

export default App
