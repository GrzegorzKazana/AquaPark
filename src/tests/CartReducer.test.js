import { addItem, removeItem, addDiscount } from "../actions/CartActions";
import CartReducer from "../reducers/CartReducer";

describe("testing CartReducer", () => {
  it("handles addItem", () => {
    const initialState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        }
      ],
      itemCount: 1,
      totalPrice: 10,
      totalPriceWithDiscount: 10
    };
    const newItem = {
      id: 1,
      price: 20,
      discount: null,
      priceWithDiscount: 20
    };
    const expectedState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          price: 20,
          discount: null,
          priceWithDiscount: 20
        }
      ],
      itemCount: 2,
      totalPrice: 30,
      totalPriceWithDiscount: 30
    };
    const action = addItem(newItem);
    expect(CartReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles removeItem", () => {
    const initialState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          price: 20,
          discount: null,
          priceWithDiscount: 20
        }
      ],
      itemCount: 2,
      totalPrice: 30,
      totalPriceWithDiscount: 30
    };
    const removedItem = {
      id: 1,
      price: 20,
      discount: null,
      priceWithDiscount: 20
    };
    const expectedState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        }
      ],
      itemCount: 1,
      totalPrice: 10,
      totalPriceWithDiscount: 10
    };
    const action = removeItem(removedItem);
    expect(CartReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles addDiscount", () => {
    const initialState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          price: 20,
          discount: null,
          priceWithDiscount: 20
        }
      ],
      itemCount: 2,
      totalPrice: 30,
      totalPriceWithDiscount: 30
    };
    const discountedItem = {
      id: 1,
      price: 20,
      discount: null,
      priceWithDiscount: 20
    };
    const discount = {
      percent: 0.8
    };
    const expectedState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          price: 20,
          discount: {
            percent: 0.8
          },
          priceWithDiscount: 16
        }
      ],
      itemCount: 2,
      totalPrice: 30,
      totalPriceWithDiscount: 26
    };
    const action = addDiscount(discountedItem, discount);
    expect(CartReducer(initialState, action)).toEqual(expectedState);
  });

  it("handles consecutive addDiscount", () => {
    const initialState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          price: 20,
          discount: {
            percent: 0.8
          },
          priceWithDiscount: 16
        }
      ],
      itemCount: 2,
      totalPrice: 30,
      totalPriceWithDiscount: 26
    };
    const discountedItem = {
      id: 1,
      price: 20,
      discount: {
        percent: 0.8
      },
      priceWithDiscount: 16
    };
    const discount = {
      percent: 0.75
    };
    const expectedState = {
      items: [
        {
          id: 0,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          price: 20,
          discount: {
            percent: 0.75
          },
          priceWithDiscount: 15
        }
      ],
      itemCount: 2,
      totalPrice: 30,
      totalPriceWithDiscount: 25
    };
    const action = addDiscount(discountedItem, discount);
    expect(CartReducer(initialState, action)).toEqual(expectedState);
  });
});
