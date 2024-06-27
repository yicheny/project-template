import React from 'react';
import './App.css'
import {RouteMenu} from "./base/components";
import {routeConfig} from "./config";

function App({children}) {
    return (
        <div className="app">
            <RouteMenu className={'app-route-menu'}
                       menuClassName={'app-menu'}
                       items={routeConfig}
                       defaultClose={false}/>
            <div className={'app-content'}>
                {children}
            </div>
        </div>
    );
}

export default App;
