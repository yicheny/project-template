import {curryUsePost} from "@common/hooks/usePost";
import {mockPost} from "../../localDB/apis";

const OPEN_LOG = false;

export const usePostM = curryUsePost(mockPost,{fetchBefore, fetchSuccess, fetchFail})

function fetchBefore(props){
    log("触发请求：", props)
}

function fetchSuccess(props){
    log("请求成功：", props)
}

function fetchFail(props){
    log("请求失败：", props)
}

function log(...info){
    if(OPEN_LOG) console.log(...info)
}