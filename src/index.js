const nombre = document.querySelector("#input_Nombre");
const genero = document.querySelector("#input_Genero");
const edad = document.querySelector("#input_Edad");
const form = document.querySelector("#form_saludo");
const saludo = document.querySelector("#mensajes_Bot");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    var saludo_bot
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let saludo_hora;
    //Verificamos la hora
    if (horaActual >= 6 && horaActual < 12) 
    {
        saludo_hora = "Buenos dias";
    } 
    else if (horaActual >= 12 && horaActual < 18)
    {
        saludo_hora = "Buenas tardes";
    } 
    else 
    {
        saludo_hora = "Buenas noches";
    }
    //Formamos el saludo
    if(genero.value === "mujer")
    {
        saludo_bot = "Hola Sra " + nombre.value + ", " + saludo_hora;
    }
    else
    {
        if(genero.value === "varon" && edad.value > 30)
        {
            saludo_bot = "Hola Sr " + nombre.value + ", " + saludo_hora;
        }
        else
        {
            saludo_bot = "Hola " + nombre.value + ", " + saludo_hora;
        }  
    }
    saludo.style.visibility = "visible";
    saludo.textContent = saludo_bot;
});
