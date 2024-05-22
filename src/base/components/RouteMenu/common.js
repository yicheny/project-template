import {createContext, useContext} from "react";

export function getKey(item){
    return item.to || item.label
}

export const MenuContext = createContext({})

export const MenuProvider = ({value, children}) => {
    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export const useMenu = () => useContext(MenuContext)