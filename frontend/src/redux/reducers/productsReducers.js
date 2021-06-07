import * as actionTypes from "../constants/productsConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  if (action.type === actionTypes.GET_PRODUCTS_REQUEST) {
    return {
      loading: true,
      products: [],
    };
  }

  if (action.type === actionTypes.GET_PRODUCTS_SUCCESS) {
    return {
      loading: false,
      products: action.payload,
    };
  }

  if (action.type === actionTypes.GET_PRODUCTS_FAILURE) {
    return {
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export const getProductsDetailsReducer = (state = { products: {} }, action) => {
  if (action.type === actionTypes.GET_PRODUCT_DETAILS_REQUEST) {
    return {
      loading: true,
    };
  }
  if (action.type === actionTypes.GET_PRODUCT_DETAILS_SUCCESS) {
    return {
      loading: false,
      product: action.payload,
    };
  }

  if (action.type === actionTypes.GET_PRODUCT_DETAILS_FAILURE) {
    return {
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === actionTypes.GET_PRODUCT_DETAILS_RESET) {
    return {
      product: {},
    };
  }

  return state;
};
