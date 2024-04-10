import ListItem from "./ListItem";
import { useSelector } from "react-redux";

export default function List() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return (
    <ul className="no-bullets">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}
