const obtenerNotas = () => Promise.resolve([4, 8, 2, 10, 6]);

obtenerNotas()
  .then(notas => {
    return notas.filter(n => n >= 6);
  })
  .then(aprobados => {
    console.log("Aprobados:", aprobados);
    // ¿Qué pasa si NO pongo un return explícito acá?
  })
  .then(resultado => {
    console.log("Resultado final:", resultado);
  })
  .catch(err => console.log("Error:", err));