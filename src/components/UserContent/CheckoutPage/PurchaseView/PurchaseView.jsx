import React from "react";
import styles from "./PurchaseView.module.scss";
import { Card, Button } from "antd";

export const PurchaseView = ({ handleCancel }) => (
  <Card
    style={{ height: "100%", display: "flex" }}
    bodyStyle={{ flexGrow: 1, position: "relative" }}
  >
    <div className={styles.PurchaseView}>
      <Button type="primary" size="large">
        Kupuję i płacę
      </Button>
    </div>
    <Button
      style={{ position: "absoulte", bottom: 32, left: 0 }}
      onClick={handleCancel}
    >
      Prev
    </Button>
  </Card>
);
