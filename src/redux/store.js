import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;