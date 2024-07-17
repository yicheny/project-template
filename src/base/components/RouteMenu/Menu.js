// src/components/Menu.js
import React, {useEffect, useMemo, useState} from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import clsx from "clsx";
import {formatItems, getKey, MenuProvider} from "./common";
import {execute, getLeafs} from "@common/utils";
import _ from 'lodash'

const Menu = ({ items, style, className, onClick, onBranchClick, onLeafClick, activesKeys:iActivesKeys }) => {
    const [activeKeys, setActiveKeys] = useState();
    const renderItems = useMemo(()=>formatItems(items),[items])
    const leafNodes = useMemo(()=>getLeafs(renderItems),[renderItems])

    useEffect(() => {
        setActiveKeys(iActivesKeys)
    }, [iActivesKeys]);

    return (
        <MenuProvider value={{
            activeKeys,
            onClick:handleClick,
            onBranchClick:handleBranchClick,
            onLeafClick:handleLeftClick,
        }}>
            <ul className={clsx("b-menu", className)} style={style}>
                {renderItems.map((item, index) => {
                    return <MenuItem
                        key={index}
                        item={item}
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
        const target = _.find(leafNodes, x=>x.path === key)
        setActiveKeys(target.pathList);
    }

    function handleBranchClick(item){
        execute(onBranchClick,item)
    }
};

export default Menu;

