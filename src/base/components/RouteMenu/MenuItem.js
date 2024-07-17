// src/components/MenuItem.js
import React,{useState} from 'react';
import classNames from 'clsx';
import {getKey, useMenu} from "./common";
import {execute, hasData} from "@common/utils";
import _ from 'lodash'

const MenuItem = ({ item }) => {
    const { onClick, activeKeys, onBranchClick, onLeafClick } = useMenu()
    const [open,setOpen] = useState(item.open)

    const key = getKey(item);
    const isActive= _.some(activeKeys, activeKey => _.startsWith(activeKey, key))
    // console.log(key, openKey, activeKey)

    const handleClick = () => {
        onClick(item);

        if(hasData(item.children)) {
            setOpen(!open)
            execute(onBranchClick, item)
        }else{
            execute(onLeafClick, item)
        }
    };

    return (
        <li>
            <div className={classNames('b-menu-item', { active: isActive,})} onClick={handleClick}>
                {item.label}
                {item.children && (
                    <span>{open ? '▲' : '▼'}</span>
                )}
            </div>
            {open && item.children && (
                <ul className="b-sub-menu">
                    {item.children.map((subItem, index) => (
                        <MenuItem
                            key={index}
                            item={subItem}
                            // openKey={openKey}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
