     let x = 8;
      const fun1 = ()=> {
                var pepe = "PEPE";
                let descuento = "5";
                if (true) {
                    let descuento = "10";
                }
                console.log("El de adentro: "+ pepe +" "+ descuento);
      }
      
    let fun2 = fun1;
         fun2()

