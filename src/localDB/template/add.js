import localforage from "localforage";
import _ from "lodash";
import {generateUniqueId} from "@common/utils";

export function addTemplate(tableName){
    return async  (data) => {
        let collection = await localforage.getItem(tableName);
        if(!_.isArray(collection)) collection = []
        collection.push({...data, id:generateUniqueId()})
        await localforage.setItem(tableName, collection)
        return null;
    }
}