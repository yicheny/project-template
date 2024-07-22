import localforage from 'localforage';
import {EMPLOYEE} from '../config'
import {tryInitTable} from "../../../base/utils";

export async function employeeSeed() {
    await tryInitTable(EMPLOYEE,async () => {
        // 创建表格并添加数据
        await localforage.setItem(EMPLOYEE, [
            {
                "id": '39405872_1y3ylr_99',
                "name": "Alice",
                "point": 3999,
                "userCount": 2,
                "yield": 1.5,
                "tags": [
                    "html",
                    "css",
                    "java"
                ]
            },
            // 可以继续添加更多用户数据
        ]);
    })
}
