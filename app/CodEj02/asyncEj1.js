function obtenerDni() {
  return "12345678";
}

// Función async equivalente
async function obtenerDniAsync() {
  return "12345678"; // Devuelve Promise { <fulfilled>: "12345678" }
}

console.log("obtenerDni(): ", obtenerDni());
console.log("obtenerDniAsync(): ", obtenerDniAsync());

