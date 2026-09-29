const fs = require('fs');




console.log('1. Arranca lectura asíncrona...');

//const data = fs.readFileSync('myfile.txt', 'utf8');

//fs.readFile(QUE_ARCHIVO, CHARSET, CALL-BACK())



fs.readFile('myfile.txt', 'utf8', (err, data) => {
              if (err) throw err;
              console.log('2. Contenido:', data);
            }
);

console.log('3. Inicio de lectura finalizado');
