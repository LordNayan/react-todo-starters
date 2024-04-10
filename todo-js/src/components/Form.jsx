import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles.css";
import { addTodo } from "../redux/features/todo/todoSlice";

export function Form() {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.length) {
      dispatch(addTodo(newItem));
    }
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add Item"
          type="text"
          className="item-search-bar"
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
