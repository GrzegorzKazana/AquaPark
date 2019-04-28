import * as API from "../api/Mock/MockApiCalls";

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
export const fetchUserError = () => ({
  type: FETCH_USER_ERROR
});

export const LOG_OUT_USER = "LOG_OUT_USER";
export const logOutUser = () => ({
  type: LOG_OUT_USER
});

export const logInUserThunk = (email, password) => dispatch => {
  dispatch(fetchUser());
  API.logInUser(email, password)
    .then(user => {
      console.log(user);
      dispatch(loadUser(user));
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchUserError());
    });
};

export const logOutUserThunk = (email, password) => dispatch => {
  dispatch(logOutUser());
  API.logOutUser(email, password);
};

export const singUpUserThunk = (email, password) => dispatch => {
  API.signUpUser(email, password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
