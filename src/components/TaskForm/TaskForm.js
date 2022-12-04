import React, { useState } from "react";
import classes from "./TaskForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Date from "./Date";
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
    if (addTask.trim().length > 25) {
      props.onSetError(
        "Too many characters",
        "Please do not use more then 25 characters in Task field!"
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

  const onGetDateHandler = (date) => {
    setAddDeadline(date);
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
          <Date addDeadline={addDeadline} onSetDate={onGetDateHandler} />
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
