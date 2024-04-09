import { useState } from "react";
import "./styles.css";
import { Form } from "./components/Form";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, done: false },
    ]);
    console.log(todos);
  }

  function deleteTodo(todoId) {
    setTodos([...todos.filter((todo) => todo.id != todoId)]);
  }

  function markTodoAsDone(todoId) {
    const newTodos = [];
    todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
      newTodos.push(todo);
    });
    setTodos(newTodos);
  }
  return (
    <>
      <Form onSubmit={addTodo} />
      <ul>
        <h1 className="header">TODO List</h1>
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  defaultChecked={todo.done}
                  onChange={() => markTodoAsDone(todo.id)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
