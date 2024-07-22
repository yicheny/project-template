import React from 'react';
import {Modal} from "antd";

export default function EditModal({close,info,refresh}) {
    return <Modal title={info.title} open onOk={close} onCancel={close} maskClosable={false}>

    </Modal>
}