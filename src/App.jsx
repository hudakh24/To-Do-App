import Header from "./components/Header";
import ProjectOverview from "./components/ProjectOverview";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <div className="p-2 h-screen flex flex-col ">
      <Header />

      {/* Main Body */}
      <div className="flex flex-col flex-1 ">
        <ProjectOverview />
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
