import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductInfo } from "../Types/Types";
import { RootState } from "./store";

interface ShopingCart {
  items: ProductInfo[];
  status: string;
  error: string;
}

const initialState: ShopingCart = {
  items: [],
  status: "idle",
  error: "",
};
const shopingCartSlice = createSlice({
  name: "shopingCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInfo>) => {
      state.items.push(action.payload);
    },
    removeFromCard: (state, action: PayloadAction<ProductInfo>) => {
      state.items = state.items.filter((element) =>
        element.id != action.payload.id
      );
    },
  },
});

// Check Product to be in the shopingCart
export const selectProductById = (state: RootState, productId: number) => {
  if (state.shopingCart.items) {
    if (state.shopingCart.items.find((product) => product.id === productId)) {
      return true;
    } else return false;
  } else {
    return undefined;
  }
};

export const { addToCart, removeFromCard } = shopingCartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state;

export default shopingCartSlice.reducer;
