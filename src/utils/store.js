// store.js

// src/utils/store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust path based on your actual file structure

const store = createStore(rootReducer);

export default store;

