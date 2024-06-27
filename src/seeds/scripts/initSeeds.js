import {seedTaskManager} from "./seedTaskManager";
import {noteTask} from "../tasks/noteTask";

const EXEC_KEYS = [
    // 'note',
]

export function initSeeds(){
    // ------- 添加初始化任务 ------
    seedTaskManager.addTask('note', noteTask)

    // ------- 执行初始化任务 ------
    // seedTaskManager.execAll()
    seedTaskManager.execTasks(EXEC_KEYS)
}
