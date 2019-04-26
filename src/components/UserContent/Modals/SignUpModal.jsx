import React from "react";
import { Modal, Form, Input, Checkbox } from "antd";

const SignUpModal = ({
  handleSubmit,
  handleCancel,
  open,
  form: { getFieldDecorator, getFieldValue, validateFields, resetFields }
}) => {
  const onCancel = () => {
    resetFields();
    handleCancel();
  };

  const onSubmit = () =>
    validateFields((err, values) => !err && handleSubmit(values));

  const validateConfirmPassword = (rule, value, callback) =>
    value && value === getFieldValue("password")
      ? callback()
      : callback("Two passwords that you enter is inconsistent!");

  return (
    <Modal
      visible={open}
      title="Log in"
      okText="Ok"
      onCancel={onCancel}
      onOk={onSubmit}
    >
      <Form>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
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
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              }
            ]
          })(<Input type="password" />)}
        </Form.Item>
        <Form.Item label="Confirm Password">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: validateConfirmPassword
              }
            ]
          })(<Input type="password" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("agreement", {
            valuePropName: "checked",
            rules: [{ required: true, message: "Please accept the agreement" }]
          })(
            <Checkbox>
              I have read the <a href="# ">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default Form.create({ name: "log_in_form" })(SignUpModal);
