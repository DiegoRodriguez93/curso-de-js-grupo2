/* // AGREGAR ESTILOS DESDE JS 
document.getElementById('block').style.backgroundColor = 'red';
// AGREGAR TEXTO DESDE JS
document.getElementById('text').textContent = 'Hola desde JS en negrita y modificando HTML';
// AGREGAR CODIGO HTML DESDE JS
document.getElementById('text').innerHTML = '<b>Hola desde JS en negrita y modificando HTML</b>';
// otra manera de acceder a traves del querySelector . por clase # por id, div por nombre de elemento HTML
document.querySelector('.bloqueAzul2');
// seleccionar todos los elementos
document.querySelectorAll('div');
// eliminar del dom document.getElementById('block2').remove();
document.getElementById('block').addEventListener('click', function(){
    document.getElementById('block').style.backgroundColor = "black";
});

var block2 = document.getElementById('block2');

block2.addEventListener('mouseout', function(){
    block2.style.backgroundColor = "blue";
});

block2.addEventListener('mouseover', function(){
    block2.style.backgroundColor = "green";
}); */

var elBotonIngresar = document.getElementById('botonIngresar');

elBotonIngresar.style.display = 'none';

// como acceder al valor
var elEdad = document.getElementById('edad');
var elError = document.getElementById('error');

elEdad.addEventListener('keyup', function(){ //funciones anonimas

    //funciones anonimas con arrow function
    // () => {}

   let edad = Number(elEdad.value);

   // Valores de precedencia del operador
   // && y (una cosa y la otra)
   // || o (una cosa o la otra)
   // ! (no es eso)
   // == para comparar igualdad
   // === mismo tipo y del mismo valor
   // != para comparar no igualdad


    var esMayorDeEdad = false;

    if (edad > 17 && edad < 100 ){
        elBotonIngresar.style.display = 'block';
        elError.textContent = '';
        esMayorDeEdad = true;
    }else if(edad >= 100){
        esMayorDeEdad = true;
        console.log('Felicidades por ser mayor de 100');
    }else{
        esMayorDeEdad = false;
        elBotonIngresar.style.display = 'none';
        elError.textContent = 'Debe ser mayor de edad para ingresar en el sistema';
    }

    if(!esMayorDeEdad){ // esMayorDeEdad != false
        // alert('No es mayor de edad!');
    }

});
