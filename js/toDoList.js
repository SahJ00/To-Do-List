
var task = document.getElementById("tasksToDo").addEventListener('keypress', addToDoList);

function addToDoList(e) {
  if (e.keyCode == 13) {
    var task = document.getElementById('tasksToDo').value;
    e.preventDefault();
    if (task.trim() != "") {
      console.log(task);
      var liElement = document.createElement('li');
      var taskText = document.createTextNode(task);
      liElement.appendChild(taskText);
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

}



