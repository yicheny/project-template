import React, { useState } from 'react';
import { Table } from 'antd';
import { EditableRow, EditableCell } from './components'
// import 'antd/dist/antd.css';

const EditTable = ({ dataSource, columns, ...props }) => {
    const [data, setData] = useState(dataSource);

    const handleSave = (row) => {
        const newData = [...data];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
    };

    const enhancedColumns = columns.map((col) => {

        if (!col.component_option) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: true,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
                component: col.component_option.component,
                componentProps: col.component_option.props,
            }),
        };
    });

    return (
        <Table
            components={{
                body: {
                    row: EditableRow,
                    cell: EditableCell,
                },
            }}
            // bordered
            dataSource={data}
            columns={enhancedColumns}
            rowClassName="editable-row"
            // pagination={false}
            {...props}
        />
    );
};

export default EditTable;
