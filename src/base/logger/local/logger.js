import {store} from "@base/dom";

class Logger{
    constructor() {
        this.logs = []
    }

    log(action, details) {
        const timestamp = new Date().toISOString();
        this.logs.push({ timestamp, action, details });
    }

    getLogs(){
        return this.logs
    }

    clearLogs(){
        this.logs = []
    }

    saveLogs(){
        // 可以通过接口保存，或者保存到本地
        store.import('logs', this.logs)
    }
}

export const logger = new Logger()
