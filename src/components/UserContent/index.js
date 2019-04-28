import React, { useState } from "react";
import styles from "./UserContent.module.scss";
import NavBar from "./NavBar/NavBar";
import NavBarLoggedIn from "./NavBar/NavBarLoggedIn";
import WelcomePage from "./WelcomePage/WelcomePage";
import AreasPage from "./AreasPage/AreasPage";
import PricingPage from "./PricingPage/PricingPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import LogInModal from "./Modals/LogInModal";
import SignUpModal from "./Modals/SignUpModal";
import FaqModal from "./Modals/FaqModal";
import { Layout } from "antd";

const views = {
  WELCOME: "0",
  AREAS: "1",
  PRICES: "2",
  CHECKOUT: "3"
};

const UserContent = props => {
  const [openPage, setOpenPage] = useState(views.WELCOME);
  const [loginModalOpen, setloginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);

  const loginSubmit = vals => {
    console.log(vals);
    const { email, password } = vals;
    props.onLogIn(email, password);
    setloginModalOpen(false);
  };

  const signUpSubmit = vals => {
    console.log(vals);
    const { email, password } = vals;
    props.onSignUp(email, password);
    setSignUpModalOpen(false);
  };

  const isLoggedIn = Boolean(props.state.user.user);
  const navbar = isLoggedIn ? (
    <NavBarLoggedIn
      views={views}
      onLogOut={props.onLogOut}
      setOpenPage={setOpenPage}
      onOpenFaqModal={() => setFaqModalOpen(true)}
    />
  ) : (
    <NavBar
      views={views}
      setOpenPage={setOpenPage}
      onOpenLoginModal={() => setloginModalOpen(true)}
      onOpenSignUpModal={() => setSignUpModalOpen(true)}
      onOpenFaqModal={() => setFaqModalOpen(true)}
    />
  );

  return (
    <>
      <Layout className={styles.Layout}>
        <Layout.Header>{navbar}</Layout.Header>
        <Layout.Content className={styles.Content}>
          {openPage === views.WELCOME && <WelcomePage />}
          {openPage === views.AREAS && <AreasPage />}
          {openPage === views.PRICES && <PricingPage />}
          {openPage === views.CHECKOUT && (
            <CheckoutPage onOpenLoginModal={() => setloginModalOpen(true)} />
          )}
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
