import React from 'react';
import ReactDOM from 'react-dom/client';
import '@base/logger/db/loggerInit'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import _ from 'lodash'
import {routeConfig} from "./config";
import {initSeeds} from "./seeds/scripts/initSeeds";
import './index.css';
import './base.css'

initSeeds();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <App>
                <Routes>
                    {
                        _.map(routeConfig, (props,index) =>{
                            return <Route key={index} {...props}/>
                        })
                    }
                </Routes>
            </App>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
