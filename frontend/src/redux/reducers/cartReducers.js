import * as actionTypes from "../constants/cartConstants";

export const cartReducers = (state = { cartItems: [] }, action) => {
  if (action.type === actionTypes.ADD_TO_CART) {
    const item = action.payload;
    const existItem = state.cartItems.find((x) => x._id === item._id);

    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
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
      cartItems: state.cartItems.filter((x) => x._id !== action.payload),
    };
  }

  return state;
};
