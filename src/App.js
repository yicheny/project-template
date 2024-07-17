import React from 'react';
import './App.css'
import {RouteMenu} from "./base/components";
import {menuConfig} from "./config";

function App({children}) {
    return (
        <div className="app">
            <RouteMenu className={'app-route-menu'}
                       menuClassName={'app-menu'}
                       items={menuConfig}
                       defaultClose={false}/>
            <div className={'app-content'}>
                {children}
            </div>
        </div>
    );
}

export default App;
