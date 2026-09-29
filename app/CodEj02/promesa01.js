const p1 = Promise.resolve(1);

console.log(p1); 
// Imprime: Promise { 1 } 
// (Muestra el objeto Promesa en estado cumplido/fulfilled con valor 1)

p1
  .then(x => x + 5)                         
  // Recibe x = 1  ---> Retorna 6

  .then(x => Promise.resolve(x + 5))        
  // Recibe x = 6  ---> Retorna Promise.resolve(11)

  .then(x => Promise.reject('Error! algo sucedio mal')) 
  // Recibe x = 11 ---> Retorna Promise.reject(...)

  .then(x => console.log('Esto no se va a llamar'))      
  // SE SALTEA (no se ejecuta)

  .catch(e => console.log(e));              
  // Captura el rechazo e imprime el mensaje