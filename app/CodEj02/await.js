const obtenerAlumnos = async () => {
  try {
    console.log("Conectando con https://cantone.com.ar/alumnos.json ...");

    // 1. Realizar la petición GET asíncrona a tu servidor
    const respuesta = await fetch("https://cantone.com.ar/alumnos.json");

    /*  Via remoto NGROK
    const respuesta = await fetch("https://xxxx.ngrok-free.app/alumnos.json", {
  headers: {
    "ngrok-skip-browser-warning": "true" // Omite la pantalla de advertencia de ngrok
  }
});
    
    */

    // 2. Verificar que el servidor haya respondido con un estado exitoso (HTTP 200 OK)
    if (!respuesta.ok) {
      throw new Error(`Error en el servidor: HTTP ${respuesta.status}`);
    }

    // 3. Deserializar la respuesta a un objeto/array de JavaScript
    const alumnos = await respuesta.json();

    console.log("\n--- Datos recibidos correctamente desde cantone.com.ar ---");
    console.table(alumnos); // Imprime los datos en un formato de tabla muy ordenado

    // Ejemplo de filtrado de datos obtenidos:
    const aprobados = alumnos.filter(a => a.aprobado);
    console.log(`\nCantidad de alumnos aprobados: ${aprobados.length}`);

  } catch (error) {
    console.error("\n❌ Hubo un fallo en la petición:", error.message);
  }
};

// Llamamos a la función asíncrona para ejecutarla
obtenerAlumnos();