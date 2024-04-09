import { useState } from "react";
import "../styles.css";

export function Form({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.length) {
      onSubmit(newItem);
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
          id="item-search-bar"
        />
      </div>
      <button className="addBtn">Add</button>
    </form>
  );
}
