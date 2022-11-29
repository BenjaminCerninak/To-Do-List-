import React from "react";
import classes from "./TaskForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const TaskForm = (props) => {
  return (
    <Card>
      <form>
        <label>Task</label>
        <input type="text" />
        <label>Deadline</label>
        <input type="date" />
        <label>Time</label>
        <input type="time" step="300" />
        <Button>Add task</Button>
      </form>
    </Card>
  );
};
export default TaskForm;
