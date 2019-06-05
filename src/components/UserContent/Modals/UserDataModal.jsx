import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";
import UserDataForm from "../../Common/UserDataForm/UserDataForm";

const UserDataModal = ({ userData, open, handleSubmit, handleClose }) => {
  const formName = "editUserDataForm";

  const footer = [
    <Button key="cancel" onClick={handleClose}>
      Cancel
    </Button>,
    <Button
      form={formName}
      key="submit"
      htmlType="submit"
      type="primary"
      loading={false}
    >
      Submit
    </Button>
  ];

  return (
    <Modal
      visible={open}
      title="Sign Up"
      okText="Ok"
      footer={footer}
      onCancel={handleClose}
    >
      <UserDataForm
        formName={formName}
        initialData={userData}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};
export default UserDataModal;

UserDataModal.propTypes = {
  userData: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
