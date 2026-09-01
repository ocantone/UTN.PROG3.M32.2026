/******
Ejercicio 2: Auditoría y Filtrado de Inventario (ejercicio02.js)
    • Objetivo: Dominar .filter(), la combinación de condiciones lógicas 
    y entender la diferencia entre iterar para transformar vs. iterar para 
    ejecutar acciones (.forEach()).
    • Consigna: Dado el catálogo de productos de un depósito:
*/
    const inventario = [
        { id: 'P1', nombre: 'Sensor Inductivo', precio: 45, categoria: 'Electrónica', stock: 12 },
        { id: 'P2', nombre: 'Pulsador Industrial', precio: 12, categoria: 'Electricidad', stock: 0 },
        { id: 'P3', nombre: 'PLC Compacto', precio: 320, categoria: 'Electrónica', stock: 4 },
        { id: 'P4', nombre: 'Contactor 220V', precio: 85, categoria: 'Electricidad', stock: 15 },
        { id: 'P5', nombre: 'Relé Térmico', precio: 55, categoria: 'Electricidad', stock: 0 }
      ];
/*   
1. Utilizando .filter(), obtené un nuevo arreglo llamado "críticosElectricidad" con aquellos productos
que pertenecen a la categoría 'Electricidad' y que tienen un stock igual a 0. 
Mostralo en consola con console.table().

2. Utilizando .forEach(), recorré el arreglo de productos críticos e imprimí 
un mensaje de alerta por consola para el equipo de compras con el 
siguiente formato por cada ítem: 
[ALERTA REPOSICIÓN] El producto 'Pulsador Industrial' no tiene stock disponible.
*/

//const disponiblesYValiosos = productos.filter(p => p.stock && p.precio > precioMin);
//const criticosElectricidad = inventario.filter();

// SOLUCIÓN DE Joaquín: 
const criticosElectricidad = inventario.filter(C => C.categoria ==='Electricidad' && C.stock === 0 );
console.log('\n Productos de Categoria Electricidad y sin stock \n');
console.table(criticosElectricidad);
 
criticosElectricidad.forEach(producto => {
    console.log(`FALTANTE DE STOCK DEL PRODUCTO '${producto.nombre}'`);
});
 
