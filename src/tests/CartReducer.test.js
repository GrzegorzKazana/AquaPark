import {
  addItem,
  removeItem,
  addDiscount,
  changeItemCount
} from "../actions/CartActions";
import CartReducer from "../reducers/CartReducer";

jest.mock("uuid/v4", () => {
  let value = 1;
  return () => value++;
});

describe("testing CartReducer", () => {
  it("handles addItem", () => {
    const initialState = {
      items: [
        {
          id: 0,
          itemCount: 1,
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
      price: 20,
      discount: null,
      priceWithDiscount: 20
    };
    const expectedState = {
      items: [
        {
          id: 0,
          itemCount: 1,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          itemCount: 1,
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
          itemCount: 1,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          itemCount: 1,
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
      itemCount: 1,
      price: 20,
      discount: null,
      priceWithDiscount: 20
    };
    const expectedState = {
      items: [
        {
          id: 0,
          itemCount: 1,
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
          itemCount: 1,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          itemCount: 1,
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
      itemCount: 1,
      price: 20,
      discount: null,
      priceWithDiscount: 20
    };
    const discount = {
      discountRate: 0.2
    };
    const expectedState = {
      items: [
        {
          id: 0,
          itemCount: 1,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          itemCount: 1,
          price: 20,
          discount: {
            discountRate: 0.2
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
          itemCount: 1,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          itemCount: 1,
          price: 20,
          discount: {
            discountRate: 0.2
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
      itemCount: 1,
      price: 20,
      discount: {
        discountRate: 0.2
      },
      priceWithDiscount: 16
    };
    const discount = {
      discountRate: 0.25
    };
    const expectedState = {
      items: [
        {
          id: 0,
          itemCount: 1,
          price: 10,
          discount: null,
          priceWithDiscount: 10
        },
        {
          id: 1,
          itemCount: 1,
          price: 20,
          discount: {
            discountRate: 0.25
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

  it("handles item count change", () => {
    const item = {
      id: 0,
      itemCount: 2,
      price: 10,
      discount: {
        discountRate: 0.25
      },
      priceWithDiscount: 7.5
    };
    const initialState = {
      items: [item],
      itemCount: 2,
      totalPrice: 20,
      totalPriceWithDiscount: 15
    };
    const newItemCount = 4;
    const expectedState = {
      items: [
        {
          id: 0,
          itemCount: 4,
          price: 10,
          discount: {
            discountRate: 0.25
          },
          priceWithDiscount: 7.5
        }
      ],
      itemCount: 4,
      totalPrice: 40,
      totalPriceWithDiscount: 30
    };
    const action = changeItemCount(item, newItemCount);
    expect(CartReducer(initialState, action)).toEqual(expectedState);
  });
});
