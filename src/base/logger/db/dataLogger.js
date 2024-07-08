import ExtendedIndexedDBLogger from "@base/logger/db/ExtendedIndexedDBLogger";

export const dataLogger = new ExtendedIndexedDBLogger({
    dbName:'LoggerDB',
    storeName:'dataLoggers',
    version:1,
})

window._dataLogger = dataLogger;

// // 初始化扩展的 logger
// const logger = new ExtendedIndexedDBLogger({
//     dbName: 'CustomLoggerDB',
//     storeName: 'customLogs',
//     version: 1
// });
//
// // 记录日志
// logger.log('user_login', { userId: 123, timestamp: new Date() });
//
// // 获取所有日志
// logger.getLogs((logs) => {
//     console.log('All logs:', logs);
// });
//
// // 根据 action 过滤日志
// logger.getLogsByAction('user_login', (filteredLogs) => {
//     console.log('Filtered logs by action "user_login":', filteredLogs);
// });
//
// // 清除所有日志
// logger.clearLogs();
//
// // 查找特定日志条目
// logger.findLogById('some-id', (log) => {
//     console.log('Log found by ID:', log);
// });
//
// // 导出日志到 JSON 文件
// logger.exportToJson().then(() => {
//     console.log('Logs exported to JSON file');
// });

// export function quickDataLog(details){
//     dataLogger.log('devLog', details)
// }