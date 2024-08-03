// src/utils/reducers.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Adjust path based on your actual file structure

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export default rootReducer;
