import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Menu from "./Menu";
import {execute} from "../../../common/utils";
import clsx from "clsx";
import './index.css'

export default function RouteMenu({onLeafClick,defaultClose,className,menuClassName,...props}) {
    const [close, setClose] = useState(defaultClose)
    const navigate = useNavigate();
    const location = useLocation();

    // console.log('location', location);

    return <div className={clsx('b-route-menu',className,{close})}>
        <Button onClick={()=> setClose(!close)}>
            {close ? "OP" : "CLOSE"}
        </Button>
        <Menu defaultActiveKey={location.pathname}
              onLeafClick={handleLeafClick}
              className={menuClassName}
              {...props}/>
    </div>

    function handleLeafClick (item) {
        execute(onLeafClick,item)
        // if(!item.to) throw new Error("RouteMenu报错：item.to是必填项")
        if(!item.to) console.error("RouteMenu报错：item.to是必填项")
        // console.log('item', item)
        navigate(item.to)
    }
}

function Button({ children, onClick }){
    return (
        <button className="b-route-menu-button" onClick={onClick}>
            {children}
        </button>
    );
}