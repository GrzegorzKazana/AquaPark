import React, { useState, useEffect } from "react";
import styles from "./EditableTable.module.scss";
import { Input, Form } from "antd";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

export const EditableFormRow = Form.create()(EditableRow);

export const EditableCell = props => {
  const [editing, setEditing] = useState(false);
  const inputRef = React.createRef();

  const toggleEdit = () => setEditing(!editing);
  useEffect(() => {
    editing && inputRef.current.focus();
  }, [editing, inputRef]);

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
