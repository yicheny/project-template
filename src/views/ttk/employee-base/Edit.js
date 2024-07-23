import React, {useEffect, useMemo, useState} from 'react';
import _ from 'lodash'
import {Modal, Select, InputNumber, message} from "antd";
import {FormItem} from "@base/components";
import {usePostM} from "@common/hooks";
import {tryExecute} from "@common/utils";
import {checkRequired} from "@common/bizUtils";
import {useParams} from "@common/bizHooks";

export default function EditModal({close,info,refresh}) {
    const {doFetch,loading} = usePostM()
    const formConfig = useFormConfig();
    const {params,dispatch} = useParams({tags:[], ...info.data})

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
            console.log('params', params)

            checkRequired(formConfig, params)
            await doFetch(info.url, params)
            message.success("保存成功！")
            close()
            refresh()
        })
    }
}

function useFormConfig(){
    const tagsOpts = useTagsOpts()
    return useMemo(()=>{
        return [
            {
                label:"Name",
                bind:"name",
                required:true,
            },
            {
                label:"Point",
                bind:"point",
                component:InputNumber,
                required:true,
                min:0,
                max:9999,
                precision:0,
            },
            {
                label:"User Count",
                bind:"userCount",
                component:InputNumber,
                required:true,
                min:1,
                max:5,
                precision:0,
            },
            {
                label:"Yield",
                bind:"yield",
                component:InputNumber,
                required:true,
                min:0,
                max:3,
                precision:4,
                step:0.1
            },
            {
                label:"Tags",
                bind:"tags",
                component:Select,
                options:tagsOpts,
                mode:"multiple",
                maxCount:5,
                maxTagCount:1,
            },
        ]
    },[tagsOpts])
}

function useTagsOpts(){
    const {doFetch} = usePostM()
    const [options,setOptions] = useState()

    useEffect(() => {
        doFetch(`/ttk/tag/query`).then(data => {
            setOptions(_.map(data, x=>({label:x, value:x})))
        })
    }, [doFetch]);

    return options
}
