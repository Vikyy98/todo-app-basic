import useTask from "../../Hooks/useTask";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { createContext } from "react";

export const TaskContext = createContext();

const TaskList = () => {
  const {
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
  } = useTask();

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <>
      <section>
        <div className="taskListHeader">
          <button onClick={handleToggleForm} className="addTask">
            Add Task
          </button>
          <select className="filterTasks" onChange={handleOnSelectFilter}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="tasksContainer">
          <TaskContext.Provider
            value={{
              state: {
                filter,
                tasks: filteredTasks,
              },
              actions: {
                handleEdit,
                handleDelete,
                handleChecked,
              },
            }}
          >
            <TaskItem />
          </TaskContext.Provider>
        </div>
      </section>
      <div>
        {showForm && (
          <AddTask
            initialData={initialData}
            setInitialData={setInitialData}
            handleAddOrEditTask={handleAddOrEditTask}
          />
        )}
      </div>
    </>
  );
};

export default TaskList;
