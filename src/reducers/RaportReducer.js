import {
  FETCH_RAPORT,
  LOAD_RAPORT,
  FETCH_RAPORT_ERROR
} from "../actions/RaportActions";

const defaultState = {
  fetching: false,
  loaded: false,
  fetchingError: false,
  raport: ""
};

const raportReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RAPORT:
      return {
        ...state,
        fetching: true,
        fetchingError: false
      };
    case LOAD_RAPORT:
      return {
        ...state,
        fetching: false,
        loaded: true,
        fetchingError: false,
        raport: action.raport
      };
    case FETCH_RAPORT_ERROR:
      return {
        ...state,
        fetching: false,
        loaded: false,
        fetchingError: true
      };
    default:
      return state;
  }
};
export default raportReducer;
