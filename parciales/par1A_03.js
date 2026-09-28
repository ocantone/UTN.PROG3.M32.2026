const transacciones = [
 { id: 'T1', monto: 1000, estado: 'APROBADA' },
 { id: 'T2[', monto: 2500, estado: 'RECHAZADA' },
 { id: 'T3', monto: 500, estado: 'APROBADA' }
];
const totalAprobadoConDescuento = transacciones  //PIPELINE
 .filter(t => t.estado === 'APROBADA')
 .map(t => t.monto * 0.90)   //[900, 450]
 .reduce((acum, monto) => acum + monto, 0);  // 1350
console.log("Resultado Total:", totalAprobadoConDescuento); //1350
console.log("Longitud Original:", transacciones.length);   //3

