import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Menu from "./Menu";
import {execute} from "@common/utils";
import clsx from "clsx";
import './index.css'

export default function RouteMenu({onLeafClick,defaultClose,className,menuClassName,...props}) {
    const [close, setClose] = useState(defaultClose)
    const navigate = useNavigate();
    const location = useLocation();
    const [key,setKey] = useState(0)

    useEffect(() => {
        setKey(k => k+1)
    }, [location.pathname]);

    return <div className={clsx('b-route-menu',className,{close})}>
        <Button onClick={()=> setClose(!close)}>
            {close ? "OP" : "CLOSE"}
        </Button>
        <Menu defaultActiveKey={location.pathname}
              onLeafClick={handleLeafClick}
              className={menuClassName}
              key={key}
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