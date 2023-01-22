import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoNode from "./../todo-node/TodoNode";
import { addTodo } from "../../redux/topics/todoSlice";
import "./TodoContainer.css";

function TodoContainer() {
  const todos = useSelector((state) => state.todos.list);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        pushTodo();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


  function randomColor() {
    return `rgb(${getRandomNumber(100,255)},${getRandomNumber(100,255)},${getRandomNumber(100,255)})`;
  }

  function pushTodo() {
    let value = inputRef.current.value;
    if (value) {
      console.log(value);
      let currentdate = new Date().toISOString().split("T");
      let obj = {
        id: new Date().getTime(),
        v: value,
        d: `${currentdate[0]} ${currentdate[1].split(".")[0]}`,
        clr: randomColor(),
      };
      dispatch(addTodo(obj));
      inputRef.current.value = "";
    }
  }

  return (
    <div className="todo-container">
      <div className="user-input-section">
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            pushTodo();
          }}
        >
          Add
        </button>
      </div>
      <div className="todo-nodes">
        {todos.length !== 0 ? (
          todos.map((x, i) => <TodoNode key={x.id} todo={x}></TodoNode>)
        ) : (
          <h2>No todos for you 😎</h2>
        )}
      </div>
    </div>
  );
}

export default TodoContainer;
