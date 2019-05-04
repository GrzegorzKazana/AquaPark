import React, { useEffect } from "react";
import styles from "./CustomerDataView.module.scss";
import { Card, Form, Input, Button, Switch, Divider, Icon } from "antd";

const UserDataForm = ({
  userLoaded,
  purchaseUserData,
  disabled,
  handleSubmit,
  form,
  form: { getFieldDecorator, resetFields }
}) => {
  useEffect(() => {
    console.log(purchaseUserData);
    resetFields();
  }, [userLoaded, purchaseUserData, resetFields]);

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
        {getFieldDecorator("email", {
          initialValue: purchaseUserData ? purchaseUserData.email : "",
          rules: [
            {
              required: true,
              message: "Please input your E-mail!"
            },
            {
              type: "email",
              message: "The input is not valid E-mail!"
            }
          ]
        })(<Input disabled={disabled} />)}
      </Form.Item>
      <Form.Item label="Name">
        {getFieldDecorator("name", {
          initialValue: purchaseUserData ? purchaseUserData.name : "",
          rules: [
            {
              required: true,
              message: "Please input your Name"
            }
          ]
        })(<Input disabled={disabled} />)}
      </Form.Item>
      <Form.Item label="Surname">
        {getFieldDecorator("surname", {
          initialValue: purchaseUserData ? purchaseUserData.surname : "",
          rules: [
            {
              required: true,
              message: "Please input your Surname!"
            }
          ]
        })(<Input disabled={disabled} />)}
      </Form.Item>
    </Form>
  );
};

export const CustomerDataView = ({
  edditing,
  setEdditing,
  userLoaded,
  purchaseUserData,
  handleSubmit,
  onOpenLoginModal,
  handleCancel
}) => {
  const onSubmit = vals => {
    //do something with form data
    console.log(vals);
    handleSubmit(vals);
  };

  const CustomerDataForm = Form.create()(UserDataForm);

  return (
    <Card
      title="Dane"
      style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
      bodyStyle={{ flexGrow: 1, display: "flex" }}
    >
      <div className={styles.CustomerDataContent}>
        {userLoaded ? (
          <div className={styles.CustomerDataSwitchWrapper}>
            <Switch checked={edditing} onChange={val => setEdditing(val)} />
            <h2>Edytuj dane z profilu</h2>
          </div>
        ) : (
          <div className={styles.CustomerDataButtonWrapper}>
            <Button onClick={onOpenLoginModal}>
              <Icon type="login" />
              Zaloguj się
            </Button>
            <Divider>Lub wypełnij formularz</Divider>
          </div>
        )}

        <CustomerDataForm
          userLoaded={userLoaded}
          purchaseUserData={purchaseUserData}
          handleSubmit={onSubmit}
          disabled={userLoaded && !edditing}
        />
        <div>
          <Button onClick={handleCancel}>Prev</Button>
          <Button
            form="myForm"
            key="submit"
            htmlType="submit"
            type="primary"
            style={{ float: "right" }}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};
