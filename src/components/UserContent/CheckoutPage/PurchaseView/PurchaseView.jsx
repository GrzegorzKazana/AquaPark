import React from "react";
import styles from "./PurchaseView.module.scss";
import { Card, Button } from "antd";

export const PurchaseView = ({ handleCancel }) => (
  <Card
    style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
    bodyStyle={{ flexGrow: 1, position: "relative" }}
  >
    <div className={styles.PurchaseView}>
      <Button type="primary" size="large">
        Kupuję i płacę
      </Button>
    </div>
    <Button
      style={{ position: "absolute", bottom: 24, left: 24 }}
      onClick={handleCancel}
    >
      Prev
    </Button>
  </Card>
);
