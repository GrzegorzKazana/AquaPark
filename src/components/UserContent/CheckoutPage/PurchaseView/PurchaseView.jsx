import React from "react";
import PropTypes from "prop-types";
import styles from "./PurchaseView.module.scss";
import { Card, Button } from "antd";
import { PayuView } from "./PayuView";

export const PurchaseView = ({ handleCancel, handleBuy }) => (
  <Card
    style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
    bodyStyle={{ flexGrow: 1, position: "relative" }}
  >
    <div className={styles.PurchaseView}>
      <PayuView handleBuy={handleBuy} />
    </div>
    <Button
      style={{ position: "absolute", bottom: 24, left: 24 }}
      onClick={handleCancel}
    >
      Prev
    </Button>
  </Card>
);

PurchaseView.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleBuy: PropTypes.func.isRequired
};
