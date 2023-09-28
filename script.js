function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        const removeButton = document.createElement("span");

        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
        });

        removeButton.className = "remove-button";
        removeButton.innerText = "Remover";
        removeButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(taskText));
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}
