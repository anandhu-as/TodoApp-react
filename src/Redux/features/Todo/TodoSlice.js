import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    clear: (state) => {
      state.todos = [];
    },
  },
});
export default TodoSlice.reducer;
export const { addTodo, clear } = TodoSlice.actions;
