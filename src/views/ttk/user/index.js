import {useAutoRefresh, useOpenInfo, usePostM} from "@common/hooks";
import React, {useCallback, useMemo} from "react";
import {tryExecute} from "@common/utils";
import {Button, Table, Tooltip} from "antd";
import {MinusSquareOutlined, ProfileOutlined} from "@ant-design/icons";
import {RemoveModal} from "@base/components";
import EditModal from "./Edit";

export default function TTKUser(props) {
    const {data,refreshTable} = useDataSource()
    // const { value:info, checkTypes, setInfo, close} = useOpenInfo({type:"add", title: "新增", url: "/ttk/user/add"})
    const { value:info, checkTypes, setInfo, close} = useOpenInfo()

    return (<div>
        <div style={{marginBottom: 12}}>
            <Button onClick={() => setInfo('add', {title: "新增", url: "/ttk/user/add"})}>新增</Button>
        </div>
        <Table dataSource={data} columns={useColumns(setInfo)} pagination={false} size={'small'}/>
        {checkTypes(['add','edit']) && <EditModal close={close} info={info} refresh={refreshTable}/>}
        {checkTypes(['del']) && <RemoveModal close={close} info={info} refresh={refreshTable}/>}
    </div>);
}

function useDataSource() {
    const {data, doFetch} = usePostM()
    const refreshTable = useCallback(() => {
        tryExecute(async () => {
            const data = await doFetch('/ttk/user/query',{})
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
                title: 'funds',
                dataIndex: 'funds',
            },
            {
                title: 'countdown',
                dataIndex: 'countdown',
            },
            {
                title: 'targetFunds',
                dataIndex: 'targetFunds',
            },
            {
                title: 'memo',
                dataIndex: 'memo',
            },
            {
                title:"操作项",
                dataIndex: "_operation",
                align:"center",
                render:(v,o)=><>
                    <Tooltip title={'编辑'}>
                        <Button type="link" onClick={()=> setInfo('edit', {title:"编辑", url:"/ttk/user/update", data: o})}>
                            <ProfileOutlined style={{fontSize:18}}/>
                        </Button>
                    </Tooltip>
                    <Tooltip title={'删除'}>
                        <Button type="link" onClick={()=> setInfo('del', {text:o.name, url:"/ttk/user/del",params:{id:o.id}})}>
                            <MinusSquareOutlined style={{fontSize:18}}/>
                        </Button>
                    </Tooltip>
                </>
            }
        ]
    },[setInfo])
}