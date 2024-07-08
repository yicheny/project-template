import {dataLogger} from "@base/logger/db/dataLogger";

export function initDataLogger(){
    dataLogger.log(
        'init',
        { date:new Date().toISOString(), info:"dataLogger初始化" },
    )
}