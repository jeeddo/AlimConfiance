import MainLayout from './components/layouts/MainLayout'
import SideMenu from './components/side-menu/SideMenu'
import { useGlobalContext } from './contexts/GlobalContext'
import HomeLayout from './pages/Home/components/home-layout/HomeLayout'

function App() {
  const {
    sideBarContent: { sideBarBtns, sideBarLis }
  } = useGlobalContext()

  return (
    <>
      {
        <SideMenu
          liList={sideBarLis}
          btnList={sideBarBtns}
        /> /* here we dont unmount according to sidebar state because of the transition of the sidebar, we could use framer motion*/
      }
      <MainLayout>
        <HomeLayout />
      </MainLayout>
    </>
  )
}

export default App
