/**
 * Con fetch() abrimos un flujo de datos desde un origen (una URL en este caso)
 * y nos devuelve una PROMESA hasta finalizar la tarea (fullfilled o rejected).
 * Mientras tanto continua con la resolución.
 */

fetch("https://cantone.com.ar/api/datos2.txt")
  .then(   res => res.text()    )   //CALLBACK 
  .then(data => console.log(data))
  .catch(err => {
      console.log("No se ha podido conectar con la URL requerida");
      //console.error(err);
      });
console.log("Estoy despues de fetch");
const vector =[
  {id:1, nombre:"Cacho"},
  {id:2, nombre:"Cacha"}
];

vector.map( aux => {console.log(aux.nombre)} );