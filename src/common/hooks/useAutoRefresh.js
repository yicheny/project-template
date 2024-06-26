import {useEffect} from "react";

export function useAutoRefresh(refresh){
    useEffect(() => {
        refresh()
    }, [refresh]);
}