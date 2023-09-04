import { combineReducers } from 'redux';

import { productsReducer, orderReducer } from './reducers';

export const rootReducer = combineReducers({
    products: productsReducer,
    order: orderReducer,
  });