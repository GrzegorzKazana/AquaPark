import React, { useEffect } from "react";
import "antd/dist/antd.css";
import UserContent from "./components/UserContent";
import AdminContent from "./components/AdminContent";

import { connect } from "react-redux";
import { fetchAllDictsThunk } from "./actions/DictionaryActions";
import {
  logInUserThunk,
  logOutUserThunk,
  singUpUserThunk
} from "./actions/UserActions";

const App = props => {
  useEffect(() => {
    props.fetchDicts();
  }, []);

  const userState = props.state.user;
  const isAdminLoggedIn = userState.user && userState.user.isAdmin;

  return isAdminLoggedIn ? (
    <AdminContent />
  ) : (
    <UserContent
      state={props.state}
      onLogIn={props.logIn}
      onLogOut={props.logOut}
      onSignUp={props.signUp}
    />
  );
};

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({
  fetchDicts: () => dispatch(fetchAllDictsThunk()),
  logIn: (email, password) => dispatch(logInUserThunk(email, password)),
  logOut: (email, password) => dispatch(logOutUserThunk(email, password)),
  signUp: (email, password) => dispatch(singUpUserThunk(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
