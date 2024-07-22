import localforage from "localforage";
import _ from 'lodash'
import {EMPLOYEE} from "../../config";

export async function ttkEmployeeQuery({id}) {
    const collection = await localforage.getItem(EMPLOYEE);
    if(_.isNil(id)) return collection;
    return _.filter(collection,x => x.id === id);
}