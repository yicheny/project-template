import React, {useCallback, useState} from 'react';
import {Button, message} from "antd";
import {store} from "../../base/dom/store";
import _ from 'lodash'
import ReactJson from "react-json-view";
import stylus from './index.module.scss'
import {useAutoRefresh} from "../../common/hooks";
import {file} from "../../base/dom/file";

const STORE_KEYS = [
    'init_test_object',
    'init_test_array',
    'init_test_mix'
]

export default function TestStore(props) {
    const {showData,fetchData} = useShowData();

    return (
        <div>
            <div>
                <Button type={'primary'} onClick={useInitData(fetchData)}>初始化</Button>
                <Button type={'primary'} onClick={useInitData2(fetchData)} style={{marginLeft:4}}>初始化2</Button>
                <Button onClick={useClear(fetchData)} style={{marginLeft:4}}>清空数据</Button>
            </div>
            <div className={stylus.show}>
                <ReactJson src={showData}
                           collapsed={false}
                           name={false}
                           enableClipboard={true}
                           displayDataTypes={false}
                           displayObjectSize={false}/>
            </div>
        </div>
    );
}

function useInitData(fetchData){
    return useCallback(()=>{
        const mockData = [
            ['init_test_object', { a:1,b:2 }],
            ['init_test_array',[ 1,2,3 ]],
            ['init_test_mix',{ title:"showData", data:[ { type:0 }, { type:1 } ] }]
        ]

        store.importList(mockData)
        fetchData()
        message.success("初始化成功！")
    },[fetchData])
}

function useInitData2(fetchData){
    return useCallback(()=>{
        const mockData = {
            "init_test_object": {
                "a": 88,
                "b": 99
            },
            "init_test_array": [
                2,
                4,
                6
            ],
            "init_test_mix": {
                "title": "showData1",
                "data": [
                    {
                        "type": 0
                    },
                    {
                        "type": 1
                    }
                ]
            }
        }

        store.importObj(mockData)
        fetchData()
        message.success("初始化2成功！")
    },[fetchData])
}

function useShowData(){
    const [showData,setShowData] = useState()

    const fetchData = useCallback(()=>{
        setShowData(store.readObj(STORE_KEYS))
    },[])

    useAutoRefresh(fetchData)

    return {showData,fetchData}
}

function useClear(fetchData){
    return useCallback(()=>{
        store.removeList(STORE_KEYS)
        fetchData()
        message.success("清空成功！")
    },[fetchData])
}