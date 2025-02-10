import { createContext, ReactElement, useContext, useState } from "react";

const GlobalContext = createContext<{isSideBarOpen: boolean, toggleSideBar: () => void} | null>(null)

const GlobalContextProvider = ({children}: {children: ReactElement}) => {
    const [isSideBarOpen, setShowSideBar] = useState(false)

    const toggleSideBar = () => {
        setShowSideBar(prevState => !prevState)
    }

    return <GlobalContext.Provider value={{isSideBarOpen, toggleSideBar}}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobalContext = () => {
    const globalContext = useContext(GlobalContext)
    if (!globalContext) throw new Error('Your are not in a GlobalContextProvider')
    return globalContext
}
export default GlobalContextProvider;