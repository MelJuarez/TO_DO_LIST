import { imprimir_todos } from "./cargar_los_todos.js";

function nueva_tarea (mensaje){
    
    data_list.push(
        {
            id : "4",
            mensaje : mensaje,
            estado : "true"
        }
    );

    
    document.querySelector(".todo_list").innerHTML=" ";
    
    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".texto").value = " ";

    imprimir_todos();
}

export {nueva_tarea};