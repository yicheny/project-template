import React, {useMemo} from 'react';
import _ from 'lodash'
import {Modal, InputNumber, message} from "antd";
import {FormItem} from "@base/components";
import {usePostM} from "@common/hooks";
import {tryExecute} from "@common/utils";
import {checkRequired} from "@common/bizUtils";
import {useParams} from "@common/bizHooks";

export default function EditModal({close,info,refresh}) {
    const {doFetch,loading} = usePostM()
    const formConfig = useFormConfig();
    const {params,dispatch} = useParams({ funds:1000, targetFunds: 6000, countdown:5, employeeStack:[], ...info.data })

    return <Modal title={info.title}
                  confirmLoading={loading}
                  open
                  onOk={handleOk}
                  onCancel={close}
                  maskClosable={false}>
        {
            _.map(formConfig, f=>{
                return <FormItem style={{width:240}}
                                 defaultValue={params[f.bind]}
                                 onValue={v => dispatch(f.bind, v)} {...f}/>
            })
        }
    </Modal>

    function handleOk(){
        tryExecute(async () => {
            // console.log('params', params)

            checkRequired(formConfig, params)
            await doFetch(info.url, params)
            message.success("保存成功！")
            close()
            refresh()
        })
    }
}

function useFormConfig(){
    return useMemo(()=>{
        return [
            {
                label:"Name",
                bind:"name",
                required:true,
            },
            {
                label:"funds",
                bind:"funds",
                component:InputNumber,
                required:true,
                min:0,
                max:999999,
                precision:0,
            },
            {
                label:"countdown",
                bind:"countdown",
                component:InputNumber,
                required:true,
                min:0,
                max:30,
                precision: 0
            },
            {
                label:"targetFunds",
                bind:"targetFunds",
                component:InputNumber,
                required:true,
                min:0,
                max:999999,
                precision:0,
            },
            {
                label:"memo",
                bind:"memo",
            },
        ]
    },[])
}
