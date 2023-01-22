import React from "react";
import "./TodoNode.css";
import { useDispatch } from "./../../../node_modules/react-redux/es/hooks/useDispatch";
import { deleteTodo } from "../../redux/topics/todoSlice";

function TodoNode({ todo }) {
  const dispatch = useDispatch();
  function deleteNode(){
    dispatch(deleteTodo(todo.id));
  }

  return (
    <div className="todo-node" style={{"backgroundColor":todo.clr}}>
      <div>
        <span>{todo.v}</span>
        <span>{todo.d}</span>
        <span onClick={()=>deleteNode()} className="delete-button">❌</span>
      </div>
    </div>
  );
}

export default TodoNode;
