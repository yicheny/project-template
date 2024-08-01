import React, {useCallback, useMemo} from 'react';
import {usePostM} from "@common/hooks/usePostM";
import {formatPercentage, tryExecute} from "@common/utils";
import {Button, Table, Tag, Tooltip} from "antd";
import {MinusSquareOutlined, ProfileOutlined} from '@ant-design/icons';
import {useAutoRefresh, useOpenInfo} from "@common/hooks";
import EditModal from "./Edit";
import _ from 'lodash'
import {RemoveModal} from "@base/components";

export default function TTKEmployee(props) {
    const {data,refreshTable} = useDataSource()

    // const { value:info, checkTypes, setInfo, close} = useOpenInfo({type:'del', text:"outer", url:"/ttk/employee/del", params: {id: '40038558_drrrz7_4'}})
    const { value:info, checkTypes, setInfo, close} = useOpenInfo()

    return (
        <div>
            <div style={{marginBottom: 12}}>
                <Button onClick={() => setInfo('add', { title:"新增", url:"/ttk/employee/add" })}>新增</Button>
            </div>
            <Table dataSource={data} columns={useColumns(setInfo)} pagination={false} size={'small'} scroll={{ y: 720 }}/>
            {checkTypes(['add','edit']) && <EditModal close={close} info={info} refresh={refreshTable}/>}
            {checkTypes(['del']) && <RemoveModal close={close} info={info} refresh={refreshTable}/>}
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

function useColumns(setInfo) {
    return useMemo(() => {
        return [
            {
                title: "序号",
                dataIndex: '_no',
                render:(v,o,i)=>i+1,
                align:"center",
                width:48,
            },
            {
                title: 'ID',
                dataIndex: 'id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Point',
                dataIndex: 'point',
            },
            {
                title: 'User Count',
                dataIndex: 'userCount',
            },
            {
                title: 'Yield',
                dataIndex: 'yield',
                render:v => formatPercentage(v, 2)
            },
            {
                title: 'Tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {_.map(tags,(tag,index) => {
                            const colors = [ 'gold', 'green', 'blue', 'purple', 'red']
                            return <Tag color={colors[index]} key={tag}>
                                {tag}
                            </Tag>
                        })}
                    </>
                ),
            },
            {
                title:"操作项",
                dataIndex: "_operation",
                 align:"center",
                render:(v,o)=><>
                    <Tooltip title={'编辑'}>
                        <Button type="link" onClick={()=> setInfo('edit', {title:"编辑", url:"/ttk/employee/update", data: o})}>
                            <ProfileOutlined style={{fontSize:18}}/>
                        </Button>
                    </Tooltip>
                    <Tooltip title={'删除'}>
                        <Button type="link" onClick={()=> setInfo('del', {text:o.name, url:"/ttk/employee/del",params:{id:o.id}})}>
                            <MinusSquareOutlined style={{fontSize:18}}/>
                        </Button>
                    </Tooltip>
                </>
            }
        ]
    },[setInfo])
}