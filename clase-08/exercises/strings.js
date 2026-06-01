// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).

var string1 = "Hola Mundo!";
var mayuscula = string1.toUpperCase();
console.log(mayuscula);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).

var texto = "Hola Mundo!";
var primerosCinco = texto.substring(0,5);
console.log(primerosCinco);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).

var texto2 = "Hola Mundo!";
var ultimosTres = texto.substring(texto.length - 3);
console.log(ultimosTres);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).

var texto3 = "Hola Mundo!";
var capitalizado  = texto3.substring(0,1).toUpperCase() + texto3.substring(1,texto3.length).toLowerCase();
console.log(capitalizado );

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).

var texto4 = "Hola Mundo!";
var posEspacio = texto4.indexOf(" ", 0);
console.log(posEspacio);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).

var texto5 = "javacript programacion";

var posEspacio = texto5.indexOf(" ", 0);

var palabra1 = texto5.substring(0, posEspacio);
var palabra2 = texto5.substring(posEspacio + 1);

var palabra1Cap = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase();
var palabra2Cap = palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();

var resultado = palabra1Cap + " " + palabra2Cap;
console.log(resultado);