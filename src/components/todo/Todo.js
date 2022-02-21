import "./Todo.css";
import Todolist from "../todo-list/Todolist";
import TodoCreate from "../todo-create/TodoCreate";
import { useState } from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn Together",
    },
    {
      id: 2,
      title: "Keep Studying",
    },
  ]);

  // Ketika add todo list
  const eventCreateTodo = (todo) => {
    // Menambahkan value ke const todo
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div className="App">
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <Todolist dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
