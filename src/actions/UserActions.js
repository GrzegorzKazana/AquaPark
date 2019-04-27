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
