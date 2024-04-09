import ListItem from "./ListItem";

export default function List({ todos }) {
  return (
    <>
      <ul>
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return <ListItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
}
