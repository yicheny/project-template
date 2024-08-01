import {useAutoRefresh, usePostM} from "@common/hooks";
import {useCallback} from "react";
import {tryExecute} from "@common/utils";

export function useQuery(url,params){
    const {data,doFetch} = usePostM()

    const query = useCallback(() => {
        tryExecute(async () => {
            const data = await doFetch(url,params)
            // console.log('useQuery', url,  data)
        })
    }, [doFetch, url, params]);

    useAutoRefresh(query)

    return {data,query}
}