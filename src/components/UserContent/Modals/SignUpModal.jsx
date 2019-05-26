import React from "react";
import { Modal, Button } from "antd";
import UserDataForm from "../../Common/UserDataForm/UserDataForm";

const SignUpModal = ({
  handleSubmit,
  handleCancel,
  open,
  loading,
  onClickTerms
}) => {
  const formName = "registerForm";

  const footer = [
    <Button key="cancel" onClick={handleCancel}>
      Cancel
    </Button>,
    <Button
      form={formName}
      key="submit"
      htmlType="submit"
      type="primary"
      loading={loading}
    >
      Submit
    </Button>
  ];

  return (
    <Modal visible={open} title="Sign Up" okText="Ok" footer={footer}>
      <UserDataForm
        formName={formName}
        onSubmit={handleSubmit}
        acceptTermsFooter={true}
        onClickTerms={onClickTerms}
        passwordInput={true}
      />
    </Modal>
  );
};
export default SignUpModal;
