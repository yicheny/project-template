import {useMemo} from "react";
import _ from 'lodash'
import {data} from "./data";

export function useBookOptions(){
    return useMemo(()=>{
        return _.map(data, x=> ({label:x.name,value:x.name}))
    },[])
}

export function useGetQuestions(book){
    return useMemo(()=>{
        if(!book) return []
        const target = _.find(data, x=> x.name === book)
        return _.map(target?.questions, ([question,answer]) => ({question,answer}))
    },[book])
}