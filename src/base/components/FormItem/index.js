import React from 'react';
import './index.css'
import {Input} from "antd";

export default function FormItem({label,component=Input,style,...props}) {
    const Component = component
    return <div className={'b-form-item'}>
        <span className={'b-form-item-label'}>{label}</span>
        <Component style={{width:180,...style}} {...props}/>
    </div>
}