import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Checkbox } from "antd";

const UserDataForm = ({
  formName,
  initialData,
  onSubmit,
  disabled,
  acceptTermsFooter,
  passwordInput,
  form: { getFieldDecorator, resetFields, validateFields, getFieldValue },
  ...formProps
}) => {
  useEffect(() => {
    //reload initials when it changes, like when user logs in
    resetFields();
  }, [initialData, resetFields]);

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => !err && onSubmit(values));
  };

  const validateConfirmPassword = (rule, value, callback) =>
    value && value === getFieldValue("password")
      ? callback()
      : callback("Two passwords that you enter is inconsistent!");

  return (
    <Form
      id={formName}
      onSubmit={handleSubmit}
      layout="horizontal"
      {...formProps}
    >
      <Form.Item label="E-mail" style={{ margin: "0px" }}>
        {getFieldDecorator("email", {
          initialValue: initialData ? initialData.email : "",
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
      <Form.Item label="Name" style={{ margin: "0px" }}>
        {getFieldDecorator("name", {
          initialValue: initialData ? initialData.name : "",
          rules: [
            {
              required: true,
              message: "Please input your Name"
            }
          ]
        })(<Input disabled={disabled} />)}
      </Form.Item>
      <Form.Item label="Surname" style={{ margin: "0px" }}>
        {getFieldDecorator("surname", {
          initialValue: initialData ? initialData.surname : "",
          rules: [
            {
              required: true,
              message: "Please input your Surname!"
            }
          ]
        })(<Input disabled={disabled} />)}
      </Form.Item>
      {passwordInput && (
        <>
          <Form.Item label="Password" style={{ margin: "0px" }}>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password!"
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item label="Confirm Password" style={{ margin: "0px" }}>
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
        </>
      )}
      {acceptTermsFooter && (
        <Form.Item style={{ margin: "0px" }}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked",
            rules: [{ required: true, message: "Please accept the agreement" }]
          })(
            <Checkbox>
              I have read the <a href="# ">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
      )}
    </Form>
  );
};
export default Form.create()(UserDataForm);

PropTypes.propTypes = {
  formName: PropTypes.string,
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  acceptTermsFooter: PropTypes.bool,
  passwordInput: PropTypes.bool,
  form: PropTypes.object,
  formProps: PropTypes.object
};
