import React, {useState} from 'react';
import {Button} from "antd";
import {dataLogger} from "@base/logger/db/dataLogger";
import {FormItem} from "@base/components";

export default function TestDataLogger(props) {
    const [data,setData] = useState({})
    return (<div>
        <div>
            <FormItem label={'姓名'} onChange={e=>setData({...data,name:e.target.value})}/>
            <FormItem label={'住址'} onChange={e=>setData({...data,address:e.target.value})}/>
        </div>
        <Button onClick={()=>{
            console.log('data', data)
            dataLogger.log('TestDemoNote', data)
        }}>提交</Button>
        <Button onClick={()=> dataLogger.exportToJson()}>导出</Button>
    </div>);
}