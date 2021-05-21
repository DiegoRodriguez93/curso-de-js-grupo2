var nombre = undefined;

// entorno de las variables

var global = "hola mundo desde el scope global";

function test() {
  var global = "hola mundo desde la funcion test";

  if (true) {
    var global = "hola mundo desde la funcion test";
  }

  function aumentarUnNumero(num) {
    return ++num;
  }

  var numero = aumentarUnNumero(2)

  return numero;
}

// aumentarUnNumero(); no puedo acceder ya que esta dentro de otro entorno
// las variables en el entorno global se almacenan en el objeto window

// HOISTING 
//console.log(nombre);
var nombre = 'Diego'; 

//console.log(apellido);
// temporal dead zone (zona de muerte temporal)
let apellido = 'Rodriguez'; // no puedo acceder antes de que este inicializada

const apellidoContante = 'Rodriguez';


function scopeHijo(){
    var pais = 'Brasil';
    console.log(pais);
    var pais = 'Uruguay';
    console.log(pais);


}

/* if(window.innerWidth < 500){
    alert('estamos dentro de un celular')
} */