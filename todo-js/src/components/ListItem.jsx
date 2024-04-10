import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/features/todo/todoSlice";
import { useState } from "react";

export default function ListItem({ todo }) {
  const [done, setDone] = useState(todo.done);
  const dispatch = useDispatch();
  return (
    <div
      className={
        done ? "list-item-container list-item-disabled" : "list-item-container"
      }
      onClick={() => {
        dispatch(toggleTodo(todo.id));
        setDone(!done);
      }}
    >
      <div className="text-container">{todo.title}</div>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
}
