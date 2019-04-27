import React, { useState } from "react";
import styles from "./UserContent.module.scss";
import NavBar from "./NavBar/NavBar";
import WelcomePage from "./WelcomePage/WelcomePage";
import AreasPage from "./AreasPage/AreasPage";
import PricingPage from "./PricingPage/PricingPage";
import LogInModal from "./Modals/LogInModal";
import SignUpModal from "./Modals/SignUpModal";
import FaqModal from "./Modals/FaqModal";
import { Layout } from "antd";

const views = {
  WELCOME: "0",
  AREAS: "1",
  PRICES: "2"
};

const UserContent = () => {
  const [openPage, setOpenPage] = useState("0");
  const [loginModalOpen, setloginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);

  const loginSubmit = vals => {
    console.log(vals);
    setloginModalOpen(false);
  };

  const signUpSubmit = vals => {
    console.log(vals);
    setSignUpModalOpen(false);
  };

  return (
    <>
      <Layout className={styles.Layout}>
        <Layout.Header className={styles.Header}>
          <NavBar
            views={views}
            setOpenPage={setOpenPage}
            onOpenLoginModal={() => setloginModalOpen(true)}
            onOpenSignUpModal={() => setSignUpModalOpen(true)}
            onOpenFaqModal={() => setFaqModalOpen(true)}
          />
        </Layout.Header>
        <Layout.Content className={styles.Content}>
          {openPage === views.WELCOME && <WelcomePage />}
          {openPage === views.AREAS && <AreasPage />}
          {openPage === views.PRICES && <PricingPage />}
        </Layout.Content>
      </Layout>
      <LogInModal
        open={loginModalOpen}
        handleSubmit={loginSubmit}
        handleCancel={() => setloginModalOpen(false)}
      />
      <SignUpModal
        open={signUpModalOpen}
        handleSubmit={signUpSubmit}
        handleCancel={() => setSignUpModalOpen(false)}
      />
      <FaqModal
        open={faqModalOpen}
        handleClose={() => setFaqModalOpen(false)}
      />
    </>
  );
};
export default UserContent;
