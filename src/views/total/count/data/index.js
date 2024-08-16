import React, {useCallback} from 'react';
import _ from 'lodash'
import {Button, message, Table, Tooltip, Upload} from "antd";
import {MinusSquareOutlined, UploadOutlined} from "@ant-design/icons";
import {execute, tryExecute} from "@common/utils";
import {useOpenInfo, usePostM} from "@common/hooks";
import {useQuery} from "@common/bizHooks";
import {RemoveModal} from "@base/components";

export default function TotalCountData(props) {
    const {data,query} = useQuery('/total/count/query')
    const { value:info, checkTypes, setInfo, close} = useOpenInfo()

    return (
        <div>
            <div style={{marginBottom:8}}>
                <Upload beforeUpload={useLoadJSON(query)} showUploadList={false}>
                    <Button icon={<UploadOutlined />} type={'primary'}>导入数据</Button>
                </Upload>
            </div>
            <Table dataSource={_.orderBy(data,'year')} columns={useColumns(setInfo)} pagination={false}/>
            {checkTypes(['del']) && <RemoveModal close={close} info={info} refresh={query}/>}
        </div>
    );
}

function useLoadJSON(fetchData){
    const {doFetch} = usePostM()
    return useCallback((file)=> {
        try {
            handleFileRead(file);
            return false; // Prevent automatic upload
        } catch (err) {
            message.error(err.message);
        }

        function handleFileRead(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                tryExecute(async ()=>{
                    const year = extractYear(file.name);
                    await doFetch('/total/count/upsert',{
                        year,
                        id:year,
                        text:e.target.result
                    })
                    message.success("导入成功！")
                    execute(fetchData)
                })
            }
            reader.readAsText(file);
        }

        function extractYear(str) {
            const regex = /^(\d{4})-count\.txt$/;
            const match = str.match(regex);

            if (match) {
                return match[1]; // 返回捕获的4位数字
            } else {
                throw new Error("String does not match the required format");
            }
        }
    },[fetchData,doFetch])
}

function useColumns(setInfo){
    return [
        {
            title:"年份",
            dataIndex:"year"
        },
        {
            title: "操作",
            dataIndex: "_operation",
            render:(v,o)=>{
                return <>
                    <Tooltip title={'删除'}>
                        <Button type="link" onClick={()=> setInfo('del', {text:o.year, url:"/total/count/del",params:{id:o.id}})}>
                            <MinusSquareOutlined style={{fontSize:18}}/>
                        </Button>
                    </Tooltip>
                </>
            }
        }
    ]
}