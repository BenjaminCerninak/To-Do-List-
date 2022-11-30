import React from "react";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.content}>
      <header>
        <h2> Title{props.title}</h2>
      </header>
      <div>
        <p> Message lorem {props.message}</p>
      </div>
      <footer>
        <Button className={classes.btn}>Okay</Button>
      </footer>
    </div>
  );
};

export default ErrorModal;
