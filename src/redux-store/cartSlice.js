import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Add item or increase quantity
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Decrease quantity or remove item
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== itemId);
        }
      }
    },

    // Remove item directly (by id)
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },

    // Clear the whole cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, decreaseItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
