// reducers/cartReducer.js

const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if item already exists in cart
        const existingIndex = state.cart.findIndex(item => item._id === action.payload._id);
        if (existingIndex !== -1) {
          // If exists, update quantity
          const updatedCart = [...state.cart];
          updatedCart[existingIndex].quantity += 1;
          return { ...state, cart: updatedCart };
        } else {
          // If doesn't exist, add new item
          return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
        }
  
      // Handle other actions like REMOVE_FROM_CART, UPDATE_QUANTITY as needed
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  