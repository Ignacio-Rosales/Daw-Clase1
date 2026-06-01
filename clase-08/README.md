# Listado de ejercicios

## 1. Variables y Operadores

a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar `length`).

---

## 2. Strings

a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar `toUpperCase`).

b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar `substring`).

c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar `substring`).

d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar `substring`, `toUpperCase`, `toLowerCase` y el operador `+`).

e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar `indexOf`).

f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar `indexOf`, `substring`, `toUpperCase`, `toLowerCase` y el operador `+`).

---

## 3. Arrays

a. Dado el siguiente array: `["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]` mostrar por consola los meses 5 y 11 (utilizar `console.log`).

b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar `sort`).

c. Agregar un elemento al principio y al final del array (utilizar `unshift` y `push`).

d. Quitar un elemento del principio y del final del array (utilizar `shift` y `pop`).

e. Invertir el orden del array (utilizar `reverse`).

f. Unir todos los elementos del array en un único string donde cada mes esté separado por un guión `-` (utilizar `join`).

g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar `slice`).

---

## 4. If Else

a. Crear un número aleatorio entre 0 y 1 utilizando la función `Math.random()`, si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje `"Greater than 0,5"` y sino una alerta con el mensaje `"Lower than 0,5"`.

b. Crear una variable `Age` que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

- `"Bebe"` si la edad es menor a 2 años
- `"Niño"` si la edad es entre 2 y 12 años
- `"Adolescente"` entre 13 y 19 años
- `"Joven"` entre 20 y 30 años
- `"Adulto"` entre 31 y 60 años
- `"Adulto mayor"` entre 61 y 75 años
- `"Anciano"` si es mayor a 75 años

---

## 5. For

a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle `for` de JavaScript para mostrar una alerta utilizando cada una de las palabras.

b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

c. Crear una variable llamada `sentence` que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle `for` para ir guardando cada palabra dentro de la variable `sentence`. Al final mostrar una única alerta con la cadena completa.

d. Crear un array vacío y con un bucle `for` de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle `for` debería haber 10 elementos dentro del array, desde el número `0` hasta el número `9`. Mostrar por la consola del navegador el array final (utilizar `console.log`).

---

## 6. Funciones

a. Crear una función `suma` que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

b. A la función `suma` anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor `NaN` como resultado.

c. Crear una función `validateInteger` que reciba un número como parámetro y devuelva verdadero si es un número entero.

d. A la función `suma` del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar una alerta con el error y retornar el número convertido a entero (redondeado).

e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función `suma` probando que todo siga funcionando igual.