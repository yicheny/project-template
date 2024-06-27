import {execute} from "@common/utils";

function createSeedTaskManager(){
    const manager = new Map();

    return {
        addTask(key, task){
            manager.set(key, task)
        },
        execTasks(keys){
            keys.forEach(key=>{
                execute(manager.get(key))
            })
        },
        execAll(){
            manager.forEach(task=>{
                execute(task)
            })
        }
    }
}

export const seedTaskManager = createSeedTaskManager()