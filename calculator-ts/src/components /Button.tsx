import React from "react";
import {
  add,
  appendToDisplay,
  calculate,
  clearDisplay,
} from "../store/feature/calcSlice";
import { useDispatch } from "react-redux";

interface Props {
  button: {
    title: string;
  };
}
export const Button: React.FC<Props> = ({ button }) => {
  const dispatch = useDispatch();
  function type(number: string) {
    if (number === "+") {
      dispatch(add());
    } else if (number === "=") {
      dispatch(calculate());
    } else if (number === "C") {
      dispatch(clearDisplay());
    } else {
      dispatch(appendToDisplay(number));
    }
    return undefined;
  }
  return (
    <button onClick={() => type(button.title)} className="calc-btn">
      {button.title}
    </button>
  );
};
