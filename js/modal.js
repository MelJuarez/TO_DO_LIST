
//import { nueva_tarea } from "./nueva_tarea.js";


//CREAR UNA NUEVA TAREA
function modal(){
    document.querySelector(".modal").classList.add("activar");
}

let boton = document.querySelector("#btn-todo");
boton.addEventListener("click", modal);

function cerrar_ventana(){
    document.querySelector(".modal").classList.remove("activar");
    document.querySelector(".texto").value = " ";
    
};

let btn_cerrar = document.querySelector(".cerrar");
btn_cerrar.addEventListener("click", cerrar_ventana);
