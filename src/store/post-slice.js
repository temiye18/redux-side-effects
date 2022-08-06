import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSubmitting: false, isSubmitted: false };
const postSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
