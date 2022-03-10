import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./slices/OptionsSlice";
import statusReducer from "./slices/StatusSlice";

const config = {
  reducer: {
    options: optionsReducer,
    status: statusReducer,
  },
  middleware: [],
  devTools: process.env.NODE_ENV !== "production",
};

export const store = configureStore(config);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
