import Todo from "../todo/Todo";
import "./Todolist.css";

const Todolist = (props) => {
  // console.log(props.dataTodos);
  return (
    <ul>
      {props.dataTodos.map((todo, index) => {
        return <li key={index}> {todo.title}</li>;
      })}
    </ul>
  );
};

export default Todolist;
