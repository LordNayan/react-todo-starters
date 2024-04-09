import { useState } from "react";
import "../styles.css";

export function Form({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.length) {
      onSubmit(newItem);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="Item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item-search-bar"
        />
      </div>
      <button className="addBtn">Add</button>
    </form>
  );
}
