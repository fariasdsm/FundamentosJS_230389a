const bg =
  "linear-gradient(11deg, rgba(200,150,360,1) 0%, rgba(260,129,12,1) 33%, rgba(255,19,260,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 07: Arreglos en Java Script");

console.log("%c1.- Condicionales Si/Entoces ... (IF)", style_console);

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`);

//Y si la necesitamos en formato local(?)

const fechaLocalMX = fechaActual.toLocaleString("es-MX", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

console.log(`en formato local (México): ${fechaLocalMX}`);

//Si es antes de las doce saluda con buenos días

if (fechaActual.getHours() < 12)
  console.log(`Buenos días, hoy es ${fechaLocalMX}`);

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if (fechaActual.getMonth() <= 6)
  console.log(`Estas en la primera mitad del año`);
else console.log(`Estas en la segunda mitad del año.`);

//que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);

let horarioVerano = false;

if (fechaActual >= inicioPrimavera || fechaActual < inicioVerano) {
  console.log("Estamos en PRIMAVERA...");
  console.log("Inicia la floracion de muchas plantas...");
  console.log("Los dias son mas largos y las noches mas cortas...");
  console.log("Muchos animales despiertan de la hibernacion...");
  estacion = "Primavera";
  horarioVerano = true;
} else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno) {
  console.log("Estamos en OTOÑO...");
  console.log("Los arboles suelen cambiar de follaje");
  console.log("Se registraran temperaturas mas templadas");
  console.log(
    "Los animlaes copmienza con la recoleccion de alimento y preparan sus espacios paera la hibernacion, incluso algunas aves migran"
  );
  estacion = "Verano";
  horarioVerano = true;
} else {
  console.log("Estamos en INVIERNO...");
  console.log(
    "En esta temporada los dias son mas cortos y las noches mas largas..."
  );
  console.log("En algunas regiones suele nevar...");
  console.log("Dado las bajas temperaturad, se recomienda abrigarse");
  estacion = "Invierno";
  horarioVerano = false;
}

console.log(
  "%c2.- Operador Ternario (validacion?cumple:no_cumple)",
  style_console
);

//En JavaScript exista una operacion simplificada que valida si una condicion se cumple o no y que hacer en cada caso

const edadPersona = 1;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
  edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad";

console.log("Evaluando la mayoria de edad de una persona...");
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, por lo que debemos considerar un segundo parametro en la evalucacion

evaluarMayoriaEdad = (edad, pais) =>
  edad >= 18 && pais === "MX"
    ? `En ${pais} eres mayor de edad`
    : `En ${pais} NO eres mayor de edad`;

console.log("Evaluando la mayoria de edad de una persona en Mexico...");
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...");
console.log(evaluarMayoriaEdad(edadPersona, "US"));

console.log("%c3.- SWITCH - CASE (Eleccion por valor definido)", style_console);
//El switch-case es una estructura de control de flujo que permite evaluar una expresion

//Calculando tu generacion en base a tu edad

let asignaGeneracion = (anioNacimiento) => {
  switch (true) {
    case anioNacimiento < 1968: //BabyBoomers
      return "Baby Boomers";

    case anioNacimiento > 1968 && anioNacimiento < 1980:
      return "Generacion X";
      an;
    case anioNacimiento > 1980 && anioNacimiento <= 1994:
      return "Millennials";

    case anioNacimiento > 1994 && anioNacimiento <= 2010:
      return "Centenials";

    case anioNacimiento > 2010:
      return "Cristalezzz";
  }
};

console.log();

//
