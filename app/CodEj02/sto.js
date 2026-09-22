
function fun1 (){

    console.log("Desde fun1()");
}

console.log("Inicio...");

setTimeout(fun1, 2000);   // Llama a fun1() luego de 2000 mS.

console.log("Linea siguiente");


