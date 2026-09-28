const p1 = { id: 101, nombre: "Sensor Inductivo" };
const p2 = { id: 101, nombre: "Sensor Inductivo" };

const p3 = p1;

p3.nombre = "Pulsador Industrial";
console.log("Salida A (p1.nombre):", p1.nombre);
console.log("Salida B (p1 === p2):", p1 === p2);
console.log("Salida C (p1 === p3):", p1 === p3);