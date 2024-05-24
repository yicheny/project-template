import {useCallback, useState} from "react";

export function useOpenInfo(defaultValue={}) {
    const [value,setValue] = useState(defaultValue)

    const close = useCallback(()=>{
        setValue({})
    },[])

    const setInfo = useCallback((type,info)=>{
        setValue({type,...info})
    },[])

    const checkType = useCallback((type)=>value?.type === type,[value])

    return {
        value,
        close,
        setInfo,
        checkType
    }
}