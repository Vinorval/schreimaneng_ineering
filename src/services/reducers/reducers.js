import { 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILED, 
    GET_ORDER_SUCCESS, 
    GET_ORDER_FAILED,
    CLOSE_POPUP,
} from "../actions/actions";

const initialState= {
    products: [],
    productsFailed: false,

    order: [],
    orderFailed: false,

    basketPopup: false,
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS_SUCCESS: {
        return { ...state, products: action.items, productsFailed: false };
      }
      case GET_PRODUCTS_FAILED: {
        return { ...state, productsFailed: true};
      }
      default: {
        return state;
      }
    }
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDER_SUCCESS: {
        return { ...state, order: action.order, orderFailed: false };
      }
     case GET_ORDER_FAILED: {
        return { ...state, orderFailed: true };
      }
      case CLOSE_POPUP: {
        return { ...state, basketPopup: false }
      }
      default: {
        return state;
      }
    }
};