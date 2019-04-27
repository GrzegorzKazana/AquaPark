import React, { useState, useMemo } from "react";
import styles from "./EditableTable.module.scss";
import { Table, Button, Popconfirm } from "antd";
import { EditableFormRow, EditableCell } from "./EditableRow";

const EditableTable = ({ columns, dataDefault }) => {
  const [dataSource, setDataSource] = useState(dataDefault);

  const handleSave = row =>
    setDataSource(
      dataSource.map(item =>
        row.key === item.key ? { ...item, ...row } : item
      )
    );

  const handleDelete = key =>
    dataSource.length > 1 &&
    setDataSource(dataSource.filter(item => item.key !== key));

  const handleAdd = () => {
    const newData = Object.assign({}, dataSource[dataSource.length - 1], {
      key: parseInt(dataSource[dataSource.length - 1].key + 1).toString()
    });
    setDataSource([...dataSource, newData]);
  };

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell
    }
  };

  const wrappedColumns = useMemo(
    () => [
      ...columns.map(col =>
        col.editable
          ? {
              ...col,
              onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave
              })
            }
          : col
      ),
      {
        title: "",
        dataIndex: "",
        render: (text, record) =>
          dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              style={{ float: "right" }}
              onConfirm={() => handleDelete(record.key)}
            >
              <Button shape="circle" icon="delete" style={{ float: "right" }} />
            </Popconfirm>
          ) : null
      }
    ],
    [columns]
  );

  return (
    <>
      <Table
        components={components}
        rowClassName={styles.EditableRow}
        bordered
        dataSource={dataSource}
        columns={wrappedColumns}
        pagination={false}
      />
      <div className={styles.ButtonContainer}>
        <Button className={styles.ActionButton} onClick={handleAdd}>
          Dodaj
        </Button>
        <Button type="primary" className={styles.ActionButton}>
          Zapisz
        </Button>
      </div>
    </>
  );
};
export default EditableTable;
