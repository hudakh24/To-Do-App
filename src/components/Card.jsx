import { useTaskContext } from "../contexts/TaskContext";
import TaskList from "./TaskList";

const cardColors = [
  "bg-gray-200",
  "bg-[rgba(58,152,235,0.1)]",
  "bg-[rgba(241,160,46,0.1)]",
  "bg-[rgba(32,187,112,0.1)]",
];

const Card = ({ title, index }) => {
  const color = cardColors[index % cardColors.length];
  const isFirstCard = index === 0;
  const { tasks, addTaskIsClicked } = useTaskContext();

  const shouldShowEmptyState =
    tasks.length === 0 && (!isFirstCard || (isFirstCard && !addTaskIsClicked));

  return (
    <div className="min-w-[280px] max-w-[280px]  bg-gray-50 rounded-xl border border-gray-200 shadow flex flex-col">
      {/* Header */}
      <div
        className={`flex m-2 items-center justify-between px-4 py-2 font-semibold rounded-xl ${color}`}
      >
        <span className="text-gray-800 font-medium">{title}</span>
      </div>

      {/* Task Section */}
      <div className="flex flex-1  flex-col gap-2 px-2 mb-2 text-sm">
        {shouldShowEmptyState && (
          <div className="flex flex-1 flex-col items-center justify-center px-4 py-2 text-sm text-gray-400">
            No task yet
          </div>
        )}

        <TaskList isFirstCard={isFirstCard} />
      </div>
    </div>
  );
};

export default Card;
