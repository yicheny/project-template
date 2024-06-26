import _ from 'lodash'

class Store{
    _storage = localStorage;

    _set(k,v){
        this._storage.setItem(k,JSON.stringify(v))
    }

    _get(k){
        // return this._storage.getItem(k)
        return safeParse(this._storage.getItem(k))
    }

    _del(k){
        this._storage.removeItem(k)
    }

    // 导出信息
    exportList(){

    }

    // 导入信息-以数组格式
    importList(data){
        _.forEach(data, ([key,value])=>{
            this._set(key,value)
        })
    }

    // 导入信息-以对象格式
    importObj(data){
        _.forEach(data, (value,key)=>{
            this._set(key,value)
        })
    }

    // 读取信息-以对象格式返回
    readObj(keys){
        const result = {}
        _.forEach(keys, k => {
            result[k] = this._get(k);
        })
        return result;
    }
    
    // 删除数据
    removeList(keys){
        _.forEach(keys, k => {
            this._del(k)
        })
    }

    // 清空数据
    clear(){
        this._storage.clear();
    }
}

//-----------工具方法----------
function safeParse(v){
    if(_.isNil(v)) return null;
    return JSON.parse(v)
}

export const store = new Store()