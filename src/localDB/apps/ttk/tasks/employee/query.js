import localforage from "localforage";
import _ from 'lodash'
import {EMPLOYEE} from "../../config";

// 通过用户 id 获取数据项
export async function ttkEmployeeQuery({id}) {
    try {
        const collection = await localforage.getItem(EMPLOYEE);
        if(_.isNil(id)) return collection;
        return _.filter(collection,x => x.id === id);
    } catch (error) {
        console.error('Error getting user by id:', error);
    }
}