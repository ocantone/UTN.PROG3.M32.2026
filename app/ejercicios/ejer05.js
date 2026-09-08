const fs = require('fs');
const path = require('path');

// 1. Lectura sincrónica del archivo JSON desde el disco
const rutaArchivo = path.join(__dirname, 'ejer05.json');
const contenidoRaw = fs.readFileSync(rutaArchivo, 'utf-8');

// 2. Parseo del string JSON a un objeto/arreglo nativo de JavaScript
const estudiantes = JSON.parse(contenidoRaw);
console.table(estudiantes);

// 3. Transformación inmutable con .map() y Spread Operator (...)
const estudiantesConPromedio = estudiantes.map(estudiante => {
  const promedio = (estudiante.parcial1 + estudiante.parcial2) / 2;
  return {
    ...estudiante,
    promedio: promedio,
    condicion: promedio >= 6 ? 'APROBADO' : 'RECUPERA'
  };
});

console.log('=== ESTUDIANTES PROCESADOS DESDE JSON ===');
console.table(estudiantesConPromedio);

// 4. Generación del marcado HTML con .map() y .join()
// IDEM ejercicio01.js
const itemsHTML = estudiantesConPromedio.map(
  e => `  <li>${e.nombre} - Promedio: ${e.promedio} (${e.condicion})</li>`
);
const reporteHTML = `<body><ul class="lista-estudiantes">\n${itemsHTML.join('\n')}\n</ul></body>`;
console.log('\n=== REPORTE HTML GENERADO ===');
console.log(reporteHTML);

// 5. Opcional: Escribir la salida resultante en un archivo HTML en disco
fs.writeFileSync(path.join(__dirname, 'reporte.html'), reporteHTML, 'utf-8');
console.log('\n  Reporte guardado con éxito en "reporte.html"')