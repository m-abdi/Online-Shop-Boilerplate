import compareReducer from "./compareSlice"
import { configureStore } from "@reduxjs/toolkit";
import shopingCartReducer from "./shopingCartSlice";
import wishlistReducer from './wishlistSlice'
const store = configureStore({
  reducer: {
    shopingCart: shopingCartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
  },
});




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
