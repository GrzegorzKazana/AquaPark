import {
  FETCH_USER,
  LOAD_USER,
  FETCH_USER_ERROR,
  LOG_OUT_USER,
  SIGN_UP_USER,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_ERROR
} from "../actions/UserActions";

const defaultState = {
  userFetching: false,
  userLoaded: false,
  userFetchingError: false,
  userFetchingErrorMessage: "",
  userSigningUp: false,
  userSigningUpSuccess: false,
  userSigningUpError: false,
  userSigningUpErrorMessage: "",
  user: null
};

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        userFetching: true,
        userFetchingError: false
      };
    case LOAD_USER:
      return {
        ...state,
        userFetching: false,
        userLoaded: true,
        userFetchingError: false,
        user: action.user
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        userFetching: false,
        userLoaded: false,
        userFetchingError: true,
        userFetchingErrorMessage: action.message
      };
    case LOG_OUT_USER:
      return {
        ...state,
        userLoaded: false,
        user: null
      };
    case SIGN_UP_USER:
      return {
        ...state,
        userSigningUp: true,
        userSigningUpError: false
      };
    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        userSigningUp: false,
        userSigningUpError: false,
        userSigningUpSuccess: true
      };
    case SIGN_UP_USER_ERROR:
      return {
        ...state,
        userSigningUp: false,
        userSigningUpError: true,
        userSigningUpErrorMessage: action.message,
        userSigningUpSuccess: false
      };

    default:
      return state;
  }
};
export default UserReducer;
