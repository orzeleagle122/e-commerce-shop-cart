import * as actionTypes from "../constants/cartConstants";

export const cartReducers = (state = { cartItems: [] }, action) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    const item = action.payload;
    const existItem = state.cartItems.find((x) => x.product === item.product);

    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
  }

  if (action.type === actionTypes.REMOVE_FROM_CART) {
    return {
      ...state,
      cartItems: state.cartItems.filter((x) => x.product !== action.payload),
    };
  }

  return state;
};
