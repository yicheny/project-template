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
import TTKEmployee from "../views/ttk/employee-base";
import TTKUser from "../views/ttk/user-base";
import TTKEmployeeInitSetup from "../views/ttk/employee-init-setup";
import TotalCountData from "../views/total/count/data";
import {TotalCountInfo} from "../views/total/count/info";
import {G6Demo1} from "../views/antv-g6/demo1";

const fullConfig = [
    {
        label: 'Home',
        path: '/',
        element: <Home/>,
        _show:false,
    },
    {
        label:"AntV-G6",
        children: [
            {
                label: "demo1",
                path: '/antv-g6/demo1',
                element: <G6Demo1/>
            }
        ]
    },
    {
        label:"demo",
        open:false,
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
        open:false,
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
        label:"server",
        children: [
            {
                label: "Mirror",
                path: '/server/mirror',
                element: <Mirror/>
            }
        ]
    },
    {
        label:'ttk',
        open:false,
        children: [
            {
                label:'employee-base',
                path:"/ttk/employee-base",
                element: <TTKEmployee/>
            },
            {
                label:'user-base',
                path:"/ttk/user-base",
                element: <TTKUser/>
            },
            {
                label:'employee-init-setup',
                path:"/ttk/employee-init-setup",
                element: <TTKEmployeeInitSetup/>
            }
        ]
    },
    {
        label: 'total',
        open:true,
        children: [
            {
                label: 'count',
                open:true,
                children:[
                    {
                        label:"data",
                        path:"/total/count/data",
                        element:<TotalCountData/>
                    },
                    {
                        label:"info",
                        path:"/total/count/info",
                        element:<TotalCountInfo/>
                    }
                ]
            }
        ]
    }
]

export const menuConfig = filterTree(fullConfig)

export const routeConfig = getLeafs(fullConfig)

function filterTree(data) {
    return data
        .filter(item => item._show !== false) // 过滤掉 _show: false 的节点
        .map(item => {
            // 如果有 children，则递归过滤 children
            if (item.children) {
                return {
                    ...item,
                    children: filterTree(item.children) // 递归调用过滤函数
                };
            }
            return item;
        });
}