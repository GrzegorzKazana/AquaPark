import React, { useState, useMemo, useCallback } from "react";
import styles from "./EditableTable.module.scss";
import { Table, Button, Popconfirm } from "antd";
import { EditableFormRow, EditableCell } from "./EditableRow";

const EditableTable = ({ columns, dataDefault, onSubmit }) => {
  const [dataSource, setDataSource] = useState(dataDefault);

  const handleSave = useCallback(
    row =>
      setDataSource(ds =>
        ds.map(item => (row.key === item.key ? { ...item, ...row } : item))
      ),
    []
  );

  const handleDelete = useCallback(
    key =>
      setDataSource(ds =>
        ds.length > 1 ? ds.filter(item => item.key !== key) : ds
      ),
    []
  );

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
        render: (text, record) => (
          <Popconfirm
            title="Sure to delete?"
            style={{ float: "right" }}
            onConfirm={() => handleDelete(record.key)}
          >
            <Button shape="circle" icon="delete" style={{ float: "right" }} />
          </Popconfirm>
        )
      }
    ],
    [columns, handleDelete, handleSave]
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
        <Button
          type="primary"
          className={styles.ActionButton}
          onClick={() => onSubmit(dataSource)}
        >
          Zapisz
        </Button>
      </div>
    </>
  );
};
export default EditableTable;
