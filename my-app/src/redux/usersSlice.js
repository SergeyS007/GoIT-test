import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchUsersByPage, toggleFollowing } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    quantityToLoad: 0,
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      state.quantityToLoad = action.payload.length;
    },
    [fetchUsers.rejected]: handleRejected,
    [fetchUsersByPage.pending]: handlePending,
    [fetchUsersByPage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
      state.quantityToLoad = action.payload.length;
    },
    [fetchUsersByPage.rejected]: handleRejected,
    [toggleFollowing.pending]: handlePending,
    [toggleFollowing.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (user) => user.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleFollowing.rejected]: handleRejected,
  },
});

export const usersReducer = usersSlice.reducer;
