import { FaTrash, FaEdit } from "react-icons/fa";
import { TaskContext } from "./TaskList";
import { useContext } from "react";

const TaskItem = () => {
  const { state, actions } = useContext(TaskContext);

  return (
    <>
      {state.tasks.length === 0 && state.filter === "all" && (
        <p className="noTasks">No tasks available. Please add a task.</p>
      )}

      {state.tasks.length === 0 && state.filter === "pending" && (
        <p className="noTasks">
          No tasks available in pending status. All the task are completed.
        </p>
      )}

      {state.tasks.length === 0 && state.filter === "completed" && (
        <p className="noTasks">
          No tasks available in completion status. All the task are pending.
        </p>
      )}

      {state.tasks.length > 0 && (
        <ul>
          {state.tasks.map((task) => (
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
                  onChange={() => actions.handleChecked(task.id)}
                />
                <div className="taskDetails">
                  <h4> {task.title} </h4>
                  <span className="taskTimestamp">{task.timestamp}</span>
                </div>
              </div>
              <div className="taskItemRight">
                <button
                  className="deleteTask"
                  onClick={() => actions.handleDelete(task.id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="editTask"
                  onClick={() => actions.handleEdit(task.id)}
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
