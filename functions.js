// diferentes paradigmas
// -- paradigma de la programacion funcional.  
// -- paradinga de la programacion por procesos o prodecimientos.
// -- paradigma de la programacion orientada a objetos.

// clase animales tiene sexo , tiene un tipo de pelo, mamiferos,
// robert martin (uncle bob) -- conceptos SOLID buenas practicas en POO

// ReactJS 
// crear una rutina con funciones


// definicion de la funcion;
function desayunar(laPersonaDesayuno = true){ // si no le pasamos por defecto laPersonaDesayuno = undefined

    // console.log(laPersonaDesayuno)

    if(!laPersonaDesayuno){
        return 'La persona no desayuno';
    }else{
        return 'La persona desayuno';
    }

}

function lavarseLosDientes(){

    return 'La persona se lavo los dientes';

}

// llamado de la funcion
//console.log(desayunar(false));

function salirATrabajar(estaListo, esLaHora){

    // palabra reservada arguments
    // arguments no soporta filter, ni map, ni reduce 
    // son metodos para recorrer array no los vamos a ver en este curso
    console.log(arguments); 

    if(estaListo && esLaHora){
        return 'Saliendo a trabajar';
    }else{
        return 'Aun no esta listo para salir a trabajar';
    }


}
// salirATrabajar(true/* estaListo */, false/* esLaHora */)

var estaListo = true;
var esLaHora = false;
//salirATrabajar(esLaHora, estaListo);

function rutina(){
    console.log(lavarseLosDientes());
    console.log(desayunar(true));
    console.log(salirATrabajar(true, true));

    return 'se ejecutarion todas las funciones  correctamente';
}



// otra manera de definir calcularAreaCuadrado
// arrow function o funciones flechas
const calcularAreaCuadradoArrowFunction = (lado1) => {
    return lado1 * lado1;
}
// calcularAreaCuadrado();


function devolverLadoDelCuadrado(lado){
    return lado;
}

function eliminar(){
    document.getElementById('text').style.display = 'none';
     alert(' se ha eliminado el div');
}

/* var areaDeCuadrado = calcularAreaCuadrado(30);
var areaDeCuadrado = calcularAreaCuadrado( devolverLadoDelCuadrado(10) );
var areaDeCuadrado = devolverLadoDelCuadrado(10) * devolverLadoDelCuadrado(10);
 */

// reconocer el tipo de dato

// NaN Not A Number (No es un numero);

function calcularAreaCuadrado(lado1){

/*     if(typeof lado1 != 'number' ){
        alert('El lado no es un numero');
        // como detener la ejecucion de una funcion
        return false;
    } */

    if(isNaN(lado1)){
        alert('El lado no es un numero');
        return false;
    }

    return lado1 * lado1;

}

// typeof 
// 1er manera typeof(valor a anlizar puede ser valor o varibale)
// 2da manera typeof valor //
// tipos de valor number / string / object / undefined /