const mysql = require('mysql2/promise');

// Determinamos el host según el entorno
const host = process.env.RUNNING_IN_DOCKER ? 'db' : 'localhost';

let conexionGlobal = null;

console.log('Iniciando consulta con Promesas tradicionales (.then / .catch)...\n');

// 1. mysql.createConnection devuelve una Promesa
mysql.createConnection({
  host: host,
  user: 'prog3',
  password: 'admin123',
  database: 'datos'
})
.then(connection => {
  conexionGlobal = connection;
  console.log('✅ Conexión establecida con MySQL\n');

  // 2. Retornamos la promesa de la consulta para encadenarla
  return connection.query('SELECT * FROM clientes');
})
.then(([filas]) => {
  // 3. Este .then recibe la respuesta de la query
  console.log(`--- LISTADO DE CLIENTES (${filas.length} registros) ---`);

  filas.forEach((cliente, index) => {
    console.log(`\nRegistro #${index + 1}:`);
    console.log(`  ID:     ${cliente.id}`);
    console.log(`  DNI:    ${cliente.dni}`);
    console.log(`  Nombre: ${cliente.nombre}`);
    console.log(`  Email:  ${cliente.email}`);
  });

  console.log('\n----------------------------------------');
})
.catch(error => {
  // 4. Captura errores de CONEXIÓN o de QUERY en un solo punto
  console.error('❌ Error en el flujo asincrónico:', error.message);
})
.finally(() => {
  // 5. Se ejecuta SIEMPRE (haya o no error) para liberar recursos
  if (conexionGlobal) {
    conexionGlobal.end()
      .then(() => console.log('🔒 Conexión cerrada correctamente.'))
      .catch(err => console.error('Error al cerrar la conexión:', err.message));
  }
});