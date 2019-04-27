import React from "react";
import { Modal, Form, Input, Icon } from "antd";

const LogInModal = ({
  handleSubmit,
  handleCancel,
  open,
  form: { getFieldDecorator, validateFields, resetFields }
}) => {
  const onCancel = () => {
    resetFields();
    handleCancel();
  };

  const onSubmit = () =>
    validateFields((err, values) => !err && handleSubmit(values));

  return (
    <Modal
      visible={open}
      title="Log in"
      okText="Ok"
      onCancel={onCancel}
      onOk={onSubmit}
    >
      <Form>
        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default Form.create({ name: "log_in_form" })(LogInModal);