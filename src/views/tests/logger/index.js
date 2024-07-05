import React, {useState} from 'react';
import {Button} from "antd";
import {logger} from "@base/logger/local/logger";

export default function TestLogger(props) {
    const [count,setCount] = useState(0)
    return (<div>
        <h3>{count}</h3>
        <Button onClick={()=>setCount(count+1)}>正常</Button>
        <Button onClick={()=>{
            throw new Error('报错！')
        }}>报错</Button>
        <Button onClick={()=> logger.saveLogs()}>保存</Button>
    </div>);
}