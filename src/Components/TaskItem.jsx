import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TaskItem = ({ tasks, handleDelete }) => {
  return (
    <>
      {tasks.length === 0 && (
        <p className="noTasks">No tasks available. Please add a task.</p>
      )}

      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="taskItem">
              <div className="taskItemLeft">
                <input type="checkbox" className="taskCheckbox" />
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
                <button className="editTask">
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
