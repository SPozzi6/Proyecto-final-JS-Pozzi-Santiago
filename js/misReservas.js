// const arrayReservasJSON = localStorage.getItem("reservas"); 
// const arrayReservas = JSON.parse(arrayReservasJSON);

// function crearReserva () {

//     const contenedorReservas = document.getElementById("contenedor-reservas");
//     contenedorReservas.classList.remove("hidden");
//     contenedorReservas.classList.add("prioridad");
    
//     for (reservas of arrayReservas) {
        
//         const articulo = document.createElement("article");
//         articulo.className ="articulo-card";

//         const img = document.createElement("img");
//         img.setAttribute('src', `../images/habitaciones/habitacion${reservas.habitacion.idHabitacion}.jpg`);
//         img.className = "imagen-articulo";

//         const div = document.createElement("div");
//         div.className = "contenedor-texto-articulo";

//         const parrafo1 = document.createElement("p");
//         parrafo1.innerText = `${reservas.habitacion.nombre}`;

//         const parrafo2 = document.createElement("p");
//         parrafo2.innerText = `Precio por noche: $${reservas.habitacion.precio}`;

//         div.append(parrafo1);
//         div.append(parrafo2);

//         articulo.append(img);
//         articulo.append(div);

//         contenedorReservas.append(articulo);

//     }

// }
// crearReserva();