import React from "react";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const errorBtnHandler = () => {
    props.onChangeError(false);
  };

  return (
    <div className={classes.content}>
      <header>
        <h2>{props.errorMessages.title}</h2>
      </header>
      <div>
        <p>{props.errorMessages.message}</p>
      </div>
      <footer>
        <Button onClick={errorBtnHandler} className={classes.btn}>
          Okay
        </Button>
      </footer>
    </div>
  );
};

export default ErrorModal;
