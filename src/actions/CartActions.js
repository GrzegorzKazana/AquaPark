import uuid from "uuid";
import * as API from "../api/Mock/MockApiCalls";

export const ADD_ITEM = "ADD_ITEM";
export const addItem = item => ({
  type: ADD_ITEM,
  item: {
    ...item,
    discount: null,
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
    priceWithDiscount: item.price * (1 - discount.discountRate)
  },
  prevPriceWithDiscount: item.priceWithDiscount
});

export const RESET_CART = "RESET_CART";
export const resetCart = () => ({
  type: RESET_CART
});

export const purchaseCartThunk = (userData, cart) => dispatch => {
  API.purchaseCart(userData, cart)
    .then(res => dispatch(resetCart()))
    .catch(err => console.log(err));
};
