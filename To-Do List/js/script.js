function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem("todo");
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function agrega() {
    var tarea = document.getElementById("tarea").value;
 
    var todos = get_todos();
    todos.push(tarea);
    localStorage.setItem("todo", JSON.stringify(todos));
 
    mostrar();
 
    //return false;
}
 
function eliminar() {
    var id = this.getAttribute("id");
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
 
    mostrar();
 
   // return false;
}
function mostrar() {
    var todos = get_todos();
 
    var html ="<ul>";
    for(var i=0; i<todos.length; i++) {
        html +="<div class='done' id='texto'>";
        html +="<button >✔</button>&nbsp;&nbsp;";
        html += (todos[i])+"&nbsp;&nbsp;&nbsp;<img class='eliminar'  align='center' id='elimina' src = 'img/elimina.png' border = '0' width='40px' heigth='40px' id ='"+i+"'/>";
        html +="</div>";
    };
    html += "</ul>";
 
    document.getElementById("todos").innerHTML = html;
 
    var buttons = document.getElementsByClassName("eliminar");
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", eliminar);
    };
}
 

document.getElementById("agrega").addEventListener("click", agrega);
mostrar();
