import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import NewTaskList from "./components/NewTasks/NewTaskList";
import ErrorModal from "./components/UI/ErrorModal";
function App() {
  const [newTask, setNewTask] = useState([]);
  const addTasksHandler = (tData, tDeadline, tTime) => {
    setNewTask((prevTask) => {
      return [
        {
          task: tData,
          deadline: tDeadline,
          time: tTime,
          id: Math.random().toString(),
        },
        ...prevTask,
      ];
    });
  };
  console.log(newTask);
  return (
    <div>
      <ErrorModal />
      <TaskForm onAddTasks={addTasksHandler} />
      <NewTaskList newTasks={newTask} />
    </div>
  );
}

export default App;
