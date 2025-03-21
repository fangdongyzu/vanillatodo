console.log("Hello")
const form = document.getElementById("taskForm");
const todoList = document.getElementById("todoList");
const taskName = document.getElementById("taskName");
const clearAllButton = document.getElementById("clearAll");

clearAllButton.style.display = "none"; // Initially hide the Clear All button
let id = 0;

// Form Submit Event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    id = id + 1;
    if (taskName.value === "") {
        alert("Please enter a task");
    } else {
        // Create task list item
        const task = document.createElement("li");
        task.innerHTML = `
            <div class="liContainer">
                <span>${taskName.value}</span>
                <div class="buttonWrapper">
                    <button class="doneButton">Done</button>
                    <button class="deleteButton">Delete</button>
                </div>
            </div>
        `;

        todoList.appendChild(task);
        taskName.value = ""; // Clear input field
        clearAllButton.style.display = "block"; // Show clear all button
    }
});

// Handle Clicks for "Done" and "Delete" Buttons
todoList.addEventListener("click", (e) => {
    const taskItem = e.target;

    if (taskItem.classList.contains("doneButton")) {
        const taskText = taskItem.closest("li").querySelector("span");
        taskText.style.textDecoration =
            taskText.style.textDecoration === "line-through" ? "" : "line-through";
    } else if (taskItem.classList.contains("deleteButton")) {
        taskItem.closest("li").remove();
    }

    // Hide Clear All button if the list is empty
    if (todoList.children.length === 0) {
        clearAllButton.style.display = "none";
        alert("All tasks solved!");
    }
});

// Clear All Tasks
clearAllButton.addEventListener("click", () => {
    todoList.innerHTML = "";
    clearAllButton.style.display = "none";
    alert("All tasks solved!");
});
