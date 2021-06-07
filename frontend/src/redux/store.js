import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducers } from "./reducers/cartReducers";
import {
  getProductsDetailsReducer,
  getProductsReducer,
} from "./reducers/productsReducers";

const reducer = combineReducers({
  cart: cartReducers,
  getProducts: getProductsReducer,
  getProductDetails: getProductsDetailsReducer,
});

const middleware = [thunk];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
