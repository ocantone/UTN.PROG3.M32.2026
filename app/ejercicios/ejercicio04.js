      // Código con errores a analizar:
      
      // Error 1: Coerción y Scope
      if (true) {
          var descuento = "10";
      }
      let precioFinal = 100 - descuento; 
      console.log("Precio con descuento:", precioFinal); // ¿Qué imprime y por qué?
      
      // Error 2: Mal uso de metodos de arreglo
      const valores = [10, 20, 30];
      const dobles = valores.map(v => {
          v * 2;
      });
      console.log("Dobles:", dobles);
      
      // Error 3: Mutación no deseada
      const configuracionInicial = { puerto: 8080, estado: 'OK' };
      const configuracionActual = configuracionInicial;
      configuracionActual.puerto = 9090;
      
      console.log("¿El puerto inicial cambió?:", configuracionInicial.puerto);