import React, {useEffect, useMemo} from 'react';
import _ from 'lodash';
import {useQuery} from "@common/bizHooks";
import {FormItem} from "@base/components";
import {Select} from "antd";
import {createCountTotal} from "./tools/CountTotal";

export function TotalCountInfo(props) {
    const {setData} = useInfo()
    const yearOptions = useYearOptions()

    return (<div>
            <FormItem label={'年份'} labelStyle={{width:'48px'}} component={Select} options={yearOptions} onValue={setData}/>
        </div>);
}

function useYearOptions(){
    const {data} = useQuery('/total/count/query');

    return useMemo(()=>{
        return _.map(data, x=>{
            return {
                label: x.year,
                value: x.text,
            }
        })
    },[data])
}

function useInfo(){
    const [data, setData] = React.useState();
    const [info, setInfo] = React.useState();

    useEffect(() => {
        if(!data) return ;
        console.log('data', data)
        // const nextInfo = createCountTotal(data.text, data.year,)
        // console.log('nextInfo', nextInfo)
    }, [data]);

    return {
        setData
    }
}