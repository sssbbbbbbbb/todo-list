const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task-item";
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

function deleteTask(taskElement) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskElement.parentElement.remove();
  }
}
