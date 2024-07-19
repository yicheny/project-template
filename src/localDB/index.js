import {linkDB} from "./base/linkDB";
import {seedTaskManager} from "../seeds/scripts/seedTaskManager";
import {userSeed} from "./apps/ttk/seeds/userSeed";

const EXEC_KEYS = [
    // 'user',
]

export function localDBServer(){
    linkDB();
    initSeeds();
}

function initSeeds(){
    // ------- 添加初始化任务 ------
    seedTaskManager.addTask('user', userSeed)

    // ------- 执行初始化任务 ------
    // seedTaskManager.execAll()
    seedTaskManager.execTasks(EXEC_KEYS)
}

