import React from "react";
import classes from "./TaskForm.module.css";
const TaskForm = (props) => {
  return (
    <form>
      <label>Task</label>
      <input type="text" />
      <label>Deadline</label>
      <input type="date" />
      <label>Time</label>
      <input type="time" step="300" />
    </form>
  );
};
export default TaskForm;
