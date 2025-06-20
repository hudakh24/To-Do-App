import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./contexts/TaskContext.jsx"; // 👈 Import

createRoot(document.getElementById("root")).render(
  <TaskProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TaskProvider>
);
