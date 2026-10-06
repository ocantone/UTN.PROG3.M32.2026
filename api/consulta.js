/**
 * CONSULTA COMPLETA DE LA TABLA CLIENTES
 * Usamos el módulo 
 * Para correr dentro del contenedor:
 * docker exec -it node-backend node consulta.js
 * 
 */
const mysql = require('mysql2/promise');

async function consultarClientes() {
  // Configuración de conexión
  // Nota: Si lo ejecutás adentro de Docker usás host 'db'.
  // Si lo ejecutás en la consola de Windows usás 'localhost'.
  const host = process.env.RUNNING_IN_DOCKER ? 'db' : 'localhost';

  try {
    const connection = await mysql.createConnection({
      host: host,
      user: 'prog3',
      password: 'admin123',
      database: 'datos'
    });

    console.log('✅ Conexión establecida con MySQL\n');

    // Realizamos la consulta
    const [filas] = await connection.query('SELECT * FROM clientes');

    console.log(`--- LISTADO DE CLIENTES (${filas.length} registros) ---`);
    
    // Recorremos los registros e imprimimos en consola
    filas.forEach((cliente, index) => {
      console.log(`\nRegistro #${index + 1}:`);
      console.log(`  ID:     ${cliente.id}`);
      console.log(`  DNI:    ${cliente.dni}`);
      console.log(`  Nombre: ${cliente.nombre}`);
      console.log(`  Email:  ${cliente.email}`);
    });

    console.log('\n----------------------------------------');

    // Cerramos la conexión para liberar la terminal
    await connection.end();

  } catch (error) {
    console.error('❌ Error al consultar la base de datos:', error.message);
  }
}

consultarClientes();