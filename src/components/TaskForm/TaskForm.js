import React from "react";
import classes from "./TaskForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const TaskForm = (props) => {
  return (
    <Card>
      <form>
        <div className={classes.task}>
          <label>Task</label>
          <input type="text" />
        </div>
        <div className={classes.task}>
          <label>Deadline</label>
          <input type="date" />
        </div>
        <div className={classes.task}>
          <label>Time</label>
          <input type="time" step="300" />
        </div>
        <div>
          <Button className={classes.actions}>Add task</Button>
        </div>
      </form>
    </Card>
  );
};
export default TaskForm;
