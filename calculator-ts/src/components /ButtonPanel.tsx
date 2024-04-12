import React from "react";
import { Button } from "./Button";
import { buttons } from "./helper/buttonHelper";
import { nanoid } from "@reduxjs/toolkit";

export const ButtonPanel: React.FC = () => {
  return (
    <div className="calc-btn-panel">
      {buttons.map((btn) => {
        return <Button key={nanoid()} button={btn}></Button>;
      })}
    </div>
  );
};
