//CLASS HABITACIONES
class Habitacion {

    constructor (idHabitacion, capacidad, precioPorNoche) {
        
        this.idHabitacion = idHabitacion;
        this.capacidad = capacidad;
        this.precioPorNoche = precioPorNoche;
        this.reservado = false;
    }

};

const listaHabitaciones = [];

listaHabitaciones.push(new Habitacion (1, 1, 2000));
listaHabitaciones.push(new Habitacion (2, 2, 4000));
listaHabitaciones.push(new Habitacion (3, 3, 6000));
listaHabitaciones.push(new Habitacion (4, 4, 8000));
listaHabitaciones.push(new Habitacion (5, 5, 10000));
listaHabitaciones.push(new Habitacion (6, 6, 12000));