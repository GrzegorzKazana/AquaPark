import React from "react";
import styles from "./UserContent.module.scss";
import NavBar from "./NavBar/NavBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import AreasPage from "./AreasPage/AreasPage";
import PricingPage from "./PricingPage/PricingPage";
import { Layout } from "antd";

const UserContent = () => (
  <Layout className={styles.Layout}>
    <Layout.Header className={styles.Header}>
      <NavBar />
    </Layout.Header>
    <Layout.Content className={styles.Content}>
      {/* <WelcomePage /> */}
      {/* <AreasPage /> */}
      <PricingPage />
    </Layout.Content>
  </Layout>
);
export default UserContent;
