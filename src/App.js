import React, { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import NewTaskList from "./components/NewTasks/NewTaskList";
import ErrorModal from "./components/UI/ErrorModal";
import Header from "./components/UI/Header";

function App() {
  const [newTask, setNewTask] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
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

  const errorHandler = () => {
    setError(false);
  };

  const setErrorHandler = (eTitle, eMessage) => {
    setErrorMessages({
      title: eTitle,
      message: eMessage,
    });
    setError(true);
  };
  return (
    <div>
      <Header>Todo App</Header>
      {error && (
        <ErrorModal
          errorMessages={errorMessages}
          onChangeError={errorHandler}
        />
      )}
      <TaskForm onSetError={setErrorHandler} onAddTasks={addTasksHandler} />
      <NewTaskList newTasks={newTask} />
    </div>
  );
}

export default App;
