const fs = require('fs');




console.log('1. Starting async read...');

//const data = fs.readFileSync('myfile.txt', 'utf8');

//fs.readFile(QUE_ARCHIVO, CHARSET, CALL-BACK())



fs.readFile('myfile.txt', 'utf8', (err, data) => {
              if (err) throw err;
              console.log('2. File contents:', data);
            }
);

console.log('3. Done starting read operation');
