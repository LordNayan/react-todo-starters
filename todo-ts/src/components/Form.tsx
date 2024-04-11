import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export const Form: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const dispatch = useDispatch();
  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (item.length) {
      dispatch(addTodo(item));
    }
    setItem("");
  }
  return (
    <form className="input-form" onSubmit={submitForm}>
      <input
        value={item}
        placeholder="Input your Item"
        onChange={(e: ChangeEvent) =>
          setItem((e.target as HTMLInputElement).value)
        }
        className="text-input"
      ></input>
      <button className="add-btn" type="submit">
        +
      </button>
    </form>
  );
};
