class Jugador{
    constructor (nombre, apellido, edad, posicion, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.posicion = posicion
        this.sueldo = sueldo
    }
}


const jugador1 = new Jugador("Agustin", "Rossi", "24", "arquero", 90000)
const jugador2 = new Jugador("Luis", "Advincula", "26", "defensor", 70000)
const jugador3 = new Jugador("Carlos", "Zambrano", "25", "defensor", 60000)
const jugador4 = new Jugador("Marcos", "Rojo", "28", "defensor", 100000)
const jugador5 = new Jugador("Frank", "Fabra", "28", "defensor", 95000)
const jugador6 = new Jugador("Exequiel", "Zeballos", "23", "mediocampista", 70000)
const jugador7 = new Jugador("Pol", "Fernandez", "27", "mediocampista", 90000)
const jugador8 = new Jugador("Jorman", "Campuzano", "25", "mediocampista", 50000)
const jugador9 = new Jugador("Sebastian", "Villa", "28", "delantero", 110000)
const jugador10 = new Jugador("Nicolas", "Orsini", "29", "delantero", 50000)
const jugador11 = new Jugador("Luis", "Vazquez", "23", "delantero", 50000)

const jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11]

console.table(jugadores)

const jugador = new Jugador(prompt("ingrese el nombre"), prompt("ingrese el apellido"), prompt("ingrese la edad"), prompt("ingrese la posicion"), prompt("ingrese el sueldo"))

jugadores.push(jugador)

console.table(jugadores)