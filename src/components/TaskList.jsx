import { useState, useEffect } from "react";
import { useTaskContext } from "../contexts/TaskContext";

const TaskList = ({ isFirstCard }) => {
  const { addTaskIsClicked, setAddTaskIsClicked, tasks, setTasks } =
    useTaskContext();

  const [newTask, setTaskName] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (isFirstCard && addTaskIsClicked) {
      setShowInput(true);
    }
  }, [addTaskIsClicked, isFirstCard]);

  const handleSave = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [...prev, newTask]);
    setTaskName("");
    setShowInput(false);
    setAddTaskIsClicked(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };

  return (
    <>
      {isFirstCard &&
        tasks.map((task, index) => (
          <div
            key={index}
            className="shadow-sm  bg-white border border-gray-200 px-2 py-2 rounded-md text-center text-gray-800"
          >
            {task}
          </div>
        ))}

      {isFirstCard && showInput && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="shadow-sm bg-white border border-gray-200 px-2 py-2 text-center text-gray-800 outline-none rounded-md text-sm "
            placeholder="Enter task name..."
            value={newTask}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      )}
    </>
  );
};

export default TaskList;
