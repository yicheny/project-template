import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

export default function TestNavigate(props) {
    const navigate = useNavigate()
    return (
        <div>
            <Button onClick={()=>navigate('/server/mirror')}>跳转Mirror页</Button>
        </div>
    );
}