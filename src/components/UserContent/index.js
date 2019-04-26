import React, { useState } from "react";
import styles from "./UserContent.module.scss";
import NavBar from "./NavBar/NavBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import AreasPage from "./AreasPage/AreasPage";
import PricingPage from "./PricingPage/PricingPage";
import { Layout } from "antd";

const UserContent = () => {
  const [openPage, setOpenPage] = useState("0");
  return (
    <Layout className={styles.Layout}>
      <Layout.Header className={styles.Header}>
        <NavBar setOpenPage={setOpenPage} />
      </Layout.Header>
      <Layout.Content className={styles.Content}>
        {openPage === "0" && <WelcomePage />}
        {openPage === "1" && <AreasPage />}
        {openPage === "2" && <PricingPage />}
      </Layout.Content>
    </Layout>
  );
};
export default UserContent;
