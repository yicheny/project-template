export async function tryInitTable(tableName, initTable){
    try {
        // 创建表格并添加数据
        await initTable()

        console.log(`${tableName}表初始化数据成功！`);
    } catch (error) {
        console.error(`${tableName}表初始化报错:`, error);
    }
}