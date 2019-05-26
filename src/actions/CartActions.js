import uuid from "uuid";
import { notification } from "antd";
// import * as API from "../api/Mock/MockApiCalls";
import * as API from "../api/ApiCalls";

export const ADD_ITEM = "ADD_ITEM";
export const addItem = item => ({
  type: ADD_ITEM,
  item: {
    discount: null,
    ...item,
    itemCount: 1,
    priceWithDiscount: item.price,
    id: uuid.v4()
  }
});

export const REMOVE_ITEM = "REMOVE_ITEM";
export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
});

export const ADD_DISCOUNT = "ADD_DISCOUNT";
export const addDiscount = (item, discount) => ({
  type: ADD_DISCOUNT,
  item: {
    ...item,
    discount,
    priceWithDiscount: item.price * (1 - discount.value)
  },
  prevPriceWithDiscount: item.priceWithDiscount
});

export const RESET_CART = "RESET_CART";
export const resetCart = () => ({
  type: RESET_CART
});

export const CHANGE_ITEM_COUNT = "CHANGE_ITEM_COUNT";
export const changeItemCount = (item, count) => ({
  type: CHANGE_ITEM_COUNT,
  item: {
    ...item,
    itemCount: count
  },
  prevItemCount: item.itemCount
});

export const purchaseCartThunk = (userData, cart) => dispatch => {
  API.purchaseCart(userData, cart)
    .then(res => {
      console.log(res);
      notification.success({
        message: "Potwierdzone zakup"
      });
      dispatch(resetCart());
    })
    .catch(err => {
      console.error(err);
      notification.error({
        message: err
      });
    });
};
