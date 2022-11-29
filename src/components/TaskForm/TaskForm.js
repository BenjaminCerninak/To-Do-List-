import React from "react";
import classes from "./TaskForm.module.css";
import Button from "../UI/Button";
const TaskForm = (props) => {
  return (
    <form>
      <label>Task</label>
      <input type="text" />
      <label>Deadline</label>
      <input type="date" />
      <label>Time</label>
      <input type="time" step="300" />
      <Button>Add task</Button>
    </form>
  );
};
export default TaskForm;
