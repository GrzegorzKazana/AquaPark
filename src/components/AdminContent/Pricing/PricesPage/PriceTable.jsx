import React, { useState, useEffect } from "react";
import styles from "./PriceTable.module.scss";
import { Table, Input, Form, Button, Popconfirm } from "antd";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const EditableCell = props => {
  const [editing, setEditing] = useState(false);
  const inputRef = React.createRef();

  const toggleEdit = () => setEditing(!editing);
  useEffect(() => {
    editing && inputRef.current.focus();
  }, [editing]);

  const save = (e, form) => {
    const { record, handleSave } = props;

    form.validateFields((error, values) => {
      if (!(error && error[e.currentTarget.id])) {
        toggleEdit();
        handleSave({ ...record, ...values });
      }
    });
  };

  const {
    editable,
    dataIndex,
    title,
    record,
    index,
    handleSave,
    ...restProps
  } = props;

  return (
    <td {...restProps}>
      {editable ? (
        <EditableContext.Consumer>
          {form => {
            return editing ? (
              <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                  rules: [
                    {
                      required: true,
                      message: `${title} is required.`
                    }
                  ],
                  initialValue: record[dataIndex]
                })(
                  <Input
                    ref={inputRef}
                    onPressEnter={e => save(e, form)}
                    onBlur={e => save(e, form)}
                  />
                )}
              </Form.Item>
            ) : (
              <div
                className={styles.EditableCellValueWrap}
                onClick={toggleEdit}
              >
                {restProps.children}
              </div>
            );
          }}
        </EditableContext.Consumer>
      ) : (
        restProps.children
      )}
    </td>
  );
};

const dataDefeault = [
  {
    key: "0",
    ticketType: "Bilet poranny 6:00-12:00",
    ticketPrice: 30
  },
  {
    key: "1",
    ticketType: "Bilet popołudniowy 12:00-18:00",
    ticketPrice: 30
  },
  {
    key: "2",
    ticketType: "Bilet wieczorny 18:00-22:00",
    ticketPrice: 40
  },
  {
    key: "3",
    ticketType: "Bilet całodniowy",
    ticketPrice: 50
  }
];

const columns = [
  {
    title: "Rodzaj biletu",
    dataIndex: "ticketType",
    key: "ticketType",
    editable: true
  },
  {
    title: "Cena",
    dataIndex: "ticketPrice",
    key: "ticketPrice",
    editable: true
  }
];

const EditableTable = () => {
  const [dataSource, setDataSource] = useState(dataDefeault);

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
      key: dataSource.length.toString()
    });
    setDataSource([...dataSource, newData]);
  };

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell
    }
  };

  const columnsWithEdit = columns.map(col =>
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
  );

  const columnsWithDelete = [
    ...columnsWithEdit,
    {
      title: "",
      dataIndex: "",
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a href="javascript:;">Delete</a>
          </Popconfirm>
        ) : null
    }
  ];

  return (
    <>
      <Table
        components={components}
        rowClassName={styles.EditableRow}
        bordered
        dataSource={dataSource}
        columns={columnsWithDelete}
        pagination={false}
      />
      <div className={styles.ButtonContainer}>
        <Button
          type="primary"
          className={styles.ActionButton}
          onClick={handleAdd}
        >
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
