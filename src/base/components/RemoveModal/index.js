import {message, Modal} from "antd";
import {useCallback} from "react";
import {execute, tryExecute} from "@common/utils";
import {usePostM} from "@common/hooks";

export function RemoveModal({close,info,refresh}){
    const {doFetch,loading} = usePostM()
    const onOk = useCallback(()=>{
        tryExecute(async ()=>{
            // console.log('info.params', info.params)
            await doFetch(info.url, info.params)
            message.success('删除成功！')
            execute(refresh)
            execute(close)
        })
    },[info,close,refresh])

    return <Modal title={'删除'}
                  open
                  confirmLoading={loading}
                  onCancel={close}
                  onOk={onOk}
                  maskClosable={false}>
        请确认是否删除 {info?.text} ？
    </Modal>
}