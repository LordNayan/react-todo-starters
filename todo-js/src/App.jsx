import { useState, createContext, useEffect } from "react";
import "./styles.css";
import { Form } from "./components/Form";
import List from "./components/List";
export const AppState = createContext("appContext");
export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, done: false },
    ]);
  }

  function deleteTodo(todoId) {
    setTodos([...todos.filter((todo) => todo.id != todoId)]);
  }

  function toggleTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    });
  }
  return (
    <AppState.Provider value={{ deleteTodo, toggleTodo }}>
      <h1 className="header">TODO List</h1>
      <Form onSubmit={addTodo} />
      <List todos={todos} />
    </AppState.Provider>
  );
}
