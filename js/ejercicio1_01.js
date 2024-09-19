//comentarios de una sola linea
/*
Comentarios multilinea
*/
// EJERCICIO #1 : Declaración de variables
// a) var
var miNombre = "Al";
var misApellidos;
var miEdad = 23;
//El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funcion o metodo
console.warn("--- Declaracion de variables usando: VAR");
console.log("Intentado leer las variables ", miNombre, misApellidos);
misApellidos = "Farias Leyva";
console.log(
  "Ya que ambos fueron inicializados vuelvo a intentar leerlos ",
  miNombre,
  misApellidos
);
//Una variable puede cambiar en el proceso de ejecucion del programa
// b) const
console.warn(
  "--- Declaracion de variables de del tipo de constante usando: CONST"
);
const miUniversidad = "UT Xicotepec";
const miMatricula = 230389;
console.log(
  "Hola, ",
  miNombre,
  " ",
  misApellidos,
  " se que estudia actualmente en: ",
  miUniversidad,
  "asignaron la matricula ",
  miMatricula,
  " y tiene una edsd de ",
  miEdad,
  " años."
);
// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeof()
console.log("Analizando los datos puedo deducir que: ");
console.log("miNombre es el tipo de: ", typeof miNombre);
console.log("miApellidos es el tipo de: ", typeof misApellidos);
console.log("miUniversidad es el tipo de: ", typeof miUniversidad);
console.log("miEdad es el tipo de: ", typeof miEdad);
console.log("miMatricula es el tipo de: ", typeof miMatricula);
// c) let
let miFechaNacimiento = "2001-07-03";
let miColorFavorito;
console.warn("--- Declaracion de Variables Locales usando : LET");
console.log(
  "Genial, te voy conociendo mejor, ahora se que tu naciste el: ",
  miFechaNacimiento,
  " y tu colorFavorito es: mmmmmm dejame pensar..."
);
miColorFavorito = "Negro";
console.log("Creo que es", miColorFavorito, "le atine"); // La manera de mezclar textos fijos como el valor actual de las variables se le conoce como: Interpolacion y deben iniciar y finalizar en un backtic ` tilde inversa
console.log("miFechaNacimiento es el tipo de: ", typeof miFechaNacimiento);
console.log("miColorFavorito es el tipo de: ", typeof miColorFavorito);
