function btnClick() {
    let taskInput = document.getElementById("taskInput");
    let tasksList = document.getElementById("tasksList");
  
    if (taskInput.value.trim() !== "") {
      let item = document.createElement("p");
      let newItem = document.createElement("span");
      newItem.textContent = taskInput.value;
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          newItem.classList.add("checked");
         
        } else {
            newItem.classList.remove("checked") // Reset to default color
          
        }
      });
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener('click', function(){
          tasksList.removeChild(item)
      });
  
      tasksList.appendChild(item);
      item.appendChild(checkbox);
      item.appendChild(newItem);
      item.appendChild(deleteButton);
      taskInput.value = "";
    }
  }

  let btn = document.getElementById('btn');
  btn.addEventListener('click', btnClick())

  document.getElementById('taskInput').addEventListener('keydown', function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === 'Enter') {
      // Perform the desired action here
      btnClick();
    }});

   