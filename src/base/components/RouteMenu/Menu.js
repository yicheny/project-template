// src/components/Menu.js
import React, {useState} from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import clsx from "clsx";
import {getKey, MenuProvider} from "./common";
import _ from 'lodash'
import {execute} from "@common/utils";

const Menu = ({ items, style, className, onClick, onBranchClick, onLeafClick, defaultActiveKey }) => {
    // const openKeyRef = useRef(new Map())
    const [openKey,setOpenKey] = useState(new Map())
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    return (
        <MenuProvider value={{
            activeKey,
            onClick:handleClick,
            onBranchClick:handleBranchClick,
            onLeafClick:handleLeftClick,
        }}>
            <ul className={clsx("b-menu", className)} style={style}>
                {items.map((item, index) => {
                    return <MenuItem
                        key={index}
                        item={item}
                        openKey={openKey.get(getKey(item))}
                    />
                })}
            </ul>
        </MenuProvider>
    );

    function handleClick(item) {
        execute(onClick,item)
    }

    function handleLeftClick(item) {
        execute(onLeafClick,item)

        const key = getKey(item);
        setActiveKey(key);
    }

    function handleBranchClick(item){
        execute(onBranchClick,item)
        setParentOpen(item)

        function setParentOpen(item){
            const isChild = item.subMenu.some(x=> x === item)
            if(isChild) return
            const key = getKey(item);
            openKey.set(key, openKey.get(key) ? null : key)
            setOpenKey(_.clone(openKey))
        }
    }
};

export default Menu;