import FooterLayout from "./components/footer/FooterLayout"
import HeaderLayout from "./components/header/HeaderLayout"
import MainLayout from "./components/main/main-layout/MainLayout"
import SideMenu from "./components/side-menu/SideMenu"
import { useGlobalContext } from "./contexts/GlobalContext"

function App() {
    const {sideBarContent: {sideBarBtns, sideBarLis}} = useGlobalContext()

 
    return (
        <>
        {<SideMenu liList={sideBarLis} btnList={sideBarBtns} /> /* here we dont unmount according to sidebar state because of the transition of the sidebar, we could use framer motion*/}
        <HeaderLayout />
        <MainLayout />
        <FooterLayout />
        </>
    )
}

export default App
