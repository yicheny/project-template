import _ from 'lodash'
import {message} from "antd";

export function hasData(data){
    return _.isArray(data) && !_.isEmpty(data)
}

export function execute(func,...props){
    if(_.isFunction(func)) func(...props)
}

let uniqIdIndex = 0;
export function generateUniqueId() {
    // return '_' + Math.random().toString(36).substr(2, 9);
    return `${Date.now().toString().slice(5)}_${Math.random().toString(36).slice(2,8)}_${uniqIdIndex++}`
}

export async function tryExecute(callback){
    try {
        await callback()
    }catch (e){
        message.error(e.message)
    }
}