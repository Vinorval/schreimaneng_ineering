export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const getProductSuccess = (items) => {
    return {
      type: GET_PRODUCTS_SUCCESS,
      items: items
    };
};
  
const getIngredientsFailed = () => {
    return {
      type: GET_PRODUCTS_FAILED
    };
};

const closePopupOrder = () => {
    return {
      type: CLOSE_POPUP,
      ingredient: {},
      order: {}
    }
}

const postOrderSuccess = (order) => {
    return {
      type: GET_ORDER_SUCCESS,
      order: order
    };
};
  
const postOrderFailed = () => {
    return {
      type: GET_ORDER_FAILED
    };
};