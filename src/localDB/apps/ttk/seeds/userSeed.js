import localforage from 'localforage';
import {tableName} from '../config'


export async function userSeed() {
    try {
        // 创建表格并添加数据
        await localforage.setItem(tableName, [
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

        console.log(`user表初始化数据成功！`);
    } catch (error) {
        console.error('user表初始化报错:', error);
    }
}
