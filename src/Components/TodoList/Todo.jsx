import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../Redux/features/Todo/TodoSlice";
import { addTodo } from "../../Redux/features/Todo/TodoSlice";
const Todo = () => {
  const [inputvalue, setInputValue] = useState("");
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (inputvalue !== "") {
      dispatch(addTodo(inputvalue));
    }
    return setInputValue("");
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="add notes"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputvalue}
        />
        <button onClick={() => handleAdd()}>add</button>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div className="todo-items">
                <h3>{item} </h3>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => dispatch(clear())} className="clear">clear</button>
    </>
  );
};

export default Todo;
