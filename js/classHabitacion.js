//CLASS HABITACIONES
class Habitacion {

    constructor (nombre, idHabitacion, capacidad, precioPorNoche) {
        
        this.nombre = nombre;
        this.idHabitacion = idHabitacion;
        this.capacidad = capacidad;
        this.precioPorNoche = precioPorNoche;
        this.reservado = false;
    }

};

const listaHabitaciones = [];

listaHabitaciones.push(new Habitacion ("Habitación simple", 1, 1, 2000));
listaHabitaciones.push(new Habitacion ("Habitación doble", 2, 2, 4000));
listaHabitaciones.push(new Habitacion ("Habitación triple", 3, 3, 6000));
listaHabitaciones.push(new Habitacion ("Habitación familiar", 4, 4, 8000));
listaHabitaciones.push(new Habitacion ("Habitación deluxe", 5, 5, 10000));
listaHabitaciones.push(new Habitacion ("Habitación premiun", 6, 6, 12000));