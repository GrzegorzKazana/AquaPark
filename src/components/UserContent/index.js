import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./UserContent.module.scss";
import NavBar, {
  DropdownMenuOverlay,
  DropdownMenuOverlayLoggedIn
} from "./NavBar/NavBar";
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
  singUpUserThunk,
  updateUserDataThunk
} from "../../actions/UserActions";
import {
  addItem,
  removeItem,
  addDiscount,
  changeItemCount,
  purchaseCartThunk
} from "../../actions/CartActions";

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
  updateUserData,
  addItemToCart,
  removeItemFromCart,
  addDiscountToItem,
  changeItemCount,
  purchaseCart
}) => {
  const [openPage, setOpenPage] = useState(views.WELCOME);
  const [loginModalOpen, setloginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);

  useEffect(() => {
    // close log in modal when user loaded
    user.userLoaded && setloginModalOpen(false);
  }, [user.userLoaded]);

  const { userSigningUp, userSigningUpSuccess } = user;
  useEffect(() => {
    // close signup modal when got positive response
    if (userSigningUp) {
      return;
    }
    if (userSigningUpSuccess) {
      setSignUpModalOpen(false);
    }
  }, [userSigningUp, userSigningUpSuccess]);

  const isLoggedIn = Boolean(user.user);
  const navbar = (
    <NavBar
      views={views}
      numberCartItems={cart.itemCount}
      setOpenPage={setOpenPage}
      userMenuOverlay={
        isLoggedIn ? (
          <DropdownMenuOverlayLoggedIn
            onLogOut={() => logOut(user.user.userToken)}
            onOpenFaqModal={() => setFaqModalOpen(true)}
          />
        ) : (
          <DropdownMenuOverlay
            onOpenLoginModal={() => setloginModalOpen(true)}
            onOpenSignUpModal={() => setSignUpModalOpen(true)}
            onOpenFaqModal={() => setFaqModalOpen(true)}
          />
        )
      }
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
              changeItemCount={changeItemCount}
              purchaseCart={purchaseCart}
            />
          )}
        </Layout.Content>
      </Layout>
      <LogInModal
        open={loginModalOpen}
        loading={user.userFetching}
        handleSubmit={({ email, password }) => logIn(email, password)}
        handleCancel={() => setloginModalOpen(false)}
      />
      <SignUpModal
        open={signUpModalOpen}
        loading={user.userSigningUp}
        handleSubmit={signUp}
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
  logOut: token => dispatch(logOutUserThunk(token)),
  signUp: userData => dispatch(singUpUserThunk(userData)),
  updateUserData: userData => dispatch(updateUserDataThunk(userData)),
  addItemToCart: item => dispatch(addItem(item)),
  removeItemFromCart: item => dispatch(removeItem(item)),
  addDiscountToItem: (item, discount) => dispatch(addDiscount(item, discount)),
  changeItemCount: (item, count) => dispatch(changeItemCount(item, count)),
  purchaseCart: (userData, cart) => dispatch(purchaseCartThunk(userData, cart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContent);

UserContent.propTypes = {
  user: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  discounts: PropTypes.object.isRequired,
  prices: PropTypes.object.isRequired,
  areas: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  addDiscountToItem: PropTypes.func.isRequired,
  changeItemCount: PropTypes.func.isRequired,
  purchaseCart: PropTypes.func.isRequired
};
