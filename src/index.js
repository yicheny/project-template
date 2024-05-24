import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./views/home";
import _ from 'lodash'
import Theoretical from "./views/theoretical";

const routeConfig = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/theoretical",
        element: <Theoretical/>,
    },
]

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
