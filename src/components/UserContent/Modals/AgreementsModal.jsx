import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";

const AgreementsModal = ({ open, handleClose }) => {
  const footer = (
    <Button type="primary" onClick={handleClose}>
      Ok
    </Button>
  );

  return (
    <Modal title="FAQ" visible={open} onOk={handleClose} footer={footer}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default AgreementsModal;

AgreementsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
