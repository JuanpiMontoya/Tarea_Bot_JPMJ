const nombre = document.querySelector("#input_Nombre");
const form = document.querySelector("#form_saludo");
const saludo = document.querySelector("#mensajes_Bot");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    saludo.style.visibility = "visible";
    saludo.textContent = "Hola " + nombre.value;
});
