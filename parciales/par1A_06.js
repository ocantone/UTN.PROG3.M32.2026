/*
6. Dado un arreglo `inventario` de productos con las propiedades `{ nombre, precio, stock, categoria }`, 
escriba una sentencia encadenada (pipeline) utilizando `.filter()` y `.reduce()` para calcular el costo total 
del inventario compuesto ÚNICAMENTE por productos que pertenezcan a la categoría `'Electricidad'` Y 
tengan `stock > 0`.

SELECT * FROM inventario WHERE sotock>0 AND categoria = 'Electricidad'
*/
const inventario = [
 { nombre: 'Contactor 220V', precio: 85, stock: 10, categoria: 'Electricidad' },
 { nombre: 'Sensor Inductivo', precio: 45, stock: 5, categoria: 'Electrónica' },
 { nombre: 'Relé Térmico', precio: 55, stock: 0, categoria: 'Electricidad' },
 { nombre: 'Tecla combinación', precio: 10, stock: 20, categoria: 'Electricidad' }
];

const costoTotalExitenteElectricidad = inventario
.filter(aux => aux.categoria==='Electricidad' && aux.stock>0)
.reduce((acum, aux) => acum + (aux.precio*aux.stock), 0);

console.log(costoTotalExitenteElectricidad);




