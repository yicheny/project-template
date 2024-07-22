import {linkDB} from "./base/linkDB";
import {seedTaskManager} from "../seeds/scripts/seedTaskManager";
import {userSeed} from "./apps/ttk/seeds/userSeed";
import {employeeSeed} from "./apps/ttk/seeds/employeeSeed";

const EXEC_KEYS = [
    // 'user',
    // 'employee',
]

export function localDBServer(){
    linkDB();
    initSeeds();
}

function initSeeds(){
    // ------- 添加初始化任务 ------
    seedTaskManager.addTask('user', userSeed)
    seedTaskManager.addTask('employee', employeeSeed)

    // ------- 执行初始化任务 ------
    // seedTaskManager.execAll()
    seedTaskManager.execTasks(EXEC_KEYS)
}

