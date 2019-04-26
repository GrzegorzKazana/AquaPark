import React from "react";
import styles from "./WelcomePage.module.scss";
import { Card } from "antd";

const WelcomePage = () => (
  <Card title="Witaj w aquaparku" className={styles.Card}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
export default WelcomePage;
