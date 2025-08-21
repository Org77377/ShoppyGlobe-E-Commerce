import { createSlice } from '@reduxjs/toolkit';
import { useFetch } from '../../hooks/useFetch';


const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increaseQty(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;
