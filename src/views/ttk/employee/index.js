import React, {useCallback, useMemo} from 'react';
import {usePostM} from "@common/hooks/usePostM";
import {tryExecute} from "@common/utils";
import {Button, Table, Tag} from "antd";
import {useAutoRefresh, useOpenInfo} from "@common/hooks";
import EditModal from "./Edit";

export default function TTKEmployee(props) {
    const {data,refreshTable} = useDataSource()

    // const { value:info, checkTypes, setInfo, close} = useOpenInfo({type:'add', title:"新增", url:"/ttk/employee/add"})
    const { value:info, checkTypes, setInfo, close} = useOpenInfo()

    return (
        <div>
            <div style={{marginBottom: 12}}>
                <Button onClick={() => setInfo('add', { title:"新增", url:"/ttk/employee/add" })}>新增</Button>
            </div>
            <Table dataSource={data} columns={useColumns()} pagination={false}/>
            {checkTypes(['add','edit']) && <EditModal close={close} info={info} refresh={refreshTable}/>}
        </div>
    );
}

function useDataSource(){
    const {data,doFetch} = usePostM()
    const refreshTable = useCallback(() => {
        tryExecute(async ()=>{
            const data = await doFetch('/ttk/employee/query',{})
            console.log('data', data)
        })
    }, [doFetch]);

    useAutoRefresh(refreshTable)

    return {data,refreshTable}
}

function useColumns() {
    return useMemo(() => {
        return [
            {
                title: "序号",
                dataIndex: '_no',
                key: '_no',
                render:(v,o,i)=>i+1,
            },
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Point',
                dataIndex: 'point',
                key: 'point',
            },
            {
                title: 'User Count',
                dataIndex: 'userCount',
                key: 'userCount',
            },
            {
                title: 'Yield',
                dataIndex: 'yield',
                key: 'yield',
            },
            {
                title: 'Tags',
                dataIndex: 'tags',
                key: 'tags',
                render: tags => (
                    <>
                        {tags.map((tag,index) => {
                            const colors = ['magenta', 'red', 'orange','green', 'blue']
                            return <Tag color={colors[index]} key={tag}>
                                {tag}
                            </Tag>
                        })}
                    </>
                ),
            },
        ]
    },[])
}