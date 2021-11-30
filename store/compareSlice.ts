import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Compare {
  items: object[];
  status: string;
  error: string;
}

const initialState: Compare = {
  items: [],
  status: "idle",
  error: "",
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    itemAdded: (state, action: PayloadAction<object>) => {
      state.items.push(action.payload);
    },
    itemRemoved: (state, action: PayloadAction<object>) => {
      state.items.pop();
    },
  },
});

export const { itemAdded } = compareSlice.actions;
export default compareSlice.reducer;
