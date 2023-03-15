

//LIBRERIA
import { imprimir_todos } from "./cargar_los_todos.js";
import { nueva_tarea } from "./nueva_tarea.js";
import { item_component } from "./item-component.js";

//REFERENCIA CON EL DOM
let todo_list =(document.querySelector(".todo_list"));


imprimir_todos();

function puente (){
    let mensaje = document.querySelector(".texto").value;
    nueva_tarea(mensaje);  
    
}

document.querySelector(".btn-tarea").addEventListener("click",puente);
document.querySelector(".cerrar").addEventListener("click",puente);





function list(numero_tarea){

    let item = `
    <div class="todo_item">
                <span id = "icoo" class="ico">☑️</span>
                <p><del>
                ${data_list[numero_tarea].mensaje}
                </del></p>
                <span class="ico2">X</span>
            </div>
    `;
    
    data_list.estado = false;
    return item;
  
    }

    
function imprimir (){

    //Función para imprimir la lista de tareas
    let caja_de_todos = document.querySelector(".todo_list");

    caja_de_todos.innerHTML = " ";

    data_list.forEach((element, indice) => {   //Recorre la lista de objetos "data_list" se importó data_list

        let todo = document.createElement("div"); //crea un div en el html
        //let todo = document.querySelector(".todo_list");

        todo.innerHTML = list(indice); //agrega texto en el div creado anteriormente

        caja_de_todos.appendChild(todo) //se inserta a la caja TO_DO, el texto para visualizarlo
  

    });

    console.log(data_list.estado);

}

/*function tachar(){

    let box = document.querySelector(".todo_list");
    
    box.innerHTML = "";

    data_list.forEach((element, indice) => {   //Recorre la lista de objetos "data_list" se importó data_list

        
        box.innerHTML = list(indice); //agrega texto en el div creado anteriormente
       
    });

    imprimir();
    console.log(data_list.estado);
}*/

    //let btn_tache = document.querySelector(".todo_list");
    //btn_tache.addEventListener("click", imprimir);
  
    let btn_tache = document.querySelector(".ico");
    btn_tache.addEventListener("click",imprimir );

    let bt = document.querySelector(".todo_list");
    bt.addEventListener("click",imprimir);
    
    console.log("aaaaaa")
