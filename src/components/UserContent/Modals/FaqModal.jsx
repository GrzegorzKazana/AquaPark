import React from "react";
import { Modal, Button } from "antd";

const FaqModal = ({ open, handleClose }) => {
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
export default FaqModal;
