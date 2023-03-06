

//LIBRERIA
import { item_component } from "./item-component.js";
import { data_list } from "./data.js";



//REFERENCIA CON EL DOM
let todo_list =document.querySelector(".todo_list")


//Función para imprimir la lista de tareas
let caja_de_todos = document.querySelector(".todo_list");

function imprimir_todos (){
    //alert("Bienvenido a TO_DO_LIST")

    data_list.forEach((element, indice) => {   //Recorre la lista de objetos "data_list" se importó data_list

        let todo = document.createElement("div"); //crea un div en el html

        todo.innerHTML = item_component(indice); //agrega texto en el div creado anteriormente

        caja_de_todos.appendChild(todo) //se inserta a la caja TO_DO, el texto para visualizarlo


        console.log("Tarea: "+element.mensaje);
        console.log("ID de la Tarea: "+element.id);
        console.log("Estado: "+element.estado)

    });
    
}

imprimir_todos();



//CREAR UNA NUEVA TAREA

function nueva_tarea (){
data_list.push(
    {
        id : "4",
        mensaje : "Arreglar cama",
        estado : "true"
    }
);

caja_de_todos.innerHTML="";
imprimir_todos();
}

function modal(){
    document.querySelector(".modal").classList.add("activar");
}

let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", modal);

