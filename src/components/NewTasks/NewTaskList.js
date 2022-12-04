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
            const dateArr = newTask.deadline.split("-");
            const year = dateArr[0];
            const month = dateArr[1][0] === "0" ? dateArr[1][1] : dateArr[1];
            const day = dateArr[2][0] === "0" ? dateArr[2][1] : dateArr[2];
            const printDate = `${day}.${month}. ${year}`;
            return (
              <div key={newTask.id} className={classes.box}>
                <Card>
                  <li className={classes.list}>
                    <div className={classes.task}> {newTask.task}</div>
                    <div className={classes.timeinfo}>
                      {" "}
                      <div className={classes.date}> {printDate}</div>
                      <div className={classes.time}> {newTask.time}</div>
                    </div>
                  </li>
                  {/* <Button className={classes.btn}>Remove</Button>
                  <Button className={classes.success}>Done</Button> */}
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
