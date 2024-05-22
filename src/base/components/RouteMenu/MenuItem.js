// src/components/MenuItem.js
import React from 'react';
import classNames from 'clsx';
import {getKey} from "./common";

const MenuItem = ({ item, openKey, onClick, activeKey }) => {
    const key = getKey(item);
    const isOpen= openKey === key
    const isActive= activeKey === key
    // console.log(key, openKey, activeKey)

    const handleClick = () => {
        onClick(item);
    };

    return (
        <li>
            <div className={classNames('menu-item', { active: isActive })} onClick={handleClick}>
                {item.label}
                {item.subMenu && (
                    <span>{isOpen ? '▲' : '▼'}</span>
                )}
            </div>
            {isOpen && item.subMenu && (
                <ul className="sub-menu">
                    {item.subMenu.map((subItem, index) => (
                        <MenuItem
                            key={index}
                            item={subItem}
                            // openKey={openKey}
                            activeKey={activeKey}
                            onClick={onClick}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
