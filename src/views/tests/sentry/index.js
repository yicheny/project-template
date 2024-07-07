import React, {useState} from 'react';
import {Button} from "antd";

export default function TestSentry(props) {
    const [count,setCount] = useState(0)
    return (<div>
        <h3>{count}</h3>
        <Button onClick={()=>setCount(count+1)}>正常</Button>
        <Button onClick={()=>{
            throw new Error('sentry error test！')
        }}>报错</Button>
    </div>);
}