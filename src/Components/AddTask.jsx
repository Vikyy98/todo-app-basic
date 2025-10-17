import React from "react";

const AddTask = ({ setTasks }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.elements.taskInput.value.trim();
    if (title) {
      const newTask = {
        id: Date.now(),
        title,
        timestamp: new Date().toLocaleString(),
        status: "pending",
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      e.target.reset();
    }
  };

  return (
    <form className="addTaskForm" onSubmit={handleAddTask}>
      <input
        type="text"
        className="taskInput"
        placeholder="✍️  Add a new task..."
        name="taskInput"
        autoComplete="off"
        required
      />
      <button type="submit" className="submitTask">
        ➕ Add Task
      </button>
    </form>
  );
};

export default AddTask;
