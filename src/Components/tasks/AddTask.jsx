import React from "react";

const AddTask = ({ initialData, setInitialData, handleAddOrEditTask }) => {
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInitialData({
      id: initialData.id,
      title: value,
    });
  };

  return (
    <form
      className="addTaskForm"
      onSubmit={(e) => handleAddOrEditTask(e, initialData.id)}
    >
      <input
        type="text"
        className="taskInput"
        placeholder="✍️  Add a new task..."
        name="taskInput"
        autoComplete="off"
        required
        value={initialData.title}
        onChange={handleOnChange}
      />
      <button type="submit" className="submitTask">
        {initialData?.id ? "📝 Edit Task" : "➕ Add Task"}
      </button>
    </form>
  );
};

export default AddTask;
