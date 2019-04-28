export const FETCH_DICT = "FETCH_DICT";
export const fetchDict = dictionaryName => ({
  type: `${FETCH_DICT}_${dictionaryName}`
});

export const LOAD_DICT = "LOAD_DICT";
export const laodDict = (dictionaryName, dict) => ({
  type: `${LOAD_DICT}_${dictionaryName}`,
  dict
});

export const FETCH_DICT_ERROR = "FETCH_DICT_ERROR";
export const fetchDictError = dictionaryName => ({
  type: `${FETCH_DICT_ERROR}_${dictionaryName}`
});
