document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector("input");
    const addButton = document.querySelector(".addTask");
    const removeAllButton = document.querySelector(".removeall");
    const taskList = document.querySelector(".newtask");

    addButton.addEventListener('click', () => {
        
        const taskText = inputField.value.trim()
        if (taskText !== "") {
            const li = document.createElement('li')
            li.innerText = taskText;

            const deleteButton = document.createElement("button")
            deleteButton.innerText = "X"
            deleteButton.style.marginLeft = "10px";
            deleteButton.style.backgroundColor = "red";
            deleteButton.style.color = "white";
            deleteButton.style.border = "none";
            deleteButton.style.cursor = "pointer";
            deleteButton.style.padding = "3px 6px";
            deleteButton.style.borderRadius = "3px";

            deleteButton.addEventListener('click', () => {
                li.remove()
            })

            li.appendChild(deleteButton)
            taskList.appendChild(li)
            inputField.value = ""

        }
    })

    removeAllButton.addEventListener('click', () => {
        taskList.innerHTML = "";
    });
});




