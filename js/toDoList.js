
var task = document.getElementById("tasksToDo").addEventListener('keypress', addToDoList);

function addToDoList(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    var task = document.getElementById('tasksToDo').value;
    if (task.trim() != "") {
     // console.log(task.charAt(0).toUpperCase() + string.slice(1));
      var liElement = document.createElement('li');
      var taskText = document.createTextNode(task);
      liElement.appendChild(taskText);
      liElement.classList.add('todo-element');
      liElement.classList.add('p-1');
      liElement.classList.add('m-1');
      liElement.addEventListener('click', changeDoneList);
      document.getElementById('toDo').appendChild(liElement);
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

function clearToDoList() {
  var toDoList = document.getElementById('toDo');
  toDoList.innerHTML = '';
}

function clearDoneList() {
  var doneList = document.getElementById('done');
  doneList.innerHTML = '';
}

function clearAll() {
  clearToDoList();
  clearDoneList();
}




