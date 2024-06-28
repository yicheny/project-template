import React from 'react';
import {EditTable} from "@base/components";
import {Table} from "antd";

export default function ProxyTable({editable,...props}) {
    const Component = editable ? EditTable : Table;
    return <Component {...props}/>
}