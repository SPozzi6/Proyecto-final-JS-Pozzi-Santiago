const habitacionSeleccionadaJSON = localStorage.getItem("habitacion-a-reservar");
const habitacionSeleccionada = JSON.parse(habitacionSeleccionadaJSON);
let habitacion;

if (habitacionSeleccionada !== null) {
    habitacion = habitacionSeleccionada.idHabitacion;
}

switch (habitacion) {

    case 1:
        
        const contenedorGeneral1 = document.getElementById("contenedor-general");
        contenedorGeneral1.classList.remove("hidden");
    
        const contenedorCard1 = document.getElementById("contenedor-card");

        const articulo1 = document.createElement("article");
        articulo1.className ="articulo-card";

        const img1 = document.createElement("img");
        img1.setAttribute('src', "../images/habitaciones/habitacion1.jpg");
        img1.className = "imagen-articulo";

        const div1 = document.createElement("div");
        div1.className = "contenedor-texto-articulo";

        const parrafo11 = document.createElement("p");
        parrafo11.innerText = "Nombre Habitacion";

        const parrafo21 = document.createElement("p");
        parrafo21.innerText = "Precio por noche: 2000$";

        div1.append(parrafo11);
        div1.append(parrafo21);

        articulo1.append(img1);
        articulo1.append(div1);

        contenedorCard1.append(articulo1);
        break;

    case 2:
        
        const contenedorGeneral2 = document.getElementById("contenedor-general");
        contenedorGeneral2.classList.remove("hidden");

        const contenedorCard2 = document.getElementById("contenedor-card");

        const articulo2 = document.createElement("article");
        articulo2.className ="articulo-card";

        const img2 = document.createElement("img");
        img2.setAttribute('src', "../images/habitaciones/habitacion2.jpg");
        img2.className = "imagen-articulo";

        const div2 = document.createElement("div");
        div2.className = "contenedor-texto-articulo";

        const parrafo12 = document.createElement("p");
        parrafo12.innerText = "Nombre Habitacion";

        const parrafo22 = document.createElement("p");
        parrafo22.innerText = "Precio por noche: 4000$";

        div2.append(parrafo12);
        div2.append(parrafo22);

        articulo2.append(img2);
        articulo2.append(div2);

        contenedorCard2.append(articulo2);
        break;

    case 3:
        
        const contenedorGeneral3 = document.getElementById("contenedor-general");
        contenedorGeneral3.classList.remove("hidden");
    
        const contenedorCard3 = document.getElementById("contenedor-card");

        const articulo3 = document.createElement("article");
        articulo3.className ="articulo-card";

        const img3 = document.createElement("img");
        img3.setAttribute('src', "../images/habitaciones/habitacion3.jpg");
        img3.className = "imagen-articulo";

        const div3 = document.createElement("div");
        div3.className = "contenedor-texto-articulo";

        const parrafo13 = document.createElement("p");
        parrafo13.innerText = "Nombre Habitacion";

        const parrafo23 = document.createElement("p");
        parrafo23.innerText = "Precio por noche: 6000$";

        div3.append(parrafo13);
        div3.append(parrafo23);

        articulo3.append(img3);
        articulo3.append(div3);

        contenedorCard3.append(articulo3);
        break;

    case 4:

        const contenedorGeneral4 = document.getElementById("contenedor-general");
        contenedorGeneral4.classList.remove("hidden");
    
        const contenedorCard4 = document.getElementById("contenedor-card");

        const articulo4 = document.createElement("article");
        articulo4.className ="articulo-card";

        const img4 = document.createElement("img");
        img4.setAttribute('src', "../images/habitaciones/habitacion4.jpg");
        img4.className = "imagen-articulo";

        const div4 = document.createElement("div");
        div4.className = "contenedor-texto-articulo";

        const parrafo14 = document.createElement("p");
        parrafo14.innerText = "Nombre Habitacion";

        const parrafo24 = document.createElement("p");
        parrafo24.innerText = "Precio por noche: 8000$";

        div4.append(parrafo14);
        div4.append(parrafo24);

        articulo4.append(img4);
        articulo4.append(div4);

        contenedorCard4.append(articulo4);
        break;

    case 5:

        const contenedorGeneral5 = document.getElementById("contenedor-general");
        contenedorGeneral5.classList.remove("hidden");
    
        const contenedorCard5 = document.getElementById("contenedor-card");

        const articulo5 = document.createElement("article");
        articulo5.className ="articulo-card";

        const img5 = document.createElement("img");
        img5.setAttribute('src', "../images/habitaciones/habitacion5.jpg");
        img5.className = "imagen-articulo";

        const div5 = document.createElement("div");
        div5.className = "contenedor-texto-articulo";

        const parrafo15 = document.createElement("p");
        parrafo15.innerText = "Nombre Habitacion";

        const parrafo25 = document.createElement("p");
        parrafo25.innerText = "Precio por noche: 10000$";

        div5.append(parrafo15);
        div5.append(parrafo25);

        articulo5.append(img5);
        articulo5.append(div5);

        contenedorCard5.append(articulo5);
        break;

    case 6:
        
        const contenedorGeneral6 = document.getElementById("contenedor-general");
        contenedorGeneral6.classList.remove("hidden");

        const contenedorCard6 = document.getElementById("contenedor-card");

        const articulo6 = document.createElement("article");
        articulo6.className ="articulo-card";

        const img6 = document.createElement("img");
        img6.setAttribute('src', "../images/habitaciones/habitacion6.jpg");
        img6.className = "imagen-articulo";

        const div6 = document.createElement("div");
        div6.className = "contenedor-texto-articulo";

        const parrafo16 = document.createElement("p");
        parrafo16.innerText = "Nombre Habitacion";

        const parrafo26 = document.createElement("p");
        parrafo26.innerText = "Precio por noche: 12000$";

        div6.append(parrafo16);
        div6.append(parrafo26);

        articulo6.append(img6);
        articulo6.append(div6);

        contenedorCard6.append(articulo6);
        break;

    default:
        console.log("Ninguna habitación seleccionada")
        break;

}