import React from "react";
import classes from "./Button.module.css";

interface Props {
  buttonFunction: () => void | null;
  children: any;
  color: string;
}

const HollowButton: React.FC<Props> = ({ children, buttonFunction, color }) => {
  return (
    <button
      type="button"
      className={`${classes.hollowButton}
      ${color === "grey" ? classes.grey : ""} ${
        color === "green" ? classes.green : ""
      } ${color === "blue" ? classes.blue : ""} ${
        color === "red" ? classes.red : ""
      } ${color === "yellow" ? classes.yellow : ""}
      
      `}
      onClick={() => buttonFunction()}
    >
      {children}
    </button>
  );
};

export default HollowButton;
