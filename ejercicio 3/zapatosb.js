
let precios = {
    clásicos: 500000,
    running: 800000,
    basketball: 1000000
  };
  
  let tallasPermitidas = {
    clásicos: {
      min: 35,
      max: 44
    },
    running: {
      min: 35,
      max: 44
    },
    basketball: {
      min: 35,
      max: 44
    }
  };
  
  let descuento = 0.1;
  
  let modelo = prompt("Seleccione el modelo de tenis:\n1. Clásicos\n2. Running\n3. Basketball");
  modelo = parseInt(modelo);
  
  if (modelo < 1 || modelo > 3) {
    console.log("Opción de modelo inválida.");
  } else {
    if (!Object.keys(precios).includes(Object.keys(precios)[modelo - 1])) {
      console.log("Modelo no disponible.");
    } else {
      let talla = prompt("Ingrese la talla:");
      talla = parseInt(talla);
  
      if (talla < tallasPermitidas[Object.keys(tallasPermitidas)[modelo - 1]].min || talla > tallasPermitidas[Object.keys(tallasPermitidas)[modelo - 1]].max) {
        console.log("Talla inválida.");
      } else {
        let cantidad = prompt("Ingrese la cantidad a comprar:");
        cantidad = parseInt(cantidad);
  
        if (cantidad < 1 || cantidad > 5) {
          console.log("Cantidad inválida.");
        } else {
          let precioFinal = precios[Object.keys(precios)[modelo - 1]] * (cantidad >= 3 ? (1 - descuento) : 1);
  
          let total = precioFinal * cantidad;
  
          console.log("Modelo: " + Object.keys(precios)[modelo - 1]);
          console.log("Talla: " + talla);
          console.log("Cantidad: " + cantidad);
          console.log("Precio final: $" + precioFinal.toFixed(2));
          console.log("Total a pagar: $" + total.toFixed(2));
          alert("Modelo: " + Object.keys(precios)[modelo - 1] + "\nTalla: " + talla + "\nCantidad: " + cantidad + "\nPrecio final: $" + precioFinal.toFixed(2) + "\nTotal a pagar: $" + total.toFixed(2));
        }
      }
    }
  }