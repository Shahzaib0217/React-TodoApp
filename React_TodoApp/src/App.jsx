import { useState } from "react";
// Custom components
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // defining addTask
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    // wrapper for the entire project
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {/* Calling custom components */}
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
