import React from "react";
import styles from "./UserContent.module.scss";
import NavBar from "./NavBar/NavBar";
import { Layout } from "antd";

const UserContent = () => (
  <Layout className={styles.Layout}>
    <Layout.Header className={styles.Header}>
      <NavBar />
    </Layout.Header>
    <Layout.Content className={styles.Content}>asd</Layout.Content>
  </Layout>
);
export default UserContent;
