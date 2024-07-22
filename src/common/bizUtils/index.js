import _ from "lodash";
import {isEm} from "@common/utils";

export function checkRequired(config,params){
    _.forEach(config,(o)=>{
        if(!o.required) return ;
        if(isEm(params[o.bind])) throw new Error(`请填写必填项：${o.label}`)
    })
}