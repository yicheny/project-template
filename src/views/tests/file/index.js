import React, {useCallback, useState} from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactJson from "react-json-view";
import {useAutoRefresh} from "@common/hooks";
import {file, store} from "@base/dom";

const STORE_KEYS = [
    'init_test_object',
    'init_test_array',
    'init_test_mix'
]

export default function TestFile(props) {
    const {showData,fetchData} = useShowData();

    return (
        <div>
            <div>
                <Upload beforeUpload={useLoadJSON(fetchData)} showUploadList={false}>
                    <Button icon={<UploadOutlined />} type={'primary'}>导入数据</Button>
                </Upload>
                <Button onClick={()=>{
                    file.exportJSONToFile(JSON.stringify(showData), 'showData.json')
                }} style={{marginLeft:4}}>导出文件</Button>
            </div>
            <div className={'n-show'}>
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

function useShowData(){
    const [showData,setShowData] = useState()

    const fetchData = useCallback(()=>{
        setShowData(store.readObj(STORE_KEYS))
    },[])

    useAutoRefresh(fetchData)

    return {showData,fetchData}
}

function useLoadJSON(fetchData){
    return useCallback((file)=> {
        if (file.type !== 'application/json') {
            message.error('只可以导入JSON文件!');
            return Upload.LIST_IGNORE;
        }
        handleFileRead(file);
        return false; // Prevent automatic upload

        function handleFileRead(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const json = JSON.parse(e.target.result);
                    console.log('json', json)
                    store.importObj(json)
                    fetchData()
                } catch (err) {
                    message.error(err.message);
                }
            }
            reader.readAsText(file);
        }
    },[fetchData])
}