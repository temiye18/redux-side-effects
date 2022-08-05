import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const itemExistInCart = state.items.find(
        (item) => item.id === newItem.id
      );
      if (itemExistInCart) {
        itemExistInCart.quantity += 1;
        itemExistInCart.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      state.totalQuantity += 1;
    },
    removeItemFromCart: (state, action) => {
      const itemToRemoveId = action.payload;
      const itemExistInCart = state.items.find(
        (item) => item.id === itemToRemoveId
      );
      if (itemExistInCart.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemToRemoveId);
      } else {
        itemExistInCart.quantity -= 1;
        itemExistInCart.totalPrice -= itemExistInCart.price;
      }
      state.totalQuantity -= 1;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
