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
import TestNavigate from "../views/tests/menu/navigate";
import {getLeafs} from "@common/utils";

const fullConfig = [
    {
        label: 'Home',
        path: '/',
        element: <Home/>,
        _show:false,
    },
    {
        label:"demo",
        children:[
            {
                label: 'Theoretical',
                path: '/demo/theoretical',
                element: <Theoretical/>,
                _show: false,
            },
            {
                label:"DemoNote",
                path:"/demo/note",
                element: <DemoNote/>
            },
        ]
    },
    {
        label:'test',
        open:true,
        children: [
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
                _show: false,
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
                label:"TestNavigate",
                path:"/test/menu/navigate",
                element: <TestNavigate/>
            },
        ]
    },
    {
        label: "Mirror",
        path: '/server/mirror',
        element: <Mirror/>
    }
]

export const menuConfig = fullConfig.filter(x=>x._show !== false)

export const routeConfig = getLeafs(fullConfig)
