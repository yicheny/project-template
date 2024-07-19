import {syncExecute} from "@common/utils";
import {TASK_MAP} from "./config";

export const mockPost = (...params) => mockApi('post', ...params)

async function mockApi(method, url, params){
    // url以 /api 开头，所以抹掉
    url = url.slice(4)

    const task = taskFor(url)
    const data =  await syncExecute(task, params)

    console.log('data', data)

    return new Promise((resolve,reject)=>{
        resolve({
            data:{
                code:0,
                data
            }
        })
    })
}

function taskFor(url){
    return TASK_MAP[url]
}