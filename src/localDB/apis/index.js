import {syncExecute} from "@common/utils";
import {TASK_MAP} from "./config";

export const mockPost = (...params) => mockApi('post', ...params)

async function mockApi(method, url, params){
    // url以 /api 开头，所以抹掉
    url = url.slice(4)

    const task = taskFor(url)
    if (task === 404) return Promise.reject(wrapNotFound())
    const data =  await syncExecute(task, params)

    // console.log('data', data)

    return Promise.resolve(wrapSuccess(data))
}

function taskFor(url){
    return TASK_MAP[url] || 404
}

function wrapSuccess(data){
    return {
        data:{
            code:0,
            data,
            msg:"success"
        }
    }
}

function wrapNotFound(){
    return {
        code:404,
        message:"Not Found"
    }
}