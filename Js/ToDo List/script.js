
  const todoForm = document.getElementById('todoForm');
  const taskInput = document.getElementById('taskInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const tasksContainer = document.getElementById('tasksContainer');
  const editingIdInput = document.getElementById('editingId');
  const cancelEditBtn = document.getElementById('cancelEdit');

  let tasks = [];

  function renderTasks() {
    tasksContainer.innerHTML = '';
    tasks.forEach(task => {
      const div = document.createElement('div');
      div.className = 'd-flex justify-content-between align-items-center mb-2 p-2 border';
      div.innerHTML = `
        <div>
          <div class="${task.completed ? 'task-completed' : ''}">${task.title}</div>
          <small>${task.description || ''}</small>
        </div>
        <div>
          <button class="btn btn-success btn-sm me-1 completeBtn">${task.completed ? '<i class="fa-solid fa-rotate-left"></i>' : '<i class="fa-solid fa-check"></i>'}</button>
          <button class="btn btn-primary btn-sm me-1 editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn btn-danger btn-sm deleteBtn"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
      tasksContainer.appendChild(div);

      // Button actions
      div.querySelector('.completeBtn').onclick = () => {
        task.completed = !task.completed;
        renderTasks();
      };
      div.querySelector('.editBtn').onclick = () => startEdit(task);
      div.querySelector('.deleteBtn').onclick = () => {
        tasks = tasks.filter(t => t !== task);
        renderTasks();
      };
    });
  }

  function startEdit(task) {
    taskInput.value = task.title;
    descriptionInput.value = task.description;
    editingIdInput.value = tasks.indexOf(task);
    cancelEditBtn.style.display = 'inline-block';
  }

  function cancelEdit() {
    editingIdInput.value = '';
    todoForm.reset();
    cancelEditBtn.style.display = 'none';
  }

  todoForm.onsubmit = (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();
    const description = descriptionInput.value.trim();
    const editingIndex = editingIdInput.value;

    if (editingIndex) {
      tasks[editingIndex].title = title;
      tasks[editingIndex].description = description;
    } else {
      tasks.push({ title, description, completed: false });
    }

    cancelEdit();
    renderTasks();
  };

  cancelEditBtn.onclick = cancelEdit;

