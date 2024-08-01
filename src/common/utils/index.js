import _ from 'lodash'
import {message} from "antd";

export function hasData(data){
    return _.isArray(data) && !_.isEmpty(data)
}

export function execute(func,...props){
    if(_.isFunction(func)) func(...props)
}

export async function syncExecute(func,...props){
    if(_.isFunction(func)) return await func(...props)
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

export function getLeafs(treeList,leafProp='children'){
    const result = []
    flatCore(treeList)
    return result;

    function flatCore(list){
        if(!Array.isArray(list)) return ;
        list.forEach(x=>{
            if(x[leafProp]) return flatCore(x[leafProp])
            result.push(x)
        })
    }
}

export function isEm(v){
    if(_.isNil(v)) return true;
    if(v === '') return true;
    if(_.isObjectLike(v) && _.isEmpty(v)) return true;
    return false;
}

export function formatPercentage (value, digit) {
    // 将值转换为百分率，并格式化为指定的小数点位数
    let percentage = (value * 100).toFixed(digit);

    // 将整数部分每3位加一个逗号
    let parts = percentage.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `${parts.join(".")}%`;
}