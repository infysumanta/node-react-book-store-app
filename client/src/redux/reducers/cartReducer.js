import { cartTypes } from "../types/cartTypes";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((elm) => item === elm);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((elm) => {
            return elm === existItem ? item : elm;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case cartTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((elm) => {
          return elm === item;
        }),
      };

    case cartTypes.CART_RESET:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
