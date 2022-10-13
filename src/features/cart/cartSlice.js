import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

const url = `https://course-api.com/react-useReducer-cart-project`;

export const getCartItems = createAsyncThunk(`cart/getCartItems`, () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },

    increaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseAmount: (state) => {
      state.amount -= 1;
    },
    calculateTotal: (state, { payload }) => {},
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
