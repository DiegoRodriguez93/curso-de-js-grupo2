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
/* let i = 0;

while(i < 5){ // la condicion donde estos valores se ejecutan

    console.log(i);
    i++;

} */

// bucle do while
// si la condicion es valida el bucle se detiene
// si es falsa el bucle continua

/* let ii = 0;

do {

  console.log(ii);
  ii++;

} while ( ii < 10 ); */

// ciclo foreach

const alumnos = [
  ['Jorge', 'JS1', 'Montevideo', 7],
  ['Julian', 'JS1', 'Salto', 8],
  ['Ana', 'JS2', 'Canalones', 9],
  ['Pedro', 'JS2', 'Maldonado', 4]
];

// metodo push para agregar valores a los array
alumnos.push(['Luis', 'JS1', 'San Jose', 2]);

// metodo pop elimina el ultimo elemento de un array // Elimina a Luis
alumnos.pop();

// metodo shift elimina el primer elemento de un array // Elimina a Jorge
alumnos.shift();

/* console.log(alumnos) */

const alumnosAprobados = [];
const alumnosDesprobados = [];

alumnos.forEach(function(alumno, index, alumnos){

  let nombre = alumno[0];
  let nota = alumno[3];

  //console.log(index);
  if(nota >= 7 ){
    alumnosAprobados.push(nombre);
  }else{
    alumnosDesprobados.push(nombre);
  }

});

/* console.log('Alumnos aprobados', alumnosAprobados);
console.log('Alumnos desaprobados', alumnosDesprobados); */

const numeros = [
  '0', '1', '2', '3'
];

// metodo slice
const porcionDelArray = numeros.slice(1,4);

// enumeradores en javascript, enumerators

const Paises = {
  UY : 'Uruguay',
  AR : 'Argentina',
  BR : 'Brasil',
  PY : 'Paraguay'
};

console.log(Paises.UY);
console.log(Paises['AR']);

const Departamentos = {
  1 : 'Montevideo',
  2 : 'Canelones',
  3 : 'San Jose'
}

console.log(Departamentos[1]);