import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import NewTaskList from "./components/NewTasks/NewTaskList";
function App() {
  const [newTask, setNewTask] = useState([]);
  const addTasksHandler = (tData, tDeadline, tTime) => {
    setNewTask((prevTask) => {
      return [
        ...prevTask,
        {
          task: tData,
          deadline: tDeadline,
          time: tTime,
          id: Math.random().toString(),
        },
      ];
    });
  };
  console.log(newTask);
  return (
    <div>
      <TaskForm onAddTasks={addTasksHandler} />
      <NewTaskList newTasks={newTask} />
    </div>
  );
}

export default App;
