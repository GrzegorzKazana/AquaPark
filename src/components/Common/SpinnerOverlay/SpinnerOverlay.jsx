import React from "react";
import styles from "./SpinnerOverlay.module.scss";
import { Spin } from "antd";

const SpinnerOverlay = ({ open }) =>
  open ? (
    <div className={styles.SpinnerOverlay}>
      <Spin spinning={open} size="large" />
    </div>
  ) : null;
export default SpinnerOverlay;
