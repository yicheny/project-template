import {useCallback, useState} from "react";

export function useParams(initData={}){
    // console.log('initData', initData)
    const [params,setParams] = useState(initData)

    const dispatch = useCallback((bind,value)=>{
        setParams(x => ({...x, [bind]:value}))
    },[])

    const dispatchMix = useCallback((nextValue)=>{
        setParams(x => ({...x, ...nextValue}))

    },[])

    return {params,dispatch,dispatchMix}
}