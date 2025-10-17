import React from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useState } from "react";

const TaskList = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "New task",
      timestamp: "2024-06-15 10:00 AM",
      status: "pending",
    },
    {
      id: 2,
      title: "New task 2",
      timestamp: "2024-06-15 10:00 AM",
      status: "pending",
    },
  ]);

  const handleDelete = (id) => {
    console.log("Delete task with id:", id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <section>
        <div className="taskListHeader">
          <button onClick={toggleForm} className="addTask">
            Add Task
          </button>
          <select className="filterTasks">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="tasksContainer">
          <TaskItem tasks={tasks} handleDelete={handleDelete} />
        </div>
      </section>
      <div>{showForm && <AddTask setTasks={setTasks} />}</div>
    </>
  );
};

export default TaskList;
