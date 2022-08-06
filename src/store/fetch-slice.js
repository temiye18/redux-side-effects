import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], isLoading: false, error: null };
const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchActions = fetchSlice.actions;
export default fetchSlice.reducer;
