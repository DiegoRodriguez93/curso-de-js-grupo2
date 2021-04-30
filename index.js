        // para imprimir texto
        document.write('<h1>Hola Mundo</h1>');

        // alerta
        // alert('Hola desde la alerta!');

                        // para enviar mensajes en consola
                        /*console.log('Mensaje desde la consola');
                        console.warn('Mensaje de advertencia');
                        console.error('Mensaje de error');*/

        // opciones del navegador
        // F12 o Cntrl + shift + I



        // comentario de una linea
        /* comentario
        de 
        muchas 
        lineas
        */

        console.log("con comillas dobles");
        console.log(`con backtick`);

        // variables : sirven para almacenar un valor
        // existen 4 maneras

        manera1 = 'Mensaje almacenado en variable'; // no es correcta

        // variable mutables o variables a las que le puedo cambiar el valor
        var manera2 = 'Mensaje almacenado en variable var'; // es igual a let con entorno de ejecucion
        let manera3 = 'Mensaje almacenado en variable let'; // es igual a var con entorno de ejecucion
        
        manera2 = 'Nuevo valor para manera2';
        manera3 = 'Nuevo valor para manera3';

        // variables inmutable yo no le puedo cambiar el valor
        const MANERA4 = 'Mensaje almacenado en variable const';

                // para enviar mensajes en consola
        console.log(manera2);
        console.warn(manera3);
        console.error(MANERA4);

        // maneras de escribir nombre de variables, de funciones y de archivos
        // camelCase // en JS para nombrar variables, funciones y nombres de archivos
        // PascalCase // en JS para nombrara clases y componentes 
        // SNAKE_CASE // en JS para nombrar constantes
        // snake_case // no se usa en JS
        // kebab-case // no se usa en JS

        var primerNombre = 'Diego';
        const SEGUNDO_NOMBRE = '';


        // tipos de datos
        var cadena = 'es una cadena de texto'; // string
        var numero = 100; // number 
        var numeroNegativo = -100; // number 
        var flotante = 10.5; // float
        var flotanteNegativo = -10.5; // float
        var boolean1 = true;
        var boolean2 = false;
        var arreglo = ['dato1', 100, 5.3, ['otros_datos', 1]]; // array // object
        var persona = {
            primerNombre : 'Diego',
            apellido : 'Apellido'
        }

        // concatenacion o union

        var nombre = 'Diego';
        var apellido = 'Rodriguez';

        var nombreCompleto = nombre + ' ' + apellido;
        var nombreCompletoConBacktick = `${nombre} ${apellido}`;


        // coercion de tipos
        // como solucionar el problema de coercion de tipos

        var a = 20;
        var b = "20";

        var sumar = parseInt(a) + parseInt(b); // 40
        var sumar2 = Number("20") + Number(b); // 40

        var cadena = a.toString() + b.toString(); // 2020
        var cadena2 = String(a) + String(b); // 2020

        var boolean = Boolean("true");
