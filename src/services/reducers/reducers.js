import { 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILED, 
    ADD_PRODUCT_SUCCESS,
    ADD_OPTION_SUCCESS,
    DELETE_OPTION_SUCCESS,
    GET_ORDER_SUCCESS, 
    GET_ORDER_FAILED,
    CLOSE_POPUP,
} from "../actions/actions";

const initialState= {
    products: [],
    productsFailed: false,

    product: [],

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
      case ADD_PRODUCT_SUCCESS: {
        return { ...state, product: [action.item] }
      }
      case ADD_OPTION_SUCCESS: {
        return { ...state, product: [...state.product,  action.item] }
      }
      case DELETE_OPTION_SUCCESS: {
        return { ...state, product: [...state.product].filter((item) => item._id !== action._id)  }
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