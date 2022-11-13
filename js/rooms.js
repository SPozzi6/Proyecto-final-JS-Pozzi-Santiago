const habitacionSeleccionadaJSON = localStorage.getItem("habitacion-a-reservar");
const habitacionSeleccionada = JSON.parse(habitacionSeleccionadaJSON);
let habitacion;
let precio;
let nombre;

// FUNCION QUE CREAR UN CARD CON LA HABITACION SELECCIONADA
function crearCard(habitacion, nombre, precio) {

    const body = document.getElementById("body");
    body.classList.add("scroll-block");

    const contenedorGeneral = document.getElementById("contenedor-general");
    contenedorGeneral.classList.remove("hidden");
    contenedorGeneral.classList.add("prioridad");
    
    const contenedorCard = document.getElementById("contenedor-card");

    const articulo = document.createElement("article");
    articulo.className ="articulo-card";

    const img = document.createElement("img");
    img.setAttribute('src', `../images/habitaciones/habitacion${habitacion}.jpg`);
    img.className = "imagen-articulo";

    const div = document.createElement("div");
    div.className = "contenedor-texto-articulo";

    const parrafo1 = document.createElement("p");
    parrafo1.innerText = `${nombre}`;
    parrafo1.classList.add("texto-articulo")

    const parrafo2 = document.createElement("p");
    parrafo2.innerText = `Precio por noche: $${precio}`;
    parrafo2.classList.add("texto-articulo")

    div.append(parrafo1);
    div.append(parrafo2);

    articulo.append(img);
    articulo.append(div);

    contenedorCard.append(articulo);

};

// CREO CARD
if (habitacionSeleccionada !== null) {
    habitacion = habitacionSeleccionada.idHabitacion;
    nombre = habitacionSeleccionada.nombre;
    precio = habitacionSeleccionada.precioPorNoche;

    crearCard(habitacion, nombre, precio)
};