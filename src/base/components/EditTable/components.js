import React, { useContext, useEffect, useRef } from 'react';
import { Input, Form } from 'antd';

const EditableContext = React.createContext(null);

export const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

export const EditableCell = ({
                          title,
                          editable,
                          children,
                          dataIndex,
                          record,
                          handleSave,
                          component: Component = Input,
                          componentProps = {},
                          ...restProps
                      }) => {
    const inputRef = useRef(null);
    const form = useContext(EditableContext);

    useEffect(() => {
        if (record && dataIndex in record) {
            form.setFieldsValue({
                [dataIndex]: record[dataIndex],
            });
        }
    }, [dataIndex, form, record]);

    const save = async () => {
        try {
            const values = await form.validateFields();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                // rules={[
                //     {
                //         required: true,
                //         message: `${title} is required.`,
                //     },
                // ]}
            >
                <Component ref={inputRef} onBlur={save} {...componentProps} />
            </Form.Item>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};
