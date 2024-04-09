import { useContext } from "react";
import { AppState } from "../App";

export default function ListItem({ todo }) {
  const { deleteTodo, toggleTodo } = useContext(AppState);
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
