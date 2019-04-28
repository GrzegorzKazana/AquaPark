import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import createDictionaryReducer from "./DictionaryReducer";
import UserReducer from "./UserReducer";

import dictionaryList from "../config/dictionaryList";

export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
  ...Object.fromEntries(
    dictionaryList.map(dictInfo => [
      dictInfo.reducerName,
      createDictionaryReducer(dictInfo.name)
    ])
  )
});
