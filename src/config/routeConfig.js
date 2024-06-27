import React from "react";
import Home from "../views/home";
import TestStore from "../views/tests/store";
import TestFile from "../views/tests/file";

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
        label:"TestStore",
        path: '/test/store',
        element: <TestStore/>,
    },
    {
        label:"TestFile",
        path: '/test/file',
        element: <TestFile/>,
    }
]