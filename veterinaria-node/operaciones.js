const fs = require('fs');



function registrar(nombre, edad, animal, color, enfermedad) {
    const datosExistentes = fs.readFileSync('citas.json', 'utf-8');
    const citas = JSON.parse(datosExistentes);
    const nuevaCita = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    };
    
    citas.push(nuevaCita);
    
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log('¡Cita registrada con éxito!');
}



function leer() {
    const datosExistentes = fs.readFileSync('citas.json', 'utf-8');
    const citas = JSON.parse(datosExistentes);
    
    console.log(citas);
}

module.exports = { registrar, leer };
