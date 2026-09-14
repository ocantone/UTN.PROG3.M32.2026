/*function miFuncion(){
	let x = 8;
		let z;
	if( true ){
		var y =9;
	}
		
	console.log("===== miFuncion(): ");
	console.log("Salida 1: ",x);
	console.log("Salida 2: ",y);
	console.log("Salida 3: ",z);
	
}
miFuncion();
*/
function probarVariables() {
    console.log("A:", x);  // "Cae" en la TDZ. No está resuelto aún el HOISTING.
    if (true) {
        var x = 100;
        //let y = 200;
    }
	console.log("===== probarVariables(): ");
    console.log("B:", x);
    //console.log("C:", y);
}
probarVariables();