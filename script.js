function addTask() {
    var taskInput = document.getElementById("taskInput");
    var priorityInput = document.getElementById("priorityInput");
    var highPriorityList = document.getElementById("highPriorityList");
    var mediumPriorityList = document.getElementById("mediumPriorityList");
    var lowPriorityList = document.getElementById("lowPriorityList");

    var task = taskInput.value;
    var priority = priorityInput.value;

    if (task !== "") {
        var li = document.createElement("li");
        var priorityDiv = document.createElement("div");
        priorityDiv.className = "priority " + priority;
        li.appendChild(priorityDiv);
        li.appendChild(document.createTextNode(task));

        if (priority === "high") {
            highPriorityList.appendChild(li);
        } else if (priority === "medium") {
            mediumPriorityList.appendChild(li);
        } else if (priority === "low") {
            lowPriorityList.appendChild(li);
        }

        taskInput.value = "";
        priorityInput.value = "high";
    }
}

