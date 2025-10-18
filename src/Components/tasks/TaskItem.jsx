import { FaTrash, FaEdit } from "react-icons/fa";

const TaskItem = ({
  handleEdit,
  tasks,
  handleDelete,
  handleChecked,
  filter,
}) => {
  return (
    <>
      {tasks.length === 0 && filter === "all" && (
        <p className="noTasks">No tasks available. Please add a task.</p>
      )}

      {tasks.length === 0 && filter === "pending" && (
        <p className="noTasks">
          No tasks available in pending status. All the task are completed.
        </p>
      )}

      {tasks.length === 0 && filter === "completed" && (
        <p className="noTasks">
          No tasks available in completion status. All the task are pending.
        </p>
      )}

      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`taskItem ${
                task.status === "completed"
                  ? "taskItemCompleted"
                  : "taskItemPending"
              }`}
            >
              <div className="taskItemLeft">
                <input
                  type="checkbox"
                  className="taskCheckbox"
                  checked={task.status === "pending" ? false : true}
                  onChange={() => handleChecked(task.id)}
                />
                <div className="taskDetails">
                  <h4> {task.title} </h4>
                  <span className="taskTimestamp">{task.timestamp}</span>
                </div>
              </div>
              <div className="taskItemRight">
                <button
                  className="deleteTask"
                  onClick={() => handleDelete(task.id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="editTask"
                  onClick={() => handleEdit(task.id)}
                >
                  <FaEdit />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskItem;
