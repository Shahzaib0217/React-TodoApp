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
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };
  return (
    // wrapper for the entire project
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {/* Calling custom components */}
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
