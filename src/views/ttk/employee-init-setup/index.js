import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styls from './index.module.scss'
import _ from 'lodash'
import {FormItem} from "@base/components";
import clsx from "clsx";
import {Button, message, Select} from "antd";
import {useQuery, useSelectNodes} from "@common/bizHooks";
import {formatPercentage, isEm, tryExecute} from "@common/utils";
import {usePostM} from "@common/hooks";

export default function TTKEmployeeInitSetup(props) {
    const {data} = useQuery('/ttk/employee/query')
    const [currentUser,setCurrentUser] = useState()
    const {handleSave} = useSave(currentUser)
    const {selectNodes,handleSelect,setSelectNodes} = useSelectNodes(5)

    useEffect(() => {
        if(currentUser) setSelectNodes(currentUser.employeeStack)
    }, [currentUser, setSelectNodes]);

    return (<div className={styls.view}>
        <div style={{marginTop:12, marginLeft:-60}}>
            <FormItem label={'User'} component={Select} options={useFactionOpts()} onValue={(v,o)=>setCurrentUser(o.source)}/>
            <Button type={'primary'} onClick={()=>handleSave(selectNodes)}>保存</Button>
        </div>
        <div className={styls.cardList}>
            {
                _.map(data,(x,i)=>{
                    return <EmployeeCard data={x} key={i} onClick={handleSelect} selectNodes={selectNodes}/>
                })
            }
        </div>
    </div>);
}

const FormLabel = (props) => <FormItem component={Text} labelStyle={{width:160}} {...props}/>

function EmployeeCard({data={},onClick,selectNodes}){
    return <div className={clsx(styls.employeeCard, {[styls.active]:selectNodes.includes(data.id)})} onClick={()=>onClick(data.id)}>
        {/*{JSON.stringify(data)}*/}
        <FormLabel label={'名称'}>{data.name}</FormLabel>
        <FormLabel label={'点数'}>{data.point}</FormLabel>
        <FormLabel label={'使用次数'}>{data.userCount}</FormLabel>
        <FormLabel label={'收益率'}>{formatPercentage(data.yield, 2)}</FormLabel>
        {/*<FormLabel label={'特性'}>{data.name}</FormLabel>*/}
    </div>
}

function Text(props){
    return <span {...props}/>
}

function useFactionOpts(){
    const {data} = useQuery('/ttk/user/query')

    return useMemo(()=>{
        return _.map(data, x=>({label:x.name,value:x.id,source:x}))
    },[data])
}

function useSave(currentUser){
    const {doFetch} = usePostM()

    const handleSave = useCallback((employeeStack)=>{
        tryExecute(async ()=>{
            console.log('currentUser', currentUser)
            if(isEm(currentUser)) throw new Error("请选择User")
            // const params = {...currentUser, employeeStack}
            currentUser.employeeStack = employeeStack
            await doFetch('/ttk/user/update', currentUser)
            message.success("保存成功！")
        })
    },[currentUser, doFetch])

    return {handleSave}
}