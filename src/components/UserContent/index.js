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

import { connect } from "react-redux";
import {
  logInUserThunk,
  logOutUserThunk,
  singUpUserThunk
} from "../../actions/UserActions";
import { addItem, removeItem, addDiscount } from "../../actions/CartActions";

const views = {
  WELCOME: "0",
  AREAS: "1",
  PRICES: "2",
  CHECKOUT: "3"
};

const UserContent = ({
  user,
  cart,
  discounts,
  prices,
  areas,
  logIn,
  logOut,
  signUp,
  addItemToCart,
  removeItemFromCart,
  addDiscountToItem
}) => {
  const [openPage, setOpenPage] = useState(views.WELCOME);
  const [loginModalOpen, setloginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);

  const loginSubmit = vals => {
    console.log(vals);
    const { email, password } = vals;
    logIn(email, password);
    setloginModalOpen(false);
  };

  const signUpSubmit = vals => {
    console.log(vals);
    const { email, password } = vals;
    signUp(email, password);
    setSignUpModalOpen(false);
  };

  const isLoggedIn = Boolean(user.user);
  const navbar = isLoggedIn ? (
    <NavBarLoggedIn
      views={views}
      numberCartItems={cart.itemCount}
      onLogOut={logOut}
      setOpenPage={setOpenPage}
      onOpenFaqModal={() => setFaqModalOpen(true)}
    />
  ) : (
    <NavBar
      views={views}
      numberCartItems={cart.itemCount}
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
          {openPage === views.AREAS && <AreasPage areas={areas} />}
          {openPage === views.PRICES && (
            <PricingPage prices={prices} addItemToCart={addItemToCart} />
          )}
          {openPage === views.CHECKOUT && (
            <CheckoutPage
              onOpenLoginModal={() => setloginModalOpen(true)}
              user={user}
              cart={cart}
              discounts={discounts}
              removeItemFromCart={removeItemFromCart}
              addDiscountToItem={addDiscountToItem}
            />
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

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  logIn: (email, password) => dispatch(logInUserThunk(email, password)),
  logOut: (email, password) => dispatch(logOutUserThunk(email, password)),
  signUp: (email, password) => dispatch(singUpUserThunk(email, password)),
  addItemToCart: item => dispatch(addItem(item)),
  removeItemFromCart: item => dispatch(removeItem(item)),
  addDiscountToItem: (item, discount) => dispatch(addDiscount(item, discount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContent);
