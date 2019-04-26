import React from "react";
import styles from "./AdminContent.module.scss";
import NavBar from "./NavBar/NavBar";
import MainMenu from "./MainMenu/MainMenu";
import { Layout } from "antd";

const AdminContent = () => (
  <Layout className={styles.Layout}>
    <Layout.Header className={styles.Header}>
      <NavBar />
    </Layout.Header>
    <Layout>
      <Layout.Sider className={styles.Sider} theme="light">
        <MainMenu />
      </Layout.Sider>
      <Layout.Content className={styles.Content}>asd</Layout.Content>
    </Layout>
  </Layout>
);
export default AdminContent;
