let pilotoA
let pilotoB
let PilotoC

let opcionSeleccionada
let apuesta
let monto
let exacto

const carreras = {
    "carrera 1": {
        pilotos: { "piloto A": 1.5, "piloto B": 2.3, "piloto C": 1.8}
    },
}; 

function realizarApuesta (carrera, tipoApuesta, monto, seleccion) {
    const informacionCarrera = carreras[carrera];
    if (!informacionCarrera) return "Error!!!, carrera no habilitada";
    if (monto < 10000 || monto > 1000000) return "Error!!!, el monto de la apuesta debe estar entre $10000 y $1000000";

    const cuota = informacionCarrera.pilotos[seleccion];
    if (!cuota) return "Error!!!!, Selección invalida";

    let ganacia;
    if (tipoApuesta === "ganador") {
        ganacia = monto * cuota
    } else if (tipoApuesta === "posiciones exactas") {
        let otraCuota;
        for (const piloto in pilotos) {
            if (piloto !== seleccion) {
                otraCuota = pilotos[piloto];
                break;
            }
        }
        ganacia = monto * cuota * otraCuota;
    } else {
        return "Error!!!, tipo de apuesta no valida";
    }

    return ganacia;
}