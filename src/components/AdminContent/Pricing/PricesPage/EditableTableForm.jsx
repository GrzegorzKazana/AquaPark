import React, { useState, useMemo, useCallback } from "react";
import styles from "./EditableTableForm.module.scss";
import { Table, Popconfirm, Form, DatePicker, Input, Button } from "antd";
import moment from "moment";
import {
  EditableFormRow,
  EditableCell
} from "../../Common/EditableTable/EditableRow";

const PeriodDiscountForm = Form.create()(
  ({
    ticket,
    handleSubmit,
    handleDelete,
    form: { getFieldDecorator, validateFields }
  }) => {
    const handleSubmitLocal = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          handleSubmit({
            rate: values.rate,
            dateStart: values.startEndTime[0].format("YYYY-MM-DD"),
            dateEnd: values.startEndTime[1].format("YYYY-MM-DD")
          });
        }
      });
    };

    return (
      <Form layout="inline" onSubmit={handleSubmitLocal}>
        <Form.Item label="Okres">
          {getFieldDecorator("startEndTime", {
            rules: [
              { type: "array", required: true, message: "Please select time!" }
            ],
            initialValue: ticket.periodDiscount && [
              moment(ticket.periodDiscount.dateStart),
              moment(ticket.periodDiscount.dateEnd)
            ]
          })(
            <DatePicker.RangePicker
              format="YYYY-MM-DD"
              onChange={(dates, dateStrings) => console.log(dates, dateStrings)}
            />
          )}
        </Form.Item>
        <Form.Item label="Zniżka">
          {getFieldDecorator("rate", {
            rules: [
              {
                required: true,
                message: `Rate is required.`
              }
            ],
            initialValue: ticket.periodDiscount && ticket.periodDiscount.rate
          })(<Input type="number" />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Zapisz
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={handleDelete}
            disabled={ticket.periodDiscount === null}
          >
            Usuń
          </Button>
        </Form.Item>
      </Form>
    );
  }
);

const EditableTable = ({ columns, dataDefault, onSubmit, rowKey }) => {
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

  const handleDiscountSubmit = index => discountData => {
    console.log(discountData);
    setDataSource(
      dataSource.map((data, idx) =>
        index === idx ? { ...data, periodDiscount: discountData } : data
      )
    );
  };

  const handleDiscountDelete = index => () =>
    setDataSource(
      dataSource.map((data, idx) =>
        index === idx ? { ...data, periodDiscount: null } : data
      )
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
        expandedRowRender={(record, index) => (
          <PeriodDiscountForm
            index={index}
            ticket={record}
            handleSubmit={handleDiscountSubmit(index)}
            handleDelete={handleDiscountDelete(index)}
          />
        )}
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
