const botones = document.getElementById("botonesTema");

botones.addEventListener("click", cambiar, true);

function cambiar()
{
    for (const boton of this.children) {
        let clase = boton.className;
        if (clase.includes("none")){
            boton.className = clase.replace("none", "block");
        } else
        {
            boton.className = clase.replace("block", "none");
        }
    }
}