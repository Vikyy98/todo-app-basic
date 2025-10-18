import { useState } from "react";
import taskHelper from "../utils/taskHelper";

const useTask = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, selectedFilter] = useState("all");
  const [initialData, setInitialData] = useState({
    id: 0,
    title: "",
  });
  const { handleStatusToggle } = taskHelper();

  const handleAddOrEditTask = (e, id = 0) => {
    e.preventDefault();
    const title = e.target.elements.taskInput.value.trim();
    if (!title) {
      return;
    }
    let newTasks = [];
    if (id && id != 0) {
      newTasks = (prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? {
                ...task,
                title: title,
                timestamp: new Date().toLocaleString(),
                status: handleStatusToggle(tasks, id),
              }
            : task
        );
      setTasks(newTasks);
    } else {
      const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        timestamp: new Date().toLocaleString(),
        status: "pending",
      };
      newTasks = (prevTasks) => [...prevTasks, newTask];
      setTasks(newTasks);
    }
    e.target.reset();
    setShowForm(!showForm);
  };

  const handleDelete = (id) => {
    console.log("Delete task with id:", id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit clicked:", id);
    const selectedTask = tasks.find((t) => t.id === id);
    setInitialData({
      id: id,
      title: selectedTask.title,
    });
    setShowForm(!showForm);
  };

  const handleChecked = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: handleStatusToggle(task.status),
            }
          : task
      )
    );
  };

  const handleOnSelectFilter = (e) => {
    const currentValue = e.target.value;
    selectedFilter(currentValue);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setInitialData({
      id: 0,
      title: "",
    });
  };

  return {
    tasks,
    showForm,
    initialData,
    filter,
    setInitialData,
    handleAddOrEditTask,
    handleEdit,
    handleDelete,
    handleChecked,
    handleOnSelectFilter,
    handleToggleForm,
  };
};

export default useTask;
