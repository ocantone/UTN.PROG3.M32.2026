/*4. A partir del arreglo `estudiantes` provisto, escriba una función en JS que devuelva un nuevo arreglo 
`estudiantesConEstado` utilizando `.map()` y el Operador Spread (`...`), añadiendo la propiedad 
`aprobado: true` si la nota es >= 6 o `false` en caso contrario, garantizando inmutabilidad.
*/
const estudiantes = [
 { id: 1, nombre: 'Lucas', nota: 8 },
 { id: 2, nombre: 'Mariana', nota: 4 },
 { id: 1, nombre: 'Enner', nota: 3 },
 { id: 2, nombre: 'Vasco', nota: 10 }
];
const estudiantesConEstado = estudiantes.map(est => ({
    ...est,
    aprobado: est.nota >= 6   }));

console.table(estudiantesConEstado);
