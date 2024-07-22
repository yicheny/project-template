import localforage from "localforage";
import _ from 'lodash'
import {EMPLOYEE} from "../../config";
import {isEm} from "@common/utils";

export async function ttkEmployeeDel(data) {
    let collection = await localforage.getItem(EMPLOYEE);
    if(isEm(data.id)) throw new Error('id不能为空')
    const targetIndex = _.findIndex(collection, x=>x.id === data.id);
    if(targetIndex === -1) throw new Error('不存在这条数据！')
    collection = _.filter(collection,x=> x.id !== data.id)
    await localforage.setItem(EMPLOYEE, collection)
    return null;
}