import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

const user = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof user.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof user.dispatch;
export default user;
