const arrayReservasJSON = localStorage.getItem("reservas"); 
const arrayReservas = JSON.parse(arrayReservasJSON);

const DateLuxon = luxon.DateTime;

function crearReserva () {

    const contenedorReserva = document.getElementById("contenedor-reserva");
    
    for (reservas of arrayReservas) {

        const checkIn = DateLuxon.fromISO(reservas.checkIn);
        const checkOut = DateLuxon.fromISO(reservas.checkOut);

        const articulo = document.createElement("article");
        articulo.classList.add("articulo-reserva");

        const img = document.createElement("img");
        img.setAttribute('src', `images/habitaciones/habitacion${reservas.habitacion.idHabitacion}.jpg`);
        img.classList.add("imagen-reserva");

        const div = document.createElement("div");
        div.classList.add("contenedor-texto-reserva");

        const parrafo1 = document.createElement("p");
        parrafo1.innerText = `${reservas.habitacion.nombre}`;
        parrafo1.classList.add("texto-articulo");

        const parrafo2 = document.createElement("p");
        parrafo2.innerText = `Precio total de la estadia: $${reservas.precio}`;
        parrafo2.classList.add("texto-articulo");

        const parrafo3 = document.createElement("p");
        parrafo3.innerText = `Desde ${checkIn.day} / ${checkIn.month} / ${checkIn.year} hasta ${checkOut.day} / ${checkOut.month} / ${checkOut.year}`;
        parrafo3.classList.add("texto-articulo")

        div.append(parrafo1);
        div.append(parrafo2);
        div.append(parrafo3);

        articulo.append(img);
        articulo.append(div);

        contenedorReserva.append(articulo);

    };

};

// SECCION MIS RESERVAS
if (arrayReservas !== null) {
    crearReserva();
};

// EVENTO QUE ABRE MIS RESERVAS
const openMisReservas = document.getElementById("mis-reservas");

openMisReservas.addEventListener("click", (event) => {
    
    event.preventDefault();

    if (arrayReservas !== null) {

        const body = document.getElementById("body");
        body.classList.add("scroll-block");

        const contenedorGeneral = document.getElementById("contenedor-general-reserva");
        contenedorGeneral.classList.remove("hidden");
        contenedorGeneral.classList.add("prioridad-reserva");

    } else {
        
        Swal.fire({
            icon: "error",
            title: "No hay reservas",
            text: "No has realizado reservas aún",
            width: 400,
        
        });
    };

});


// EVENTO QUE CIERRA MIS RESERVAS
const closeMisReservas = document.getElementById("boton-mis-reservas");

closeMisReservas.addEventListener("click", (event) => {
    
    event.preventDefault();

    const body = document.getElementById("body");
    body.classList.remove("scroll-block");
    
    const contenedorGeneral = document.getElementById("contenedor-general-reserva");
    contenedorGeneral.classList.add("hidden");
    contenedorGeneral.classList.remove("prioridad-reserva");

});