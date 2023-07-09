import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  deleteTodo,
  addTodo,
} from "../../Redux/features/Todo/TodoSlice";
import "../../Styles/Todo/Todo.css";

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
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Add notes"
              onChange={(event) => setInputValue(event.target.value)}
              value={inputValue}
            />
          </div>
          <div className="col-3 mt-4">
              <button className="btn btn-primary" onClick={handleAdd}>
                Add
              </button>
              <button
        className="btn btn-light ml-100"
        onClick={() => dispatch(clear())}
      >
        Clear
      </button>
          </div>
        </div>
        <div className="todos mt-3">
          {todos.map((item) => {
            return (
              <div
                className="todo-items d-flex justify-content-between"
                key={item.id}
                id="todos"
              >
                <h3>{item.title}</h3>
                <button
                  className="btn btn-light  bg-light"
                  onClick={() => dispatch(deleteTodo({ id: item.id }))}
                >
                  ❌
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
