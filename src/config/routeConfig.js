import React from "react";
import Home from "../views/home";
import TestStore from "../views/tests/store";
import TestFile from "../views/tests/file";
import {DemoNote} from "../views/demos/note";
import TestEditTable from "../views/tests/edit-table";
import TestSentry from "../views/tests/sentry";
import TestDataLogger from "../views/tests/dataLogger";
import Theoretical from "../views/demos/theoretical";
import TestLogger from "../views/tests/logger";
import Mirror from "../views/servers/mirror";

const fullConfig = [
    {
        label: 'Home',
        path: '/',
        element: <Home/>,
    },
    {
        label: 'Theoretical',
        path: '/demo/theoretical',
        element: <Theoretical/>,
        show: false,
    },
    {
        label:"DemoNote",
        path:"/demo/note",
        element: <DemoNote/>
    },
    {
        label:"TestStore",
        path: '/test/store',
        element: <TestStore/>,
    },
    {
        label:"TestFile",
        path: '/test/file',
        element: <TestFile/>,
    },
    {
        label:"EditTable",
        path: '/test/edit-table',
        element: <TestEditTable/>,
    },
    {
        label:"TestLogger",
        path: '/test/logger',
        element: <TestLogger/>,
        show: false,
    },
    {
        label:"DataLogger",
        path: '/test/dataLogger',
        element: <TestDataLogger/>,
    },
    {
        label:"TestSentry",
        path: '/test/sentry',
        element: <TestSentry/>,
    },
    {
        label: "Mirror",
        path: '/server/mirror',
        element: <Mirror/>
    }
]

export const routeConfig = fullConfig.filter(x=>x.show !== false)