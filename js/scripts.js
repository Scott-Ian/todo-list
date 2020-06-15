// Business Logic for List
function List() {
  this.toDos = [];
  this.currentId = 0;
}

List.prototype.addToDo = function(toDo) {
  toDo.id = this.assignId();
  this.toDos.push(toDo);
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function ToDo(item){
  this.item = item;
}

$(document).ready(function () {
  $("form#toDoList").submit(function(event) {
    event.preventDefault();

    let listInput = $("input#toDoItem").val();
    let project = new ToDo(listInput);

    $("ul#result").append("<li> <input type='checkbox'> " + listInput + "</li>");

    $("input#toDoItem").val("");
  });

  $("ul").click (function () {
    ("li").remove();
});

  // $("#ul").on("click","li",function(){    
  //     $(this).remove();
  //   });

});