import { fetchDictFromApi } from "../api/ApiCalls";
import dictionaryList from "../config/dictionaryList";

export const FETCH_DICT = "FETCH_DICT";
export const fetchDict = dictionaryName => () => ({
  type: `${FETCH_DICT}_${dictionaryName}`
});

export const LOAD_DICT = "LOAD_DICT";
export const loadDict = dictionaryName => dict => ({
  type: `${LOAD_DICT}_${dictionaryName}`,
  dict
});

export const FETCH_DICT_ERROR = "FETCH_DICT_ERROR";
export const fetchDictError = dictionaryName => () => ({
  type: `${FETCH_DICT_ERROR}_${dictionaryName}`
});

export const fetchDictProcedure = (name, url, dispatch) => {
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

export const fetchAllDictsThunk = () => dispatch => {
  dictionaryList.forEach(dictInfo =>
    fetchDictProcedure(dictInfo.name, dictInfo.url, dispatch)
  );
};
