import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./feature/calcSlice";

export interface CalcStore {
  calcReducer: {
    numberString: string;
    operatorTriggered: boolean;
    operator: string;
    operandString: string;
    initNumberString: string;
  };
}
export const store = configureStore({
  reducer: { calcReducer: calcSlice },
});
