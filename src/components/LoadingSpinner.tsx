import React from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div
          className={`${classes.justify__content__center} ${classes.jimu__primary__loading}`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
