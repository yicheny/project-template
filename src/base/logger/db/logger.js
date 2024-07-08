// import { generateUniqueId } from "@common/utils";
//
// class IndexedDBLogger {
//     constructor(options) {
//         const _options = {
//             dbName:'LoggerDB',
//             storeName:'logs',
//             version:1,
//             ...options
//         }
//         this.dbName = _options.dbName;
//         this.storeName = _options.storeName;
//         this.db = null;
//         this.dbReady = false;
//         this.initDB(_options.version);
//     }
//
//     initDB(version) {
//         const request = indexedDB.open(this.dbName, version);
//
//         request.onupgradeneeded = (event) => {
//             this.db = event.target.result;
//
//             if (event.oldVersion < 1) {
//                 const store = this.db.createObjectStore(this.storeName, { keyPath: 'id' });
//                 store.createIndex('timestamp', 'timestamp', { unique: false });
//             }
//             if (event.oldVersion < 2) {
//                 const store = event.target.transaction.objectStore(this.storeName);
//                 store.createIndex('action', 'action', { unique: false });
//             }
//         };
//
//         request.onsuccess = (event) => {
//             this.db = event.target.result;
//             this.dbReady = true;
//         };
//
//         request.onerror = (event) => {
//             console.error('IndexedDB error:', event.target.errorCode);
//         };
//     }
//
//     upgradeDB(newVersion) {
//         if (this.db) {
//             this.db.close();
//         }
//         this.initDB(newVersion);
//     }
//
//     log(action, details, id = null, retryCount = 0) {
//         if (!this.dbReady) {
//             setTimeout(() => this.log(action, details, id, retryCount), 100);
//             return;
//         }
//
//         if (!id) id = generateUniqueId();
//         const timestamp = new Date().toISOString();
//         const logEntry = { id, timestamp, action, details };
//
//         const transaction = this.db.transaction([this.storeName], 'readwrite');
//         const store = transaction.objectStore(this.storeName);
//
//         const request = store.add(logEntry);
//
//         request.onsuccess = () => {
//             console.log('Log entry added:', logEntry);
//         };
//
//         request.onerror = (event) => {
//             console.error('Error adding log entry:', event.target.errorCode);
//             if (retryCount < 3) {
//                 setTimeout(() => this.log(action, details, id, retryCount + 1), 100);
//             }
//         };
//     }
//
//     getLogs(callback) {
//         if (!this.dbReady) {
//             setTimeout(() => this.getLogs(callback), 100);
//             return;
//         }
//
//         const transaction = this.db.transaction([this.storeName], 'readonly');
//         const store = transaction.objectStore(this.storeName);
//         const request = store.getAll();
//
//         request.onsuccess = () => {
//             callback(request.result);
//         };
//     }
//
//     clearLogs() {
//         if (!this.dbReady) {
//             setTimeout(() => this.clearLogs(), 100);
//             return;
//         }
//
//         const transaction = this.db.transaction([this.storeName], 'readwrite');
//         const store = transaction.objectStore(this.storeName);
//         store.clear();
//     }
//
//     findLogById(id, callback) {
//         if (!this.dbReady) {
//             setTimeout(() => this.findLogById(id, callback), 100);
//             return;
//         }
//
//         const transaction = this.db.transaction([this.storeName], 'readonly');
//         const store = transaction.objectStore(this.storeName);
//         const request = store.get(id);
//
//         request.onsuccess = () => {
//             callback(request.result);
//         };
//     }
//
//     async exportToJson() {
//         if (!this.dbReady) {
//             await new Promise(resolve => setTimeout(resolve, 100));
//             return this.exportToJson();
//         }
//
//         return new Promise((resolve, reject) => {
//             const transaction = this.db.transaction([this.storeName], 'readonly');
//             const store = transaction.objectStore(this.storeName);
//             const request = store.getAll();
//
//             request.onsuccess = () => {
//                 const data = request.result;
//                 const jsonData = JSON.stringify(data, null, 2);
//                 const blob = new Blob([jsonData], { type: 'application/json' });
//                 const url = URL.createObjectURL(blob);
//
//                 const a = document.createElement('a');
//                 a.href = url;
//                 a.download = `${this.dbName}_${this.storeName}.json`;
//                 document.body.appendChild(a);
//                 a.click();
//                 document.body.removeChild(a);
//
//                 URL.revokeObjectURL(url);
//                 resolve();
//             };
//
//             request.onerror = (event) => {
//                 reject('Error fetching data: ' + event.target.errorCode);
//             };
//         });
//     }
// }
//
// export const logger = new IndexedDBLogger();
//
// // 捕捉并记录 console.log 的消息
// // (function() {
// //     const originalConsoleLog = console.log;
// //     console.log = function(...args) {
// //         logger.log('console.log', { message: args });
// //         originalConsoleLog.apply(console, args);
// //     };
// // })();

import {IndexedDBLogger} from "indexeddb-logger/lib";

export const logger = new IndexedDBLogger({
            dbName:'eventLoggerDB',
            storeName:'eventLogs',
            version:1,
})