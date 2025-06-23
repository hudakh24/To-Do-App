import { useState, useEffect } from "react";
import { useTaskContext } from "../contexts/TaskContext";

const TaskList = ({ isFirstCard }) => {
  const { addTaskIsClicked, setAddTaskIsClicked, tasks, setTasks } =
    useTaskContext();

  const [newTask, setTaskName] = useState("");
  const [taskDetail, setTaskDetail] = useState("");
  const [showTemplate, setShowTemplate] = useState(false);

  useEffect(() => {
    if (isFirstCard && addTaskIsClicked) {
      setShowTemplate(true);
    }
  }, [addTaskIsClicked, isFirstCard]);

  const handleSave = () => {
    if (!newTask.trim() && !taskDetail.trim()) return;
    const taskName = newTask.trim() || "Enter Task";
    const detail = taskDetail.trim() || "Enter detail";

    const newTaskObj = {
      name: taskName,
      detail: detail,
      priority: "Low",
      date: "Date",
      progress: "0%",
      assignee: "/member.png",
    };

    setTasks((prev) => [...prev, newTaskObj]);
    setTaskName("");
    setTaskDetail("");
    setShowTemplate(false);
    setAddTaskIsClicked(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };

  return (
    <>
      {/* Render existing tasks */}
      {isFirstCard &&
        tasks.map((task, index) => (
          <div
            key={index}
            className="flex px-4 flex-col border border-gray-200 shadow-md rounded-md bg-white mb-2"
          >
            {/* Upper */}
            <div className="flex justify-between items-center h-[25%] w-full mt-2">
              <div className="flex items-center justify-between w-16 h-[64%] bg-green-100 rounded-md px-2">
                <img src="/icons/flag.svg" alt="flag" className="w-3.5 h-3.5" />
                <span className="text-[#4FC079] text-sm font-medium">
                  {task.priority}
                </span>
              </div>
              <div className="flex items-center justify-between h-[55%]">
                <img
                  src="/icons/optionsDots.svg"
                  alt="options"
                  className="size-5"
                />
              </div>
            </div>

            {/* Middle */}
            <div className="h-[40%] mt-3 w-full border-b border-gray-300">
              <p className="text-left font-semibold text-xl">{task.name}</p>
              <div className="flex items-center mt-1 mb-3 gap-2">
                <img
                  src="/icons/arrowCurved.svg"
                  alt="arrow"
                  className="size-4"
                />
                <p className="text-gray-600 text-sm font-medium">
                  {task.detail}
                </p>
              </div>
            </div>

            {/* Lower */}
            <div className="flex items-center justify-between mb-2 h-[30%] w-full mt-2">
              <img
                className="size-7 rounded-full"
                src={task.assignee}
                alt="Team member"
              />
              <div className="px-1 flex items-center justify-between w-[64%] h-[65%]">
                <div className="flex items-center px-2 py-1 gap-1">
                  <img
                    src="/icons/calendar.svg"
                    alt="calendar"
                    className="size-4"
                  />
                  <span className="text-sm">{task.date}</span>
                </div>
                <div className="text-gray-300 text-center">|</div>
                <div className="flex items-center px-2 py-1 gap-1">
                  <img src="/icons/roundBar.svg" alt="bar" className="size-4" />
                  <span className="text-sm">{task.progress}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Show input template when user clicks add */}
      {isFirstCard && showTemplate && (
        <div className="flex px-4 flex-col border border-gray-200 shadow-md rounded-md bg-white">
          {/* Upper */}
          <div className="flex justify-between items-center h-[25%] w-full mt-2">
            <div className="flex items-center justify-between w-16 h-[64%] bg-green-100 rounded-md px-2">
              <img src="/icons/flag.svg" alt="flag" className="w-3.5 h-3.5" />
              <span className="text-[#4FC079] text-sm font-medium">Low</span>
            </div>
            <div className="flex items-center justify-between h-[55%]">
              <img
                src="/icons/optionsDots.svg"
                alt="options"
                className="size-5"
              />
            </div>
          </div>

          {/* Middle */}
          <div
            className="h-[40%] mt-3 w-full border-b border-gray-300"
            onKeyDown={handleKeyDown}
          >
            <input
              type="text"
              className="bg-white w-full text-left outline-none font-semibold text-xl placeholder-black"
              placeholder="Enter Task"
              value={newTask}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <div className="flex items-center mt-1  mb-3 gap-2">
              <img
                src="/icons/arrowCurved.svg"
                alt="arrow"
                className="size-4"
              />
              <input
                type="text"
                className="text-gray-600 text-sm w-full h-full font-medium placeholder-gray-600 outline-none"
                placeholder="Enter detail"
                value={taskDetail}
                onChange={(e) => setTaskDetail(e.target.value)}
              />
            </div>
          </div>

          {/* Lower */}
          <div className="flex items-center justify-between mb-2 h-[30%] w-full mt-2">
            <img
              className="size-7 rounded-full"
              src="/member.png"
              alt="Team member"
            />
            <div className="px-1 flex items-center justify-between w-[64%] h-[65%]">
              <div className="flex items-center px-2 py-1 gap-1">
                <img
                  src="/icons/calendar.svg"
                  alt="calendar"
                  className="size-4"
                />
                <span className="text-sm">Date</span>
              </div>
              <div className="text-gray-300 text-center">|</div>
              <div className="flex items-center px-2 py-1 gap-1">
                <img src="/icons/roundBar.svg" alt="bar" className="size-4" />
                <span className="text-sm">0%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskList;
