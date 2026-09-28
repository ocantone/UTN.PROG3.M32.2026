let a = "10"; let b = 2;
console.log("Salida 1:", a + b);
console.log("Salida 2:", a - b);
console.log("Salida 3:", a == 10);
console.log("Salida 4:", a === 10);
function evaluarScope() {
    if (true) {
    var x = 100; let y = 200;
    }
 console.log("Salida 5 (x):", x);
 console.log("Salida 6 (y):", y);
}
evaluarScope();