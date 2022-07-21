import axios from "../../services/axios";
import React, { useEffect } from "react";
import TodoCollection from "./comps/todo-collection/TodoCollection";
const PETS = [
  {
    id: 2,
    date: "2022-06-12",
    todoNotes: [
      {
        id: 5,
        priority: "MEDIUM",
        desc: "my third Note9 always workk  djhd kljsl j lores y third Note9 always workk  djhd kljsl j loresl!!",
        added: "2022-06-12T11:44:53.341+00:00",
      },
      {
        id: 2,
        priority: "LOW",
        desc: "my third Note8!!my third Note9 always workk  djhd kljsl j lores y third Note9 always workk  djhd kljsl j loresl!!",
        added: "2022-06-12T11:44:53.341+00:00",
      },
    ],
  },
  {
    id: 3,
    date: "2022-06-17",
    todoNotes: [
      {
        id: 2,
        priority: "HIGH",
        desc: "my third No38te!!my third Note9 always workk  djhd kljsl j lores y third Note9 always workk  djhd kljsl j loresl!!",
        added: "2022-06-12T11:44:53.341+00:00",
      },
      {
        id: 3,
        priority: "MEDIUM",
        desc: "my thirdmy third Note9 always workk  djhd kljsl j lores y third Note9 always workk  djhd kljsl j loresl!! Note2!!",
        added: "2022-06-12T11:44:53.341+00:00",
      },
    ],
  },
];
function TodoDashboard() {
    const [todos, setTodos] = React.useState([]);
  useEffect(function () {
    axios.get("/todo/get-all/2").then(function (response) {
      console.log(response.data);
      setTodos(response.data);
    });
  }, []);

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      {todos && todos.map((todo) => (
        <TodoCollection key={todo.id} todos={todo} />
      ))}
    </div>
  );
}

export default TodoDashboard;
