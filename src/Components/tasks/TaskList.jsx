import useTask from "../../Hooks/useTask";
import TaskItem from "./TaskItem";

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
          <TaskItem
            handleEdit={handleEdit}
            tasks={
              filter === "all"
                ? tasks
                : tasks.filter((task) => task.status === filter)
            }
            handleDelete={handleDelete}
            handleChecked={handleChecked}
            filter={filter}
          />
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
