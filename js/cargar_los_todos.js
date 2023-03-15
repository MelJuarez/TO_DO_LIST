//LIBRERÍAS
import { item_component } from "./item-component.js";


 



function imprimir_todos (){

    //Función para imprimir la lista de tareas
    let caja_de_todos = document.querySelector(".todo_list");

    caja_de_todos.innerHTML = " ";

    data_list.forEach((element, indice) => {   //Recorre la lista de objetos "data_list" se importó data_list

        let todo = document.createElement("div"); //crea un div en el html

        todo.innerHTML = item_component(indice); //agrega texto en el div creado anteriormente

        caja_de_todos.appendChild(todo) //se inserta a la caja TO_DO, el texto para visualizarlo
  

    });
    
}

export {imprimir_todos};