import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // dispatch Action 
    addItem: (state, action) => {
        // mutating the state here
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      const indexToRemove = state.items.findIndex(item => item.name === action.payload);
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions ; 

export default cartSlice.reducer;
