import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [addTaskIsClicked, setAddTaskIsClicked] = useState(false);
  const [tasks, setTasks] = useState([]); // 🟢 add tasks state here

  return (
    <TaskContext.Provider
      value={{ addTaskIsClicked, setAddTaskIsClicked, tasks, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
