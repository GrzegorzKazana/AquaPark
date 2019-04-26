import React, { useState } from "react";
import styles from "./UserContent.module.scss";
import NavBar from "./NavBar/NavBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import AreasPage from "./AreasPage/AreasPage";
import PricingPage from "./PricingPage/PricingPage";
import LogInModal from "./Modals/LogInModal";
import { Layout } from "antd";

const UserContent = () => {
  const [openPage, setOpenPage] = useState("0");
  const [loginModalOpen, setloginModalOpen] = useState(true);

  const loginSubmit = vals => {
    console.log(vals);
    setloginModalOpen(false);
  };

  return (
    <>
      <Layout className={styles.Layout}>
        <Layout.Header className={styles.Header}>
          <NavBar
            setOpenPage={setOpenPage}
            onOpenLoginModal={() => setloginModalOpen(true)}
          />
        </Layout.Header>
        <Layout.Content className={styles.Content}>
          {openPage === "0" && <WelcomePage />}
          {openPage === "1" && <AreasPage />}
          {openPage === "2" && <PricingPage />}
        </Layout.Content>
      </Layout>
      <LogInModal
        open={loginModalOpen}
        handleSubmit={loginSubmit}
        handleCancel={() => setloginModalOpen(false)}
      />
    </>
  );
};
export default UserContent;
