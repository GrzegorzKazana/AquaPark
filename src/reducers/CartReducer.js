import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_DISCOUNT,
  RESET_CART
} from "../actions/CartActions";

const defaultState = {
  items: [],
  itemCount: 0,
  totalPrice: 0,
  totalPriceWithDiscount: 0
};

const CartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
        itemCount: state.itemCount + 1,
        totalPrice: state.totalPrice + action.item.price,
        totalPriceWithDiscount:
          state.totalPriceWithDiscount + action.item.priceWithDiscount
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.item.id),
        itemCount: state.itemCount - 1,
        totalPrice: state.totalPrice - action.item.price,
        totalPriceWithDiscount:
          state.totalPriceWithDiscount - action.item.priceWithDiscount
      };
    case ADD_DISCOUNT:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.item.id ? action.item : item
        ),
        totalPriceWithDiscount:
          state.totalPriceWithDiscount -
          action.prevPriceWithDiscount +
          action.item.priceWithDiscount
      };
    case RESET_CART:
      return {
        ...defaultState
      };
    default:
      return state;
  }
};

export default CartReducer;
