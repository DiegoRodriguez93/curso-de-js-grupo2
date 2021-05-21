// bucle for
// el valor inicial del indice
// la condicion para que este bucle se detenga
// tipo de condiciones < > <= >= no ==
// y al momento de modificar el indice lo puedo aumentar o restar por uno
// la incrementacion que se define en el bucle

/* for (let indice = 0; indice <= 10; indice = indice + 1) {
  var numero = indice * 2;
  console.log(numero);
} */

var dias = [
  "lunes", // indice 0
  "martes", // indice 1
  "miercoles", // indice 2
  "jueves",// i 3
  "viernes",// i 4
  "sabado",// i 5
  "domingo",// i 6
];

var lunes = dias[0];
var martes = dias[1];

var largoDelArray = dias.length; // .length nos devuelve el largo del array
let cadenaDeDias = '';

for(let indice = 0; indice < largoDelArray; indice++ ){

  //cadenaDeDias = cadenaDeDias + dias[indice];
  cadenaDeDias += dias[indice] + '/';

}

document.getElementById('dias').innerHTML = cadenaDeDias;

// bucle while
let i = 0;

while(i < 5){ // la condicion donde estos valores se ejecutan

    console.log(i);
    i++

}
