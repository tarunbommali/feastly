// src/redux/slices/restroSlice.js
import { createSlice } from "@reduxjs/toolkit";

const restroSlice = createSlice({
  name: "restro",
  initialState: {
    initialRestaurantsList: [],
    restaurantsList: [],
    onlineDeliveryTitle: "",
    onlineDeliveryList: [],
    title: "",
    fetchFailed: false,
    loading: true,
  },
  reducers: {
    setRestaurants(state, action) {
      state.initialRestaurantsList = action.payload;
      state.restaurantsList = action.payload;
      state.fetchFailed = false;
      state.loading = false;
    },
    setOnlineDelivery(state, action) {
      state.onlineDeliveryList = action.payload.list;
      state.onlineDeliveryTitle = action.payload.title;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setFetchFailed(state, action) {
      state.fetchFailed = action.payload;
    },
    setFilteredRestaurants(state, action) {
      state.restaurantsList = action.payload;
    },
  },
});

export const {
  setRestaurants,
  setOnlineDelivery,
  setTitle,
  setLoading,
  setFetchFailed,
  setFilteredRestaurants,
} = restroSlice.actions;

export default restroSlice.reducer;
