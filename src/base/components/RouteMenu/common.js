import {createContext, useContext} from "react";
import _ from "lodash";
import {generateUniqueId} from "@common/utils";

export function getKey(item){
    return item.path || item.label
}

export const MenuContext = createContext({})

export const MenuProvider = ({value, children}) => {
    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export const useMenu = () => useContext(MenuContext)

export function formatItems(items){
    formatCore(items,[])
    return items;

    function formatCore(list,parentPaths){
        _.forEach(list, x => {
            x.path = x.path || generateUniqueId();
            x.pathList = [...parentPaths, x.path]
            if(_.isArray(x.children)) formatCore(x.children, x.pathList)
        })
    }
}