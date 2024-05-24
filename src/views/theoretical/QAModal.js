import React, {useState} from 'react';
import {Modal} from "antd";
import {useGetQuestions} from "./options";

export default function QaModal({close,value}) {
    const questions = useGetQuestions(value?.book)
    const [status,setStatus] = useState([])

    console.log('questions', questions)

    return <Modal title={'QA'} open onOk={close} onCancel={close}>
        QaModal
    </Modal>
}