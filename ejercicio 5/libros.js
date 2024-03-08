const Bestsellers = 500 
const Literatura = 100
const Académicos = 0
let dias
let descuento =  0.010
let libros
let opcionSeleccionada
let titulo 
let categoria
let costoTotal = "0"


opcionSeleccionada = parseInt(prompt("Seleccione el tipo de libro que desea  \n1. Bestsellers (500 por dia)  \n2. literatura (100 por dia) \n3. Academicos (prestamo gratis) "))
if(opcionSeleccionada <1 || opcionSeleccionada >3){
    alert("Opcion No valida")

}else{
libros = parseInt(prompt("elija la cantidad de libros que necesita"))
if(libros <1 || libros >5){
    alert("Solo se pueden elegir entre 1 o 5 libros")
}else{
    titulo = parseInt(prompt("Ingrese El titulo o los titulo del libro que quiere"))

 categoria = parseInt(prompt("Elija la categoria deseada \n1 Bestsellers \n2. Literatura \n3. Academicos  "))
 if(categoria <1 || categoria >3){
    alert("No hay esa categoria")
 }else{
dias = parseInt(prompt("Elija la cantidad de dias de prestamo"))
if (dias <1 || dias >30){
    alert("Prestamos libros de 1 y 30 dias")
}else{
    
    switch(categoria){
        case 1:
    costoTotal = Bestsellers * dias * libros

    break

    case 2:
        costoTotal = Literatura * dias * libros
        break

        case 3:
            costoTotal = Academicos
            break
    }
    
    if(dias > 10){
        costoTotal= costoTotal * descuento
    }
    alert("el precio total de este prestamo es: $" + costoTotal)
        
    

}
 }
}
}