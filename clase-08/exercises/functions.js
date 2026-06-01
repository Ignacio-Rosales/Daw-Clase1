// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.

function suma(num1,num2){
    var suma = num1 + num2;
    return suma
}
console.log(suma(5,255))

// b. A la función suma anterior, agregarle una validación para controlar si alguno de
// los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.

function suma(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    var suma = num1 + num2
    return suma
}
console.log(suma(5,360));
console.log(suma(5, "hola"));
console.log(suma("abc", 10));

// c. Crear una función validate integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.

function validate(numero) {
    if (numero % 1 === 0){
        return true
    } else {
        return false
    }
}
console.log(validate(5));
console.log(validate(5.78));

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).

function suma(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        alert("Uno de los parámetros no es un número");
        return NaN;
    } 

    if (!validate(num1)) {
        alert("num1 tiene decimales, se redondeará a " + Math.round(num1));
        num1 = Math.round(num1);
    }
    if (!validate(num2)) {
        alert("num2 tiene decimales, se redondeará a " + Math.round(num2));
        num2 = Math.round(num2);
    }
    var suma = num1 + num2;
    return suma;
}

console.log(suma(5.7, 10));

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
// dentro de la función suma probando que todo siga funcionando igual

function validateAndRound(numero, nombre) {
    if (!validate(numero)) {
        alert(nombre + " tiene decimales, se redondeará a " + Math.round(numero));
        return Math.round(numero);
    }
    return numero;
}

function suma(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }

    num1 = validateAndRound(num1, "num1");
    num2 = validateAndRound(num2, "num2");

    return num1 + num2;
}

console.log(suma(5.7, 10));
console.log(suma(5, 10));
console.log(suma("a", 10));
console.log(suma(5.7, 10.3));