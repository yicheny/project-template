import React, {useState} from 'react';
import {Input, InputNumber, Select, Switch} from 'antd';
import ProxyTable from "../../../base/components/ProxyTable";
import {FormItem} from "@base/components";

const data = [
    { key: 1, name: 'A', age: 11, gender: 'male', address:'' },
    { key: 2, name: 'B', age: 99, gender: 'female', address: '' },
];

const columns = [
    {
        title:"ID",
        dataIndex:"key"
    },
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        component_option: {
            component: InputNumber,
        },
    },
    {
        title: '性别',
        dataIndex: 'gender',
        component_option: {
            component: Select,
            props: {
                placeholder: '请选择……',
                options: [
                    { value: 'male', label: '男' },
                    { value: 'female', label: '女' },
                    { value: 'other', label: '其他', disabled: true },
                ],
                onChange: console.log
            },
        },
    },
    {
        title: '住址',
        dataIndex: 'address',
        component_option: {
            component: Input,
            props: {
                placeholder: '请输入……',
            },
        },
    },
];


export default function TestEditTable(props) {
    const [editable,setEditable] = useState()
    return (<div>
            {/*<Switch checked={editable} onClick={setEditable}/>*/}
            <FormItem label={'编辑'}
                      component={Switch}
                      checked={editable}
                      onClick={setEditable}
                      style={{width:40}}
            />
            <ProxyTable editable={editable} dataSource={data} columns={columns} />
        </div>);
}