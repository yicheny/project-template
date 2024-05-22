import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Menu from "./Menu";
import {execute} from "../../../common/utils";

export default function RouteMenu({onLeafClick,...props}) {
    const navigate = useNavigate();
    const location = useLocation()

    // console.log('location', location);

    return <Menu defaultActiveKey={location.pathname}
                 onLeafClick={handleLeafClick}
                 {...props}/>

    function handleLeafClick (item) {
        execute(onLeafClick,item)
        // if(!item.to) throw new Error("RouteMenu报错：item.to是必填项")
        if(!item.to) console.error("RouteMenu报错：item.to是必填项")
        // console.log('item', item)
        navigate(item.to)
    }
}