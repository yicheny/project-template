import localforage from "localforage";
import _ from "lodash";

export function queryTemplate(tableName){
    return async  (data) => {
        const collection = await localforage.getItem(tableName);
        if(_.isNil(data.id)) return collection;
        return _.filter(collection,x => x.id === data.id);
    }
}