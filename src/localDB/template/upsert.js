import localforage from "localforage";
import _ from "lodash";
import {generateUniqueId} from "@common/utils";

// TODO 返回值如果能体现这次是插入还是更新感觉会更友好一些
export function upsertTemplate(tableName,option){
    const {primaryKey} = option || {};
    return async  (data) => {
        let collection = await localforage.getItem(tableName);
        if(!_.isArray(collection)) collection = []
        const targetIndex = _.findIndex(collection, x=>x.id === data.id);
        if(targetIndex === -1) {
            collection.push({
                id: primaryKey ? data[primaryKey] : generateUniqueId(),
                ...data,
            })
        }else{
            collection[targetIndex] = data;
        }
        await localforage.setItem(tableName, collection)
        return null;
    }
}