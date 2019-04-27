import React, { useState } from "react";
import styles from "./CustomerDataView.module.scss";
import { Card, Form, Input, Button, Switch } from "antd";

const defaultUserData = {
  email: "skrrt@gmail.com",
  name: "Adam",
  surname: "Kowlaski"
};

const CustomerDataForm = Form.create()(
  ({
    disabled,
    handleSubmit,
    form,
    form: { getFieldDecorator, getFieldValue, validateFields, resetFields }
  }) => {
    const handleSubmitLocal = e => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          handleSubmit(values);
        }
      });
    };

    return (
      <Form id="myForm" onSubmit={handleSubmitLocal}>
        <Form.Item label="E-mail">
          {getFieldDecorator(
            "email",
            { initialValue: defaultUserData.email || "" },
            {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            }
          )(<Input disabled={disabled} />)}
        </Form.Item>
        <Form.Item label="Name">
          {getFieldDecorator(
            "name",
            { initialValue: defaultUserData.name || "" },
            {
              rules: [
                {
                  required: true,
                  message: "Please input your Name"
                }
              ]
            }
          )(<Input disabled={disabled} />)}
        </Form.Item>
        <Form.Item label="Surname">
          {getFieldDecorator(
            "Surname",
            { initialValue: defaultUserData.surname || "" },
            {
              rules: [
                {
                  required: true,
                  message: "Please input your Surname!"
                }
              ]
            }
          )(<Input disabled={disabled} />)}
        </Form.Item>
      </Form>
    );
  }
);

export const CustomerDataView = ({ handleSubmit }) => {
  const [edditing, setEdditing] = useState(false);

  const onSubmit = vals => {
    //do something with form data
    console.log(vals);
    handleSubmit();
  };

  return (
    <Card title="Dane" style={{ height: "100%" }}>
      <div className={styles.CustomerDataSwitchWrapper}>
        <Switch checked={edditing} onChange={val => setEdditing(val)} />
        <h2>Edytuj dane z profilu</h2>
      </div>
      <CustomerDataForm handleSubmit={onSubmit} disabled={!edditing} />
      <Button
        form="myForm"
        key="submit"
        htmlType="submit"
        type="primary"
        style={{ float: "right" }}
      >
        Next
      </Button>
    </Card>
  );
};
