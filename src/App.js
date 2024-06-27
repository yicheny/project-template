import React from 'react';
import './App.css'
import {RouteMenu} from "./base/components";

function App({children}) {
    const menuItems = [
        {
            label: 'Home',
            to: '/'
        },
        // {
        //     label: 'Theoretical',
        //     to: '/demo/theoretical'
        // },
        {
            label:"TestStore",
            to: '/test/store'
        },
        {
            label:"TestFile",
            to: '/test/file'
        }
    ];

    return (
        <div className="app">
            <RouteMenu className={'app-route-menu'}
                       menuClassName={'app-menu'}
                       items={menuItems}
                       defaultClose={false}/>
            <div className={'app-content'}>
                {children}
            </div>
        </div>
    );
}

export default App;
