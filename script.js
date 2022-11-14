// COMIENZA SECCION CHECK IN - CHECK OUT - INVITADOS Y EVENTO DE BUSQUEDA DE HABITACION

//FUNCIONES

//OBTENGO HABITACIONES LOCAL STORAGE
function obtenerHabitaciones() {

    let habitaciones = [];

    const habitacionesLS = localStorage.getItem("habitaciones");

    if (habitacionesLS === null) {

        return habitaciones = listaHabitaciones;

    } else {

        return JSON.parse(habitacionesLS);

    };
};


//OBTENGO RESERVAS LOCAL STORAGE
function obtenerReservas() {

    let reservas = [];

    const reservasLS = localStorage.getItem("reservas");

    if (reservasLS === null) {

        return reservas;

    } else {

        return JSON.parse(reservasLS);

    }

};


// FUNCION QUE RETORNA HABITACION PARA LA CANTIDAD DE PERSONAS INGRESADA
function buscarHabitacion (invitados) {
    
    return new Promise( (success, failure) => {
        
        fetch ("habitaciones.json")
        .then( (response) => {
            
            return response.json();
        
        }).then( (listaHabitaciones) => {
            
            const habitacion = listaHabitaciones.find ((el) => {
            return el.capacidad === parseInt(invitados);
            });

            success(habitacion);

        });
    });
};


//REVISO SI LA HABITACION ESTA RESERVADA
function revisarReservado (habitacion) {

    if (habitaciones === null) {

        return true;

    } else {

        return habitaciones.some((el) => {

            return el.idHabitacion === habitacion.idHabitacion && el.reservado === false;        

        });

    };

};


//VALIDO LOS DATOS INGRESADOS
function validarDatos(checkIn, checkOut, fechaHoy, invitados) {

    if(checkIn.c === null || checkIn === "" || checkOut.c === null || checkOut === "" || invitados === null || invitados === "" || checkIn > checkOut || checkIn < fechaHoy || checkOut < fechaHoy) {
        
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, ingrese todos los datos",
            width: 400,
        });

        //LIMPIO INPUTS
        inputCheckIn.value = "";
        inputCheckOut.value = "";
        inputInvitados.value = "";

        return false;

    }    
        else {
            return true;
        }
    ;
};


//VARIABLES GLOBALES

const formularioDeReserva = document.getElementById("reserva");

const inputCheckIn = document.getElementById("check-in");
const inputCheckOut = document.getElementById("check-out");
const inputInvitados = document.getElementById("invitados");

const DateTime = luxon.DateTime;

// TRAIGO HABITACIONES DEL LOCAL STORAGE
let habitaciones = obtenerHabitaciones();

// TRAIGO RESERVAS
let habitacionesReservadas = obtenerReservas();


//EVENTO DE BUSQUEDA DE HABITACION
formularioDeReserva.addEventListener("submit", async (event) => {

    event.preventDefault();
    
    let checkIn = DateTime.fromISO(inputCheckIn.value);
    let checkOut = DateTime.fromISO(inputCheckOut.value);
    let invitados = inputInvitados.value;
    let fechaHoy = DateTime.now();
    let estadiaTotal = Math.floor(((checkOut - checkIn) / (1000 * 60 * 60 * 24)));

    //VALIDO DATOS INGRESADOS
    const validar = validarDatos(checkIn, checkOut, fechaHoy, invitados);
    console.log(validar)

    //BUSCO HABITACION PARA LA CANTIDAD DE PERSONAS INGRESADA
    const habitacionEncontrada = await buscarHabitacion(invitados);
    console.log(habitacionEncontrada)

    //REVISO SI LA HABITACION ESTA RESERVADA
    const disponible = revisarReservado(habitacionEncontrada);
    console.log(disponible)

    //SI LA HABITACION ESTA DISPONIBLE CARGO DATOS A LS, SI NO PIDO NUEVOS DATOS
    if (disponible === true && validar === true) {

            //CARGO DATOS AL LOCAL STORAGE             
            localStorage.setItem("check-in", checkIn);
            localStorage.setItem("check-out", checkOut);
            localStorage.setItem("huespedes", invitados);
            localStorage.setItem("estadia-total", estadiaTotal);
            localStorage.setItem("habitacion-a-reservar", JSON.stringify(habitacionEncontrada));
            localStorage.setItem("habitaciones", JSON.stringify(habitaciones));
            localStorage.setItem("habitaciones-reservadas", JSON.stringify(habitacionesReservadas));
            
            location.reload();

    } else {

        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "No hay habitaciones disponibles o los datos ingresados son incorrectos",
            width: 400,
        });

        inputCheckIn.value = "";
        inputCheckOut.value = "";
        inputInvitados.value = "";

    };

});

// TERMINA SECCION CHECK IN - CHECK OUT - INVITADOS Y EVENTO DE BUSQUEDA DE HABITACION


// EMPIEZA SECCION FOMULARIO DE DATOS PARA CONFIRMAR RESERVA

//TRAIGO HABITACION A RESERVAR DEL LOCAL STORAGE
const habitacionAReservarJSON = localStorage.getItem("habitacion-a-reservar");
const habitacionAReservar = JSON.parse(habitacionAReservarJSON)

//TRAIGO ARRAY HABITACIONES
const arrayHabitacionesJSON = localStorage.getItem("habitaciones")
const arrayHabitaciones = JSON.parse(arrayHabitacionesJSON)


//TRAIGO HABITACIONES RESERVADAS
const arrayHabitacionesReservadasJSON = localStorage.getItem("habitaciones-reservadas")
const arrayHabitacionesReservadas = JSON.parse(arrayHabitacionesReservadasJSON)


//TRAIGO CHECK-IN / CHECK-OUT / CANTIDAD DE HUESPEDES / ESTADIA TOTAL
const checkIn = localStorage.getItem("check-in");
const checkOut = localStorage.getItem("check-out");

const huespedesJSON = localStorage.getItem("huespedes");
const huespedes = JSON.parse(huespedesJSON);

const estadiaTotalJSON = localStorage.getItem("estadia-total");
const estadiaTotal = JSON.parse(estadiaTotalJSON);


//VARIABLES GLOBALES
const realizarReserva = document.getElementById("datosReserva");

const inputNombre = document.getElementById("name");
const inputApellido = document.getElementById("surname");
const inputDni = document.getElementById("dni");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("e-mail");
const inputPais = document.getElementById("pais");
const inputCiudad = document.getElementById("ciudad");
const inputDireccion = document.getElementById("direccion");
const inputCodigoPostal = document.getElementById("codigo-postal");

//FUNCIONES

//FUNCION QUE COLOCA LA HABITACION COMO OCUPADA
function habitacionOcupada (habitacion) {

    arrayHabitaciones.filter((el) => {

        if (el.idHabitacion === habitacionAReservar.idHabitacion) {
        return el.reservado = true;

        };
    
    });

};


//VALIDO LOS DATOS INGRESADOS EN EL FORMULARIO
function validarDatosCliente(){

    if(inputNombre.value, inputApellido.value, inputDni.value, inputTelefono.value, inputEmail.value, inputPais.value, inputCiudad.value, inputDireccion.value, inputCodigoPostal.value === null || inputNombre.value, inputApellido.value, inputDni.value, inputTelefono.value, inputEmail.value, inputPais.value, inputCiudad.value, inputDireccion.value, inputCodigoPostal.value === "") {

        return false;
        
    } else{
        
        return true;
        
    };

};

//EVENTO FORMULARIO DE RESERVA
realizarReserva.addEventListener ("submit", (event) => {

    event.preventDefault();

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const dni = inputDni.value;
    const telefono = inputTelefono.value;
    const email = inputEmail.value;
    const pais = inputPais.value;
    const ciudad = inputCiudad.value;
    const direccion = inputDireccion.value;
    const codigoPostal = inputCodigoPostal.value;

    //VALIDO LOS DATOS DEL CLIENTE
    const validarDatos = validarDatosCliente();

    if (validarDatos === false) {
    
        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "Por favor, ingrese sus datos correctamente",
            width: 400,
        });

        // //LIMPIO INPUTS
        inputNombre.value = "";
        inputApellido.value = "";
        inputDni.value = "";
        inputTelefono.value = "";
        inputEmail.value = "";
        inputPais.value = "";
        inputCiudad.value = "";
        inputDireccion.value = "";
        inputCodigoPostal.value = "";

    } else {
    
        //CALCULO PRECIO DE LA ESTADIA
        const precioEstadia = estadiaTotal * habitacionAReservar.precioPorNoche;
        
        //CREO NUEVO CLIENTE AL ENVIAR FORMULARIO DE REGISTRO
        const nuevoCliente = new Cliente (nombre, apellido, dni, telefono, email, pais, ciudad, direccion, codigoPostal);
        listaClientes.push(nuevoCliente);

        //PUSHEO LA RESERVA
        habitacionesReservadas.push(new Reserva (habitacionAReservar, nuevoCliente, checkIn, checkOut, precioEstadia))

        //COLOCO RESERVADO = TRUE EN LA HABITACION A RESERVAR
        habitacionOcupada(habitacionAReservar);

        //BORRO DATOS INNECESARIOS
        localStorage.removeItem("habitacion-a-reservar");
        localStorage.removeItem("check-in");
        localStorage.removeItem("check-out");
        localStorage.removeItem("huespedes");
        localStorage.removeItem("estadia-total");

        Swal.fire({
            icon: "success",
            title: "Reserva realizada",
            text: "Su reserva fue realizada con éxito, muchas gracias",
            width: 400,
            showConfirmButton: true,
            confirmButtonText: "Confirmar",
            allowOutsideClick: false,
        }).then ((result) => {
            
            if (result.isConfirmed) {

                //CARGO RESERVAS AL LOCAL STORAGE
                localStorage.setItem("reservas", JSON.stringify(habitacionesReservadas));
                localStorage.setItem("habitaciones", JSON.stringify(arrayHabitaciones));
                location.reload();
            
            };
        });

    };
});

// TERMINA SECCION FOMULARIO DE DATOS PARA CONFIRMAR RESERVA

//EVENTO PARA CANCELAR LA OPERACION DE RESERVA
const cancelar = document.getElementById("cancel")

cancelar.addEventListener ("click", (event) => {

    event.preventDefault();

    //ELIMINO DATOS DEL LOCAL STORAGE
    localStorage.removeItem("habitacion-a-reservar");
    localStorage.removeItem("check-in");
    localStorage.removeItem("check-out");
    localStorage.removeItem("huespedes");
    localStorage.removeItem("estadia-total");
    
    Swal.fire({
        icon: "error",
        title: "Operación de reserva cancelada",
        text: "Has cancelado la operación, volveras al inicio",
        width: 400,
        showConfirmButton: true,
        confirmButtonText: "Volver",
        allowOutsideClick: false,
    }).then((result) => {

        if (result.isConfirmed) {

            //RECARGO LA PAGINA
            location.reload();

        };

    });

});


console.log(habitaciones);
console.log(habitacionesReservadas);