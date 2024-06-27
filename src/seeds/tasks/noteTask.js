import {store} from "@base/dom";

export function noteTask(){
    store.import('note', [
        { title:"初始化笔记标题1", updateTime:"2024-06-24 12:00:00", info:'初始化笔记内容1' },
        { title:"初始化笔记标题2", updateTime:"2024-06-25 12:00:00", info:'初始化笔记内容2' },
        { title:"初始化笔记标题3", updateTime:"2024-06-26 12:00:00", info:'初始化笔记内容3' },
    ])
}