import React, {useState} from 'react';
import {Button, Select} from "antd";
import {useBookOptions} from "./options";
import {FormItem} from "@base/components";
import QaModal from "./QAModal";
import {useOpenInfo} from "@common/hooks";

export default function Theoretical(props) {
    const [book,setBook] = useState('有效率的和牌方法')
    const openInfo = useOpenInfo()

    return (<div>
        <FormItem label={'分类'}
                  placeholder={'请选择……'}
                  value={book}
                  component={Select}
                  onChange={setBook}
                  options={useBookOptions()}/>
        <Button disabled={!book}
                type={'primary'}
                onClick={()=>openInfo.setInfo('qa', {book})}>答题</Button>
        {
            openInfo.checkType('qa') && <QaModal {...openInfo}/>
        }
    </div>);
}