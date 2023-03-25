import React from "react";
import classes from "./Button.module.css";

interface Props {
  buttonFunction: () => void;
  children: any;
}

const FullGreenButton: React.FC<Props> = ({ children, buttonFunction }) => {
  return (
    <button
      type="button"
      className={classes.fullButton}
      onClick={() => buttonFunction()}
    >
      {children}
    </button>
  );
};

export default FullGreenButton;
