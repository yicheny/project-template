// src/components/Menu.js
import React, {useState} from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import clsx from "clsx";
import {getKey} from "./common";
import _ from 'lodash'

const Menu = ({ items, style, className }) => {
    // const openKeyRef = useRef(new Map())
    const [openKey,setOpenKey] = useState(new Map())
    const [activeKey, setActiveKey] = useState(null);

    const handleClick = (item) => {
        const key = getKey(item);
        setActiveKey(key);
        setParentOpen()

        function setParentOpen(){
            const hasSub = Array.isArray(item.subMenu) && item.subMenu.length > 0;
            if(!hasSub) return
            const isChild = item.subMenu.some(x=> x === item)
            if(isChild) return
            // return setOpenKey(openKey === key ? null : key);
            // const openKey = openKeyRef.current
            openKey.set(key, openKey.get(key) ? null : key)
            setOpenKey(_.clone(openKey))
        }
    };


    return (
        <ul className={clsx("b-menu",className)} style={style}>
            {items.map((item, index) => {
                return <MenuItem
                    key={index}
                    item={item}
                    openKey={openKey.get(getKey(item))}
                    activeKey={activeKey}
                    onClick={handleClick}
                />
            })}
        </ul>
    );
};

export default Menu;
