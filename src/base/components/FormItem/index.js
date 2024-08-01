import React from 'react';
import './index.css'
import {Input} from "antd";
import clsx from "clsx";
import {execute} from "@common/utils";

export default function FormItem({label,required,component=Input,style,labelStyle,onValue,...props}) {

    const Component = component
    return <div className={'b-form-item'}>
        <span className={clsx('b-form-item-label', {required})}
              style={{width:120,textAlign: 'right',...labelStyle}}>{label}</span>
        <Component style={{width:180,...style}}
                   onChange={(x,...rest)=>{
                       const value = component === Input ? x.target.value : x
                       execute(onValue, value, ...rest)
                   }}
                   {...props}/>
    </div>
}