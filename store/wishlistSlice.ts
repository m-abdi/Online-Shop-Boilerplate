import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductInfo } from "../Types/Types";
import { RootState } from "./store";

interface Wishlist {
  items: ProductInfo[];
  status: string;
  error: string;
}

const initialState: Wishlist = {
  items: [],
  status: "idle",
  error: "",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    itemAdded: (state, action: PayloadAction<ProductInfo>) => {
      state.items.push(action.payload);
    },
    itemRemoved: (state, action: PayloadAction<ProductInfo>) => {
      state.items = state.items.filter((element) => element.id !== action.payload.id);
    },
  },
});

// Check Product to be in the wishlist
export const selectProductById = (state: RootState, productId: number) => {
  if (state.shopingCart.items) {
    if (state.shopingCart.items.find((product) => product.id === productId)) {
      return true;
    } else {
      return false;
    }
  } else {
    return undefined;
  }
};

export const { itemAdded, itemRemoved } = wishlistSlice.actions;
export default wishlistSlice.reducer;
