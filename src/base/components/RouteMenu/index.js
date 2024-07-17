import React, { useMemo, useState} from 'react';
import _ from 'lodash'
import {useLocation, useNavigate} from 'react-router-dom';
import Menu from "./Menu";
import {execute, getLeafs} from "@common/utils";
import clsx from "clsx";
import './index.css'
import {formatItems} from "@base/components/RouteMenu/common";

export default function RouteMenu({onLeafClick,defaultClose,className,menuClassName,items,...props}) {
    const [close, setClose] = useState(defaultClose)
    const navigate = useNavigate();
    const location = useLocation();

    const leafs = useMemo(()=>getLeafs(formatItems(items)),[items])

    const activesKeys = useMemo(()=>{
        const target = _.find(leafs, x=>x.path === location.pathname)
        return target?.pathList;
    },[leafs, location.pathname])

    return <div className={clsx('b-route-menu',className,{close})}>
        <Button onClick={()=> setClose(!close)}>
            {close ? "OP" : "CLOSE"}
        </Button>
        <Menu activesKeys={activesKeys}
              onLeafClick={handleLeafClick}
              className={menuClassName}
              items={items}
              {...props}/>
    </div>

    function handleLeafClick (item) {
        execute(onLeafClick,item)
        // if(!item.path) throw new Error("RouteMenu报错：item.to是必填项")
        if(!item.path) console.error("RouteMenu报错：item.path是必填项")
        // console.log('item', item)
        navigate(item.path)
    }
}

function Button({ children, onClick }){
    return (
        <button className="b-route-menu-button" onClick={onClick}>
            {children}
        </button>
    );
}

