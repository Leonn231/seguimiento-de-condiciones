let escobaDura
let escobaSuave
let Cepillo 
let total
let cantidad
let costototal=""
const EscobaduraSintetica= 8000

const EscobaduraNatural= 10000
let adicionar
const CepilloSintetico= 12000
const CepilloNatural= 15000
 
const paloLargo = 2000
const Gancho= 500
let opcionSeleccionada

let materiales

opcionSeleccionada = parseInt(prompt("Escoja el modelo de escoba que desea \n1. Escoba Dura  \n2. Escoba Suave \n3 Cepillo"))

if(opcionSeleccionada <1 || opcionSeleccionada >3){
    alert("opcion no valida")
}else{

    materiales = parseInt(prompt("Elija el tipo de Material \n1. cerdas sinteticas  \n2.cerdas naturales "))
    if(materiales <1 || materiales >2){
        alert("opcion no valida")
    }else{
        adicionar = parseInt(prompt("Si desea puede adicionar \n1 mango largo  \n2 gancho en punta  \n3. No gracias"))
        if(adicionar <1 || adicionar >3){
         alert("opcion no valida")

        }else{
            cantidad = parseInt(prompt("cuantas escobas desea?"))
            
            if (cantidad <3 || cantidad >30){
                alert("solo se pueden comprar entre 3 y 30 esccobas")

        }
     
     switch (opcionSeleccionada) {
        case 1:
            escobaDura = true
            costototal = (materiales === 1) ? EscobaduraSintetica : EscobaduraNatural
            break;
        case 2:
            escobaSuave = true
            costototal = (materiales === 1) ? EscobasuaveSintetica : EscobasuaveNatural
            break;
        case 3:
            Cepillo = true
            costototal = (materiales === 1) ? CepilloSintetico : CepilloNatural
            break;
    }

    
    switch (adicionar) {
        case 1:
            costototal + MangoLargo
            break
        case 2:
            costototal + GanchoenPunta
            break
    }

   
    total = costototal * cantidad

    
    alert("total del costo: $" + costototal * cantidad)

        }
        
    
    }
        
    } 
    