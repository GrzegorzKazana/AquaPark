import React, { useState, useMemo, useCallback } from "react";
import styles from "./EditableTable.module.scss";
import { Table, Button, Popconfirm } from "antd";
import { EditableFormRow, EditableCell } from "./EditableRow";

const EditableTable = ({
  columns,
  dataDefault,
  onSubmit,
  rowKey,
  createExpandedRowRender
}) => {
  const [dataSource, setDataSource] = useState(dataDefault);

  const handleSave = useCallback(
    row =>
      setDataSource(ds =>
        ds.map(item =>
          row[rowKey] === item[rowKey] ? { ...item, ...row } : item
        )
      ),
    [rowKey]
  );

  const handleDelete = useCallback(
    ticketTypeId =>
      setDataSource(ds =>
        ds.length > 1 ? ds.filter(item => item[rowKey] !== ticketTypeId) : ds
      ),
    [rowKey]
  );

  const handleAdd = () => {
    const newData = Object.assign({}, dataSource[dataSource.length - 1], {
      ticketTypeId: parseInt(dataSource[dataSource.length - 1][rowKey] + 1)
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
                numberInput: col.numberInput,
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
            onConfirm={() => handleDelete(record[rowKey])}
          >
            <Button shape="circle" icon="delete" style={{ float: "right" }} />
          </Popconfirm>
        )
      }
    ],
    [columns, handleDelete, handleSave, rowKey]
  );

  return (
    <>
      <Table
        rowKey={rowKey}
        components={components}
        rowClassName={styles.EditableRow}
        bordered
        dataSource={dataSource}
        columns={wrappedColumns}
        pagination={false}
        expandedRowRender={
          createExpandedRowRender &&
          createExpandedRowRender(dataSource, setDataSource)
        }
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
