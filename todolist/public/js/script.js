window.onload = function()
{
	//Para los servicios que se consumirán...
var nomServicios = [
                        {
                            servicio 	: 	"Trae todas las tareas",
                            urlServicio	: 	"getAllTask",
                            metodo		: 	"GET"
                        },
                        {
                            servicio 	: 	"Crear una nueva tarea",
                            urlServicio	: 	"createTask",
                            metodo		: 	"POST"
                        },
                        {
                            servicio 	: 	"Editar una tarea",
                            urlServicio	: 	"updateTask",
                            metodo		: 	"PUT"
                        },
                        {
                            servicio 	: 	"Eliminar Tarea",
                            urlServicio	: 	"deleteTask",
                            metodo		: 	"DELETE"
                        },
                        {
                            servicio 	: 	"Trae una sola tarea",
                            urlServicio	: 	"getTask",
                            metodo		: 	"GET"
                        }
                    ];

var consumeServicios = function(tipo, val, callback)
{
    var servicio = {
                        url 	: nomServicios[tipo - 1].urlServicio,
                        metodo	: nomServicios[tipo - 1].metodo,
                        datos 	: ""
                    };
    if(tipo === 4 || tipo === 5)
    {
        servicio.url += "/" + val;
    }
    else
    {
        servicio.datos = val !== "" ? JSON.stringify(val) : "";
    }
    //Invocar el servicio...
    $.ajax(
    {
        url 		: servicio.url,
        type 		: servicio.metodo,
        data 		: servicio.datos,
        dataType 	: "json",
        contentType: "application/json; charset=utf-8"
    }).done(function(data)
    {
		listaTareas = data;
        callback(data);
    });
};



		


 function get_todos() {
    
//     if (todos_str !== null) {
//         todos = JSON.parse(todos_str); 
//     }
//     return todos;
var todos = [];
consumeServicios(1, "", function(data){
		    todos = data;
		    mostrar();
		});
}



 function agrega() {
//     var tarea = document.getElementById("tarea").value;
 
//     var todos = get_todos();
//     todos.push(tarea);
//     localStorage.setItem("todo", JSON.stringify(todos));
 
//     mostrar();
var newToDo = {finish : false, task : "Nueva tarea"};
consumeServicios(2, newToDo, function(data){
    todos.push(data);
    mostrar();
});
}
 

 function eliminar() {
//     var id = this.getAttribute("id");
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem("todo", JSON.stringify(todos));
 
//     mostrar();
 
//    // return false;
var id = this.getAttribute("id");
var todos = get_todos();
todos.splice(id, 1);
consumeServicios(4, "id", function(data){
    console.log("Eliminada, actualizar to-do");
    mostrar();
});
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
//mostrar();
