import { useState } from "react";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import { useTaskContext } from "../contexts/TaskContext";
import "react-toastify/dist/ReactToastify.css";

const TaskBoard = () => {
  const [activeTab, setActiveTab] = useState("Onboard");
  const [cards, setCards] = useState([]);
  const { setAddTaskIsClicked } = useTaskContext();

  const tabs = [
    { title: "Overview" },
    { title: "Onboard" },
    { title: "Milestones" },
    { title: "Deliverable" },
    { title: "Calendar" },
    { title: "Discussion" },
  ];

  const handleAddCard = () => {
    const name = prompt("Enter card name:");
    if (!name) return;

    const newCard = {
      id: Date.now(),
      title: name,
    };

    setCards([...cards, newCard]);
  };

  const handleAddTask = () => {
    if (cards.length === 0) {
      toast.error("Please create a card first!");
      return;
    }
    setAddTaskIsClicked(true);
  };

  return (
    <div className="flex-1 flex-col mx-4 border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-100 flex items-center justify-between scroll-auto">
      <ToastContainer />

      {/* Tabs */}
      <div className="flex justify-between items-center border-b border-gray-300 w-full p-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab.title)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.title
                  ? "bg-[#C72C88] text-white"
                  : "bg-transparent hover:bg-gray-200"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleAddCard}
            className="px-4 py-2 border text-[#C72C88] border-[#C72C88] rounded-md text-sm font-medium hover:bg-[#C72C88] hover:text-white transition-colors"
          >
            Add card
          </button>
          <button
            onClick={handleAddTask}
            className="px-4 py-2 border border-[#10898F] text-[#10898F] rounded-md text-sm font-medium hover:bg-[#10898F] hover:text-white transition-colors"
          >
            Create task
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full h-full mt-6 flex gap-4 overflow-x-auto hide-scrollbar">
        {cards.map((card, index) => (
          <Card key={card.id} title={card.title} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
