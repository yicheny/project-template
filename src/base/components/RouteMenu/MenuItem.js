// src/components/MenuItem.js
import React from 'react';
import classNames from 'clsx';
import {getKey, useMenu} from "./common";
import {execute, hasData} from "../../../common/utils";

const MenuItem = ({ item, openKey }) => {
    const { onClick, activeKey, onBranchClick, onLeafClick } = useMenu()

    const key = getKey(item);
    const isOpen= openKey === key
    const isActive= activeKey === key
    // console.log(key, openKey, activeKey)

    const handleClick = () => {
        onClick(item);

        if(hasData(item.subMenu)) {
            execute(onBranchClick, item)
        }else{
            execute(onLeafClick, item)
        }
    };

    return (
        <li>
            <div className={classNames('b-menu-item', { active: isActive })} onClick={handleClick}>
                {item.label}
                {item.subMenu && (
                    <span>{isOpen ? '▲' : '▼'}</span>
                )}
            </div>
            {isOpen && item.subMenu && (
                <ul className="b-sub-menu">
                    {item.subMenu.map((subItem, index) => (
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
