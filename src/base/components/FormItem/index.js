import React from 'react';
import './index.css'

export default function FormItem({label,component,style,...props}) {
    const Component = component
    return <div className={'b-form-item'}>
        <span className={'b-form-item-label'}>{label}</span>
        <Component style={{width:180,...style}} {...props}/>
    </div>
}