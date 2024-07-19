import localforage from "localforage";

const DB_NAME = 'localDB'

export function linkDB(){
    // 初始化 localForage
    localforage.config({
        driver: localforage.INDEXEDDB, // 选择存储引擎，这里选择 IndexedDB
        name: DB_NAME, // 数据库名称，可选
        version: 1.0, // 数据库版本号，可选
        storeName: 'ttkApp', // 表格名称，可选
    });
}