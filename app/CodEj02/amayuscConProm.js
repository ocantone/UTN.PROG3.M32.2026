const fs = require('fs/promises');

// fs.readFile devuelve una PROMESA
fs.readFile('alumnos.txt', 'utf-8')
  .then(data => {
    // x (o data) es el string plano con el texto del archivo
    return data.split('\n'); 
  })
  .then(lineas => {
    // lineas es el Array devuelto por el .then anterior
    return lineas.map(nombre => nombre.toUpperCase());
  })
  .then(alumnosMayus => {
    // Mostramos el resultado
    console.log('Alumnos procesados:', alumnosMayus);
  })
  .catch(err => {
    // Captura cualquier fallo (ej: si el archivo no existe)
    console.error('Error al procesar el archivo:', err.message);
  });