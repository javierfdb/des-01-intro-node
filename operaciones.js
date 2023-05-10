import { nanoid } from 'nanoid'
import { writeFile, readFile } from "node:fs/promises";

export const addCita = async (nombre, edad, tipoDeAnimal, colorDeAnimal, enfermedad) => {
    try {
     const citas =  JSON.parse(await readFile('citas.json'));
     const cita = {
        id: nanoid(),
        nombre: nombre,
        edad: edad,
        tipoDeAnimal: tipoDeAnimal,
        colorDeAnimal: colorDeAnimal,
        enfermedad: enfermedad,        
     };
     citas.push(cita);
     await writeFile('citas.json', JSON.stringify(citas));
     console.log("Cita ingresada con éxito.");
    } catch (error) {
     console.log(error);
    }
}

export const readCita = async () => {
    try {
        const citas = JSON.parse(await readFile("citas.json"));
        console.log(citas);
    } catch (error) {
        console.log(error);
    }
};