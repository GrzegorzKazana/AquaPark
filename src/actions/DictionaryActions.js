import { fetchDictFromApi } from "../api/ApiCalls";

export const FETCH_DICT = "FETCH_DICT";
export const fetchDict = dictionaryName => () => ({
  type: `${FETCH_DICT}_${dictionaryName}`
});

export const LOAD_DICT = "LOAD_DICT";
export const laodDict = dictionaryName => dict => ({
  type: `${LOAD_DICT}_${dictionaryName}`,
  dict
});

export const FETCH_DICT_ERROR = "FETCH_DICT_ERROR";
export const fetchDictError = dictionaryName => () => ({
  type: `${FETCH_DICT_ERROR}_${dictionaryName}`
});

export const fetchDictThunk = (name, url) => dispatch => {
  dispatch(fetchDict(name)());
  fetchDictFromApi(name, url)
    .then(dict => {
      console.log(dict);
      dispatch(loadDict(name)(dict));
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchDictError(name)());
    });
};
