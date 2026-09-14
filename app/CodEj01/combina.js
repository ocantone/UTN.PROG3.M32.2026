// ==========================================
// EJEMPLO COMBINADO: Pipeline Funcional
// ==========================================

const transacciones = [   // ARRAY.
  { id: 'T1', cliente: 'Juan', monto: 1500, estado: 'APROBADA' },
  { id: 'T2', cliente: 'María', monto: 3000, estado: 'RECHAZADA' },
  { id: 'T3', cliente: 'Pedro', monto: "800", estado: 'APROBADA' },
  { id: 'T4', cliente: 'Ana', monto: 2200, estado: 'PENDIENTE' },
  { id: 'T5', cliente: 'Sofia', monto: 1200, estado: 'APROBADA' }   //5 elementos, objeto.
];

console.log('=== TRANSACCIONES REGISTRADAS ===');
console.table(transacciones);

// --- PIPELINE DE TRANSFORMACIÓN FUNCIONAL ---
// 1. filter: Selección de transacciones validas
// 2. map: Aplicar descuento del 10% (monto * 0.90)
// 3. reduce: Sumar todos los montos finales procesados

const ingresoNetoTotal = transacciones
  .filter(t => t.estado === 'APROBADA')  // Selecciono solo las aprobadas.
  .map(t => t.monto * 0.90)
    //SELECT FROM ( SELECT FROM TRANSACCIONES WHERE estado === 'APROBADA') WHERE ...
    .reduce((acumulador, montoConDescuento) => acumulador + montoConDescuento, 0);


// --- Salidas paso a paso para inspección en clase ---

// Paso 1 aislado
const aprobadas = transacciones.filter(t => t.estado === 'APROBADA');

// Paso 2 aislado
const montosConDescuento = aprobadas.map(t => t.monto * 0.90);

console.log('\n--- DESGLOSE DEL PIPELINE ---');
console.log('1. Transacciones aprobadas (filter)  :', aprobadas.map(t => t.id));
//Mostrar una tabla con todos los datos de las transacciones aprobadas
console.table(aprobadas);
//Mostrar el monto total sin descuentos de las transacciones aprobadas
const totalAprobSinDesc = aprobadas.reduce((acum, cadaAprobada) => acum + cadaAprobada.monto , 0);
console.log('Total Aprobadas Sin Descuento: ', totalAprobSinDesc);

console.log('2. Montos con 10% desc. (map)        :', montosConDescuento);
console.log('3. Total final acumulado (reduce)    :', `$${ingresoNetoTotal}`);

// Comprobación de integridad
console.log('\nVerificación: ¿El arreglo de transacciones original sufrió mutación?');
console.log(`Cantidad original intacta: ${transacciones.length} elementos.`);