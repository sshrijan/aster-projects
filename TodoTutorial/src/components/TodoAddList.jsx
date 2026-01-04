import React from 'react'

function TodoAddList({
  task,
  onCheckButtonClick,
  onEditButtonClick,
  onDeleteButtonClick
}) {
  return (
          <div className="border h4 fw-bold p-4" key={task.id}>
            <p className= {task.status === "checked" ? "checked" : "unchecked"}>
              {task.task}
            </p>
            <p className= {task.status === "checked" ? "checked" : "unchecked"}>
              {task.description}
            </p>

            <div className="actions w-full d-flex align-items-center justify-content-center gap-1">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => onEditButtonClick(task.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-success"
                onClick={() => onCheckButtonClick(task.id)}
              >
                Check
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDeleteButtonClick(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )
}

export default TodoAddList