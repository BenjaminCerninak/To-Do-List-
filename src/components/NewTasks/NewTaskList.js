import React from "react";
import Card from "../UI/Card";
import classes from "./NewTaskList.module.css";
import Button from "../UI/Button";

const NewTaskList = (props) => {
  return (
    <div>
      <Card>
        <ul>
          {props.newTasks.map((newTask) => {
            return (
              <div key={newTask.id} className={classes.box}>
                <Card>
                  <li className={classes.list}>
                    <div> {newTask.task}</div>
                    <div> {newTask.deadline}</div>
                    <div> {newTask.time}</div>
                  </li>
                  <Button className={classes.btn}>Remove</Button>
                  <Button className={classes.success}>Done</Button>
                </Card>
              </div>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};
export default NewTaskList;
