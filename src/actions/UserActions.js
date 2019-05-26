// import * as API from "../api/Mock/MockApiCalls";
import * as API from "../api/ApiCalls";
import { notification } from "antd";

export const FETCH_USER = "FETCH_USER";
export const fetchUser = () => ({
  type: FETCH_USER
});

export const LOAD_USER = "LOAD_USER";
export const loadUser = user => ({
  type: LOAD_USER,
  user
});

export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const fetchUserError = err => ({
  type: FETCH_USER_ERROR,
  message: err
});

export const LOG_OUT_USER = "LOG_OUT_USER";
export const logOutUser = () => ({
  type: LOG_OUT_USER
});

export const SIGN_UP_USER = "SIGN_UP_USER";
export const signInUser = () => ({
  type: SIGN_UP_USER
});

export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const signInUserSuccess = () => ({
  type: SIGN_UP_USER_SUCCESS
});

export const SIGN_UP_USER_ERROR = "SIGN_UP_USER_ERROR";
export const signInUserError = err => ({
  type: SIGN_UP_USER_ERROR,
  message: err
});

export const logInUserThunk = (email, password) => dispatch => {
  dispatch(fetchUser());
  API.logInUser(email, password)
    .then(user => {
      console.log(user);
      notification.success({
        message: "Witamy ponownie!"
      });
      dispatch(loadUser(user));
    })
    .catch(err => {
      console.error(err);
      notification.error({
        message: err
      });
      dispatch(fetchUserError(err));
    });
};

export const logOutUserThunk = token => dispatch => {
  API.logOutUser(token)
    .then(res => {
      notification.success({
        message: "Poprawnie wylogowano"
      });
      dispatch(logOutUser());
    })
    .catch(err => {
      console.error(err);
      notification.error({
        message: "Błąd"
      });
    });
};

export const singUpUserThunk = userData => dispatch => {
  dispatch(signInUser());
  API.signUpUser(userData)
    .then(data => {
      console.log(data);
      notification.success({
        message: "Konto aktywowane"
      });
      dispatch(signInUserSuccess());
    })
    .catch(err => {
      console.log(err);
      notification.error({
        message: err
      });
      dispatch(signInUserError(err));
    });
};

export const updateUserDataThunk = userData => dispatch => {
  dispatch(fetchUser());
  API.editUserData(userData)
    .then(data => {
      console.log(data);
      dispatch(loadUser(data));
    })
    .catch(err => {
      console.log(err);
      notification.error({
        message: err
      });
    });
};
