import React from "react";
import { useSelector } from "react-redux";
import { CalcStore } from "../store/store";

export const Display: React.FC = () => {
  const calcState = useSelector((state: CalcStore) => state.calcReducer);

  return (
    <div className="calc-display">
      {calcState.operatorTriggered
        ? calcState.operandString
        : calcState.numberString}
    </div>
  );
};
