import React, { useState } from "react";
import classes from "./TaskForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const TaskForm = (props) => {
  const [addTask, setAddTask] = useState("");
  const [addDeadline, setAddDeadline] = useState("");
  const [addTime, setAddTime] = useState("08:00");
  const submitHandler = (event) => {
    event.preventDefault();

    if (addTask.trim().length === 0) {
      props.onSetError("Empty Task", "You need to write a task!");

      return;
    }
    if (addTask.trim().length > 35) {
      props.onSetError(
        "Too many characters",
        "Please do not use more then 35 characters in Task field!"
      );

      return;
    }

    if (addDeadline.length === 0) {
      props.onSetError("Invalid Date", "Please select a Date!");
      return;
    }
    props.onAddTasks(addTask, addDeadline, addTime);
    setAddTask("");
    setAddDeadline("");
    setAddTime("08:00");
  };
  const changeTaskHandler = (event) => {
    setAddTask(event.target.value);
  };

  const changeDeadlineHandler = (event) => {
    setAddDeadline(event.target.value);
  };

  const changeTimeHandler = (event) => {
    setAddTime(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.task}>
          <label>Task</label>
          <input value={addTask} onChange={changeTaskHandler} type="text" />
        </div>
        <div className={classes.task}>
          <label>Deadline</label>
          <input
            value={addDeadline}
            onChange={changeDeadlineHandler}
            type="date"
          />
        </div>
        <div className={classes.task}>
          <label>Time</label>
          <input
            onChange={changeTimeHandler}
            type="time"
            name="timeField"
            value={addTime}
          />
        </div>
        <div>
          <Button type={"submit"} className={classes.actions}>
            Add task
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default TaskForm;
