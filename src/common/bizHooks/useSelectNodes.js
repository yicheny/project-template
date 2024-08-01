import {useCallback, useState} from "react";
import {message} from "antd";
import _ from "lodash";

export function useSelectNodes(maxCount){
    const [selectNodes, setSelectNodes] = useState([])

    const handleSelect = useCallback((id) => {
        if(selectNodes.includes(id)) {
            const next = selectNodes.filter(n => n !== id);
            setSelectNodes(next)
        }else {
            if(selectNodes.length >= maxCount) return message.warning(`选项数量不能超过最大值${maxCount}，请取消后再选择！`)
            selectNodes.push(id);
            setSelectNodes(_.clone(selectNodes))
        }
    },[maxCount, selectNodes])

    return {selectNodes,handleSelect,setSelectNodes}
}