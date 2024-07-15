import React from 'react';
import {Button} from "antd";
import {usePost} from "@common/hooks/usePost";

export default function Mirror(props) {
    const {doFetch} = usePost()
    return (
        <div>
            <Button onClick={()=>{
                doFetch('/mirror', { id:1, info: "测试信息"})
            }}>发送请求</Button>
        </div>
    );
}