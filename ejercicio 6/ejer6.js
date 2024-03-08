const  Hamburguesas = 25000
 const Pizzería = 85000
 const ComidaChina = 18000
let menu
let costoTotal = "0"
let domicilio
let envio = 5000
 let opcionSeleccionada
let cantidad



opcionSeleccionada = parseInt(prompt("Seleccione el restaurante en el que desea ordenar \n1. Hamburguesas  \n2 pizzeria  \n3 Comida China"))
if(opcionSeleccionada <1 || opcionSeleccionada >3){
    alert("Ese lugar no esta disponible, elija otro")
}else{
if(opcionSeleccionada === 1){
    alert("Hamburguesa 25000")
}else if (opcionSeleccionada === 2){
    alert("pizza 85000")
}else if (opcionSeleccionada === 3)
alert("Comida china 18000")

cantidad = parseInt(prompt("¿Cuantas porciones desea?"))
if (cantidad <1 || cantidad >100){
    alert("Solo puede solicitar entre 1 o 100 porcionones")
}else{
    
    if(domicilio = 1)

        switch(domicilio){
        
            case 1:
        costoTotal = Hamburguesas * cantidad+ envio
        
        break
        
                
        case 2:
            costoTotal = Pizzería  * cantidad+ envio
            break
            
                
            case 3:
                costoTotal = ComidaChina * cantidad + envio
                break
        }
        
        alert ("el costo total de el pedido es $:"+costoTotal)
    

}
    }