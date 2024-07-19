import React from 'react';
import ReactDOM from 'react-dom/client';
import '@base/logger/db/initLogger'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import _ from 'lodash'
import {routeConfig} from "./config";
import {initSeeds} from "./seeds/scripts/initSeeds";
import './index.css';
import './base.css'
import * as Sentry from "@sentry/react";
import {localDBServer} from "./localDB";

localDBServer();

const openSenTry = false;

if(openSenTry){
    Sentry.init({
        dsn: "https://b068ef590f09d36339b76cd4fd5c510e@o4507558406848512.ingest.us.sentry.io/4507558422249472",
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, //  Capture 100% of the transactions
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

// initLogger()
// initDataLogger()

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
