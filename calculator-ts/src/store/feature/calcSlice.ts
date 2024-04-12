import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberString: "",
  operatorTriggered: false,
  operator: "",
  operandString: "",
};

export const calcSlice = createSlice({
  name: "calcSlice",
  initialState,
  reducers: {
    appendToDisplay: (state, action) => {
      if (state.operatorTriggered) {
        state.operandString += action.payload;
      } else {
        state.numberString += action.payload;
      }
    },
    removeFromDisplay: (state) => {
      if (state.operatorTriggered) {
        state.operandString.slice(0, state.operandString.length - 1);
      } else {
        state.numberString.slice(0, state.numberString.length - 1);
      }
    },
    clearDisplay: (state) => {
      state.numberString = "";
      state.operandString = "";
      state.operatorTriggered = false;
      state.operator = "";
    },
    add: (state) => {
      console.log("EHHEHEHEHEH");
      console.log("NumberString ==> ", state.numberString);
      console.log("OperandString ==> ", state.operandString);
      if (!state.numberString.length) {
        return;
      }
      if (state.operandString.length) {
        state.numberString = `${+state.numberString + +state.operandString}`;
        console.log("1st if");
        console.log("NumberString ==> ", state.numberString);
        state.operandString = "";
      } else {
        state.operatorTriggered = true;
        state.operator = "+";
      }
    },
    subtract: (state) => {
      state.numberString = "";
    },
    multiply: (state) => {
      state.numberString = "";
    },
    divide: (state) => {
      state.numberString = "";
    },
    calculate: (state) => {
      if (state.operatorTriggered) {
        switch (state.operator) {
          case "+": {
            console.log("state.op ", state.operandString);
            if (state.operandString.length) {
              console.log("HERE");
              calcSlice.actions.add();
            }
            break;
          }
          default: {
            console.log("hi");
          }
        }
        state.operatorTriggered = false;
        state.operator = "";
      }
    },
  },
});

export const {
  appendToDisplay,
  removeFromDisplay,
  clearDisplay,
  calculate,
  add,
} = calcSlice.actions;

export default calcSlice.reducer;
