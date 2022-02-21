import "./Todo-create.css";
import { useState } from "react";

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState("");
  const handleSubmit = (event) => {
    // menahan nilai default
    event.preventDefault();

    // Membuat nilai random
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodo,
    };
    // console.log(newTodo);

    // Menambah data dari const newTodo
    props.onCreateTodo(newTodo);
    setInputTodo("");
  };

  // Menampung input dari form dan disimpan ke setInputTodo
  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  console.log(getInputTodo);

  // Mengembalikan nilai kosong saat setelah diinputkan

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInputTodo} onChange={handleInputTodo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
