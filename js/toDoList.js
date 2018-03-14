
var task = document.getElementById("tasksToDo").addEventListener('keypress', addToDoList);

function addToDoList(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var task = document.getElementById('tasksToDo').value;
    if (task.trim() != "") {
      console.log(task);
      var liElement = document.createElement('li');
      var taskText = document.createTextNode(task);
      liElement.appendChild(taskText);
      liElement.classList.add('todo-element');
      liElement.addEventListener('click', changeDoneList);
      document.getElementById('toDo').appendChild(liElement);
      // var addTask = task;
      // console.log(addTask);
      // var addTaskLi = document.getElementById("toDo").innerHTML = '<li>' + addTask + '</li>';
      // //document.getElementById(toDo).appendChild(addTaskLi);
      // console.log(addTaskLi);
      // console.log(addTaskLi);
      document.getElementById("tasksToDo").value = "";
    }
  }
}

function changeDoneList(e) {
  var elementClicked = e.target;
  if (elementClicked.classList.contains('todo-element')) {
    elementClicked.classList.remove('todo-element');
    elementClicked.classList.add('done-element');
    document.getElementById('done').appendChild(elementClicked);
  } else if (elementClicked.classList.contains('done-element')) {
    elementClicked.classList.remove('done-element');
    elementClicked.classList.add('todo-element');
    document.getElementById('toDo').appendChild(elementClicked)
  }
}




