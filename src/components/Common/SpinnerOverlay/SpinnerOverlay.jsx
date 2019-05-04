import React from "react";
import styles from "./SpinnerOverlay.module.scss";
import { Spin } from "antd";

const SpinnerOverlay = ({ open }) => (
  <div className={styles.SpinnerOverlay}>
    <Spin spinning={open} size="large" />
  </div>
);
export default SpinnerOverlay;
