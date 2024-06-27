import {useCallback, useState} from "react";
import {store} from "@base/dom/store";
import {useAutoRefresh} from "@common/hooks";

export function useStoreData(key){
    const [data,setData] = useState();
    // const [loading,setLoading] = useState()

    const doFetch = useCallback(()=>{
        setData(store.read(key))
    },[key])

    useAutoRefresh(doFetch)

    return {data,doFetch}
}