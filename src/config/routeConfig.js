import React from "react";
import Home from "../views/home";
import TestStore from "../views/tests/store";
import TestFile from "../views/tests/file";
import {DemoNote} from "../views/demos/note";
import TestEditTable from "../views/tests/edit-table";
import TestLogger from "../views/tests/logger";

export const routeConfig = [
    {
        label: 'Home',
        path: '/',
        element: <Home/>,
    },
    // {
    //     label: 'Theoretical',
    //     path: '/demo/theoretical',
    //     element: <Theoretical/>,
    // },
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
    }
]
