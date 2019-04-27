import {
  FETCH_USER,
  LOAD_USER,
  FETCH_USER_ERROR,
  LOG_OUT_USER
} from "../actions/UserActions";

const defaultState = {
  userFetching: false,
  userLoaded: false,
  userFetchingError: false,
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
        userFetchingError: true
      };
    case LOG_OUT_USER:
      return {
        ...state,
        userLoaded: false,
        user: null
      };
    default:
      return state;
  }
};
export default UserReducer;
