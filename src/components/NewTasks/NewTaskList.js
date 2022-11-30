import React from "react";
import Card from "../UI/Card";
import classes from "./NewTaskList.module.css";

const NewTaskList = (props) => {
  return (
    <Card>
      <ul>
        {props.newTasks.map((newTask) => {
          return (
            <Card>
              <li>
                <h5>{newTask.task}</h5>
                <h5>{newTask.deadline}</h5>
                <h5>{newTask.time}</h5>
              </li>
            </Card>
          );
        })}
      </ul>
    </Card>
  );
};
export default NewTaskList;
