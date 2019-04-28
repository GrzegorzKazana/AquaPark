export const ADD_ITEM = "ADD_ITEM";
export const addItem = item => ({
  type: ADD_ITEM,
  item: {
    ...action.item,
    discount: null,
    priceWithDiscount: item.price
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
    priceWithDiscount: item.price * discount.percent
  },
  prevPriceWithDiscount: item.priceWithDiscount
});
