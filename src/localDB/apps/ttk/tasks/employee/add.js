import localforage from "localforage";
import _ from 'lodash'
import {EMPLOYEE} from "../../config";
import {generateUniqueId} from "@common/utils";

export async function ttkEmployeeAdd(data) {
    let collection = await localforage.getItem(EMPLOYEE);
    if(!_.isArray(collection)) collection = []
    if(!_.isArray(data.tags)) data.tags = []
    collection.push({...data, id:generateUniqueId()})
    await localforage.setItem(EMPLOYEE, collection)
    return null;
}