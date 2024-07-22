import localforage from 'localforage';
import {USER} from '../config'
import {tryInitTable} from "../../../base/utils";

export async function userSeed() {
    await tryInitTable(USER,async () => {
        // 创建表格并添加数据
        await localforage.setItem(USER, [
            {
                id: 1,
                funds: 1000,
                employeeStack: [101, 102],
                countdown: 10,
                targetFunds: 5000,
                memo: 'Example memo',
            },
            // 可以继续添加更多用户数据
        ]);
    })
}
