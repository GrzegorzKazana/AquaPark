import {
  FETCH_DICT,
  LOAD_DICT,
  FETCH_DICT_ERROR
} from "../actions/DictionaryActions";

const defaultState = {
  fetching: false,
  loaded: false,
  fetchingError: false,
  dictionary: []
};

const createDictionaryReducer = dictionaryName => (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case `${FETCH_DICT}_${dictionaryName}`:
      return {
        ...state,
        fetching: true,
        fetchingError: false
      };
    case `${LOAD_DICT}_${dictionaryName}`:
      return {
        ...state,
        fetching: false,
        loaded: true,
        fetchingError: false,
        dictionary: action.dict
      };
    case `${FETCH_DICT_ERROR}_${dictionaryName}`:
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
export default createDictionaryReducer;
