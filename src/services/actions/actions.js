export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_OPTION_SUCCESS = 'ADD_OPTION_SUCCESS';
export const DELETE_OPTION_SUCCESS = 'DELETE_OPTION_SUCCESS';

export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const DELETE_ORDER = 'DELETE_ORDER';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const getProductSuccess = () => {
    return {
      type: GET_PRODUCTS_SUCCESS,
    };
};

export const addProductSuccess = (item) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    item: item,
  }
}

export const addOptionSuccess = (item) => {
  return {
    type: ADD_OPTION_SUCCESS,
    item: item,
  }
}

export const deleteOptionSuccess = (item) => {
  return {
    type: DELETE_OPTION_SUCCESS,
    _id: item,
  }
}
  
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

export const postOrderSuccess = (order) => {
    return {
      type: GET_ORDER_SUCCESS,
      order: order
    };
};

export const deleteOrder = (order) => {
  return {
    type: DELETE_ORDER,
    order: order,
  };
}
  
export const postOrderFailed = () => {
    return {
      type: GET_ORDER_FAILED
    };
};