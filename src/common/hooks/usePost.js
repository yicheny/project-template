import {useState, useCallback} from "react";
import _ from 'lodash'
import axios from "axios";
import {execute} from "@common/utils";

export const usePost = curryUsePost(axios.post)

export function curryUsePost(postMethod, hooks){
    const {fetchBefore, fetchSuccess, fetchFail} = hooks || {}

    return function usePost(){
        const [data,setData] = useState()
        const [error, setError] = useState()
        const [loading,setLoading] = useState(false)

        const doFetch = useCallback((url, params={})=>{
            return new Promise((resolve,reject) => {
                execute(fetchBefore, {url, params})
                setLoading(true)
                postMethod(`/api${url}`,params).then(res=>{
                    execute(fetchSuccess, {url, res})
                    setLoading(false)

                    const response = _.get(res,'data')
                    if(response.code !== 0) return reject(response)

                    const nextData = _.get(response, 'data');
                    setData(nextData)
                    resolve(nextData)
                }).catch((error)=>{
                    execute(fetchFail, {url, error})
                    setError(error)
                    console.error(error.message)
                    // message.error(error.message)
                    reject(error)
                    setLoading(false)
                })
            })
        },[])

        return {doFetch,data,error,loading}
    }
}