import {useStoreData} from "@base/dom";
import {Table} from "antd";

const columns = [
    { title:"标题", dataIndex: 'title'},
    { title:"信息", dataIndex: 'info'},
    { title:"更新时间", dataIndex: 'updateTime'},
]

export function DemoNote(){
    const {data} = useStoreData('note')
    return <div className={'n-show'}>
        <Table columns={columns} dataSource={data}/>
    </div>
}