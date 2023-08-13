const nombre = document.querySelector("#input_Nombre");
const genero = document.querySelector("#input_Genero");
const edad = document.querySelector("#input_Edad");
const form = document.querySelector("#form_saludo");
const saludo = document.querySelector("#mensajes_Bot");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    var saludo_bot
    if(genero.value === "mujer")
    {
        saludo_bot = "Hola Sra " + nombre.value;
    }
    else
    {
        if(genero.value === "varon" && edad.value > 30)
        {
            saludo_bot = "Hola Sr " + nombre.value;
        }
        else
        {
            saludo_bot = "Hola " + nombre.value;
        }  
    }
    saludo.style.visibility = "visible";
    saludo.textContent = saludo_bot;
});
