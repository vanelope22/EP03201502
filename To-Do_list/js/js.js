window.onload = function()
{
    listaTareas = [];
    var edit = -1; 
    var tareas = ["textbox"];
    //Constructor tarea...
    function tarea(id,es)
    {
        this.ide = id;
        this.est = es;

        this.imprime = function()
        {
            return [
                        this.ide, 
                        this.est
                    ];
        }
    }

    // información de localStorage...
    if(localStorage.getItem("listado"))
    {
        var objTareas = eval(localStorage.getItem("listado"));
        var id = es = "";
        for(var i in objTareas)
        {
            var id = objTareas[i].ide;
            var es = objTareas[i].est;
            var nuevaTarea = new tarea(id,es);
            listaTareas.push(nuevaTarea);
        }
    }

    //Imprime
    var imprimeTareas = (function imprimeTareas()
    {
        var txt = "";
        var k=0;
        for(var i = 0; i < listaTareas.length; i++)
        {
            var datosTarea = listaTareas[i].imprime();
            if(datosTarea[1] == 1){
                txt += "<div class='tarea' id='activa'>";
                txt += "<center>"+(datosTarea[0])+"</center>";
                txt += "<img src = 'img/completo.png' border = '0' width='40px' heigth='40px' id = 'e_"+i+"'/>";
                txt += "<img align='right' src = 'img/elimina.png' border = '0' width='40px' heigth='40px' id = 'd_"+i+"'/>";
                txt += "</div>";
            }
            else{
                txt += "<div class='tarea' id='desactiva'>";
                txt += "<center>"+(datosTarea[0])+"</center>";
                txt += "<img src = 'img/completoin.png' border = '0' width='40px' heigth='40px' id = 'e_"+i+"'/>";
                txt += "<img align='right' src = 'img/elimina.png' border = '0' width='40px' heigth='40px' id = 'd_"+i+"'/>";
                txt += "</div>";
            }
            
        }
        nom_div("imprime").innerHTML = txt;
        //Poner las acciones de editar y eliminar...
        for(var i = 0; i < listaTareas.length; i++)
        {
            //envia estado activo o inactivo
            nom_div("e_" + i).addEventListener('click', function(event)
            {
                var ind = event.target.id.split("_")[1];
                var idUser = listaTareas[ind].ide;
                console.log("Valor de idUser: ", idUser);
                ind = buscaIndice(idUser);
                if(ind >= 0)
                {
                    console.log("elementos: ", tareas);
                    listaTareas[ind].est = 0;
                    localStorage.setItem("listado", JSON.stringify(listaTareas));
                    imprimeTareas();
                    limpiarCampos();
                }
                else
                {
                    alert("No existe el ID");
                }
            });
            //Eliminar...
            nom_div("d_" + i).addEventListener('click', function(event)
            {
                var ind = event.target.id.split("_")[1];
                var idUser = listaTareas[ind].ide;
                if(confirm("¿Desea eliminar esta tarea?"))
                {
                    ind = buscaIndice(idUser);
                    if(ind >= 0)
                    {
                        listaTareas.splice(ind, 1);
                        localStorage.setItem("listado", JSON.stringify(listaTareas));
                        edit = -1;
                        imprimeTareas();
                    }
                }
            });
        }
        return imprimeTareas;
    })();

    var buscaIndice = function(id)
    {
        var indice = -1;
        for(var i in listaTareas)
        {
            if(listaTareas[i].ide === id)
            {
                indice = i;
                break;
            }
        }
        return indice;
    }

    var limpiarCampos = function()
    {
        edit = -1; //No se está editando nada...
        for(var i = 0; i < tareas.length; i++)
        {
            nom_div(tareas[i]).value = "";   
        }
    }
    //Saber si un usuario ya existe
    function existeTarea(id)
    {
        var existe = 0; //0 Ningún campo existe...
        for(var i in listaTareas)
        {
            //Cédula...
            if(i !== edit)
            {
                if(listaTareas[i].ide.trim().toLowerCase() === id.trim().toLowerCase())
                {
                    existe = 1; 
                    break;
                }
            }
        }
        return existe;
    }

    // guardar...
    nom_div("guardaT").addEventListener('click', function(event)
    {
        var correcto = true;
        var valores = [];
        for(var i = 0; i < tareas.length; i++)
        {
            if(nom_div(tareas[i]).value === "")
            {
                alert("Digite una tarea");
                nom_div(tareas[i]).focus();
                correcto = false;
                break;
            }
            else
            {
                valores[i] = nom_div(tareas[i]).value;
            }
        }
        if(correcto)
        {
            var existeDatos = existeTarea(valores[0]);
            if(existeDatos === 0) //No existe...
            {

                if(edit < 0)
                {
                    var nuevaTarea = new tarea(valores[0],1);
                    listaTareas.push(nuevaTarea);
                }
                else
                {
                    listaTareas[edit].ide = valores[0];
                }

                localStorage.setItem("listado", JSON.stringify(listaTareas));
                imprimeTareas();
                limpiarCampos();

            }
            else
            {
                alert("Ya existe la tarea " + valores[0] + ".");
                nom_div(tareas[0]).focus();
            }
        }

    });

    //Accedera los elementos de HTML...
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}