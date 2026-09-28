// Create a new Promise
const myPromise = new Promise((resolve, reject) => {  // Simulate an async operation (e.g., API call, file read)
                                           // console.log("Promesa");
                                           setTimeout(() => {
                                                       const success = Math.random() > 0.5;
                                                       if (success) {
                                                       resolve('Operación completada con éxito.');
                                                       } else {
                                                       reject(new Error('Operación no completada.'));
                                                       }
                                                    }, 1000); // Simula un retardo.
                                                 }
                            );

// Using the Promise
myPromise
  .then(result => console.log('Finalizado:', result))
  .catch(error => console.error('Error:', error.message));
console.log("Siguiente...");