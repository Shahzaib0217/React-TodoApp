import { useState } from "react";
// library imports
import { PlusIcon } from "@heroicons/react/24/solid";

// passing props
const CustomForm = ({ addTask }) => {
  // state
  const [Task, setTask] = useState("");
  // event handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: Task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      {/* For input and its label */}
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={Task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>

      {/* Submit Button */}
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
