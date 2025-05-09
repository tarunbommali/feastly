import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch GitHub user details
export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async () => {
    const response = await fetch("https://api.github.com/users/tarunbommali");
    const data = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.error = "Failed to fetch user details";
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
