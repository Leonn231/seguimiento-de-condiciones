let opcionDePago = prompt("Seleccione una opción de pago:\n1. Pago completo (5% de descuento)\n2. Pago en 2 cuotas\n3. Pago en 3 cuotas");


opcionDePago = parseInt(opcionDePago);


let valorMatricula = prompt("Ingrese el valor base de la matrícula:");


valorMatricula = parseFloat(valorMatricula);


let valorTotal = 0;
if (opcionDePago === 1) {

  valorTotal = valorMatricula * 0.95;
  console.log("El valor total a pagar con el descuento es: $" + valorTotal.toFixed(2));
} else if (opcionDePago === 2) {

  valorTotal = valorMatricula / 2;
  console.log("El valor total a pagar en 2 cuotas es: $" + valorTotal.toFixed(2));
} else if (opcionDePago === 3) {
  
  valorTotal = valorMatricula / 3;
  console.log("El valor total a pagar en 3 cuotas es: $" + valorTotal.toFixed(2));
} else {
  console.log("Opción de pago inválida.");
}