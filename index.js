
import { argv } from "node:process";
import { addCita, readCita } from './operaciones.js';
import { readFile } from "node:fs/promises"; // este lo agregué para validar y avisar al ususario que no hay citas

const [operacion, nombre, edad, tipoDeAnimal, colorDeAnimal, enfermedad] =  argv.slice(2);
const validarVacio = JSON.parse(await readFile('citas.json'));

if (operacion === "registrar") {
    addCita(nombre, edad, tipoDeAnimal, colorDeAnimal, enfermedad);
 }

if (operacion === "leer") {
    if (validarVacio.length === 0)  {
        console.log('No hay citas ingresadas.');
    } else {
        readCita();
    }    
}

if (operacion != "registrar" && operacion != "leer" ) {
    console.log("Por favor ingrese un operador válido: 'registrar' o 'leer'");
}

// ejemplos citas:
// node index.js registrar Cachupín "5 años" perro café catarro
// node index.js registrar Benito "5 años" gato negro obesidad
// node index.js registrar Ranco "2 años" ratón gris cojera


