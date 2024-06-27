import {Modal} from "antd";
import {useGetQuestions} from "./options";

export default function QaModal({close,value}) {
    const questions = useGetQuestions(value?.book)

    console.log('questions', questions)

    return <Modal title={'QA'} open onOk={close} onCancel={close}>
        QaModal
    </Modal>
}