import React, { useState } from 'react';
import TodoAddList from './TodoAddList';

export const Todo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [checkAll, setCheckAll] = useState(false);

  const onSubmitButtonClick = () => {
    setTaskList([
      ...taskList,
      {
        id: taskList.length + 1,
        task: task,
        description: description,
        status: "unchecked",
      },
    ]);
    setTask("");
    setDescription("");
  };

  const onDeleteButtonClick = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const onEditButtonClick = (id) => {
    setIsEditing(true);
    setEditTaskId(id);
    const foundTask = taskList.find((item) => item.id === id);
    setTask(foundTask.task);
    setDescription(foundTask.description);
  };

  const onEditButtonSubmit = () => {
    const updatedList = taskList.map((item) =>
      item.id === editTaskId
        ? { ...item, task: task, description: description }
        : item
    );
    setTaskList(updatedList);
    setIsEditing(false);
    setTask("");
    setDescription("");
  };

  const onCheckButtonClick = (id) => {
    const updatedList = taskList.map((item) =>
      item.id === id
        ? { ...item, status: item.status === "unchecked" ? "checked" : "unchecked" }
        : item
    );
    setTaskList(updatedList);
  };

  const onUncheckAllButtonClick = () => {
  setCheckAll(true);
  const updatedList = taskList.map((item) => ({
    ...item,
    status: "checked",
  }));

  setTaskList(updatedList);
};


  const onCheckAllButtonClick = (id) => {
    const updatedList = taskList.map((item) => ({
    ...item,
    status: "unchecked",
  }));
  
  setTaskList(updatedList);
    setCheckAll(false)
  }

  return (
    <>
    <div className="container">
      <h1 className="text-center mt-5">Todo App</h1>

      <div className="inputs mt-5">
        <form className="d-flex flex-column gap-3" onSubmit={(e) => e.preventDefault()}>
          <label className="form-label">Enter Task:</label>
          <input
            type="text"
            placeholder="Task..."
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description..."
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className='input-btn'>
            {isEditing ? (
              <button type="button" onClick={onEditButtonSubmit} className="btn btn-warning mt-4">
                Edit Task
              </button>
            ) : (
              <button type="button" onClick={onSubmitButtonClick} className="btn btn-success mt-4">
                Add Task
              </button>
            )}
            {checkAll ? (
              <button type="button" onClick={onCheckAllButtonClick} className="checkAll-btn btn btn-warning mt-4">
                UnCheck All
              </button>
            ) : (
              <button type="button" onClick={onUncheckAllButtonClick} className="uncheckAll-btn btn btn-success mt-4">
                Check All
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="todo-container mt-5 d-flex flex-column gap-3">
        {taskList.map((task) => {
          return <TodoAddList 
          key = {task.id}
          task = {task}
          onCheckButtonClick = {onCheckButtonClick}
          onEditButtonClick = {onEditButtonClick}
          onDeleteButtonClick = {onDeleteButtonClick}

          />
        }
          )}
      </div>

    </div>
    </>
  );
};