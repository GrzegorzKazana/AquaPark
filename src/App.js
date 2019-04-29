import React, { useEffect } from "react";
import "antd/dist/antd.css";
import UserContent from "./components/UserContent";
import AdminContent from "./components/AdminContent";

import { connect } from "react-redux";
import { fetchAllDictsThunk } from "./actions/DictionaryActions";

const App = ({ user, fetchDicts }) => {
  useEffect(() => {
    fetchDicts();
  }, [fetchDicts]);

  const isAdminLoggedIn = user && user.isAdmin;

  return isAdminLoggedIn ? <AdminContent /> : <UserContent />;
};

const mapStateToProps = state => ({ ...state.user });
const mapDispatchToProps = dispatch => ({
  fetchDicts: () => dispatch(fetchAllDictsThunk())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
