import localforage from 'localforage';
import {USER} from '../config'
import {tryInitTable} from "../../../base/utils";

export async function userSeed() {
    await tryInitTable(USER,async () => {
        // 创建表格并添加数据
        await localforage.setItem(USER, [
            {
                id: '41148122_09bqys_99', // id
                name: "init_user", // 名称
                funds: 1000, // 当前资金
                employeeStack: [101, 102], // 员工堆
                countdown: 10, // 倒计时（剩余天数）
                targetFunds: 5000, // 目标资金
                memo: 'Example memo', // 备注
            },
            // 可以继续添加更多用户数据
        ]);
    })
}
