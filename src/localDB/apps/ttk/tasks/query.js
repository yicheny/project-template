import localforage from "localforage";
import {tableName} from "../config";

// 通过用户 id 获取数据项
export async function ttkUserQuery({id}) {
    try {
        const users = await localforage.getItem(tableName);
        const user = users.find(user => user.id === id);
        if (user) {
            console.log(`User found:`, user);
            return user;
        } else {
            console.log(`User with id ${id} not found.`);
            return null;
        }
    } catch (error) {
        console.error('Error getting user by id:', error);
    }
}