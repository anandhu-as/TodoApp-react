import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    //reducers
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    clear: (state) => {
      state.todos = [];
    },
    deleteTodo: (state, action) => {
      const ID = action.payload.id;
      state.todos = state.todos.filter((item) => item.id !== ID);
    },
  },
});

export default TodoSlice.reducer;
export const { addTodo, clear, deleteTodo } = TodoSlice.actions;
