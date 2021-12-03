import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  price: 0,
  isCartOpened: false,
  items: [],
  allItems: [],
};

const middleware = [thunk];

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "EMPTY_CART":
      return {
        ...state,
        price: 0,
        shippingPrice: 0,
        items: [],
      };
    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpened: !state.isCartOpened,
      };
    case "ADD":
      return {
        ...state,
        price: state.price + payload.price,
        isCartOpened: true,
        items: [...state.items, payload],
      };
    case "REMOVE":
      console.log(payload);
      return {
        ...state,
        price: state.price - payload.price,
        items: state.items.filter(
          (item) => item.id !== payload.id || item.size !== payload.size
        ),
      };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
