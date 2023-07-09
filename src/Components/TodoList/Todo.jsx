import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  deleteTodo,
  addTodo,
} from "../../Redux/features/Todo/TodoSlice";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue !== "") {
      const newTodo = {
        id: Date.now(),
        title: inputValue,
      };
      dispatch(addTodo(newTodo));
    }
    setInputValue("");
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="add notes"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button onClick={handleAdd}>add</button>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div className="todo-items" key={item.id}>
                <h3>{item.title}</h3>
                <button onClick={() => dispatch(deleteTodo({ id: item.id }))}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => dispatch(clear())} className="clear">
        clear
      </button>
    </>
  );
};

export default Todo;
