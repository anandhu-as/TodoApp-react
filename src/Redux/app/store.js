import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../features/Todo/TodoSlice";
export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});
