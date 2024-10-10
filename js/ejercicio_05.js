const bg =
  "linear-gradient(135deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 50%, rgba(0,212,255,1) 100%)";
const style_console = `background: ${bg}; color: white; border-radius: 8px; padding: 6px; font-size: 1.1rem; font-weight: bold; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3)`;

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

console.log(
  `Dado que nací en el año 2001 soy de la generación ${asignaGeneracion(2001)}`
);

console.log("%c4.- Manejo de Escepciones ( TRY / CATCH )", style_console);

//En algunos ocasiones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluso de un middleware, pero que si duda debemos controlar para evitar las fallas de ejecución.

console.log("Intentamos dividir : 0/10, el resultado es: ");
try {
  let result = 0 / 10;
  console.log(result);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
}

console.log("Intentamos dividir : 10/0, el resultado es: ");
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
}

console.log("Intentamos dividir : a/0, el resultado es: ");
try {
  //intentamos
  let result = "a" / 10; //dividir una letra entre 0
  console.log(result);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
}

console.log("Intentamos dividir : la variable a/0, el resultado es: ");
try {
  //intentamos
  let result = a / 0; //dividir una variable no definida
  console.log(result);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
}

console.log(
  "Intentamos dividir : el valor de la variable x/ entre el valor de la variable y, el resultado es:"
);
try {
  // Intentamos
  let x = 8,
    y = 2,
    result = x / y; //dividir una variable no definida
  console.log(result);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
}

console.log("%c5.- Control de Ciclos ( BREAK / CONTINUE ))", style_console);

//En algunas ocasiones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10...");
for (let num = 1; num < 11; num++) {
  console.log(num);
}

console.log(
  "Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte..."
);
for (num = 1; num < 11; num++) {
  if (num == 7) break;
  else console.log(num);
}

console.log(
  "Ahora necesitamos que si llega al 7 te saltes ese numero y continues..."
);
for (num = 1; num < 11; num++) {
  if (num == 7) {
    continue;
  }
  console.log(num);
}

console.log("%c6. Ciclo Iterativo - (FOR) ", style_console);

//Recorre demanera iterativa (i), de incremental a decremental

console.log("Los dias de la semana son en orden ascendente: ");

console.log("Los días de la semana son en ordenes ascendentes son: ");
let dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "viernes",
  "Sábado",
];

for (let i = 0; i < dias.length; i++) {
  console.log(dias[i]);
}
console.log("Ahora vamos a imprimir los meses en orden descendente...");
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

for (let i = meses.length - 1; i >= 0; i--) {
  console.log(meses[i]);
}

console.log("%c7.- Ciclo Condicionales - (WHILE))", style_console);
//Estos ciclos (BUCLE) depende de una condición para continuar ejecutandose

let finDeSemana = false;
let mensaje = "";
let j = 0;

while (j < dias.length) {
  switch (
    j //Usamos "j" para que coincide con los casos
  ) {
    case 0:
      finDeSemana = true;
      mensaje = "Domingo de procastinar";
      break;
    case 1:
      finDeSemana = false;
      mensaje = "San Lunes a chambiar...";
      break;
    case 2:
      finDeSemana = false;
      mensaje = "Martes ni te cases, ni te embarques";
      break;
    case 3:
      finDeSemana = false;
      mensaje = "Ombligo de la semana, sigues chambeando...";
      break;
    case 4:
      finDeSemana = false;
      mensaje = "JUEVES de racismo...";
      break;
    case 5:
      finDeSemana = false;
      mensaje = "VIEeeEEEEEEeeeernes, disfruta el día";
      break;
    case 6:
      finDeSemana = true;
      mensaje = "Sábado, diviértete";
      break;
  }

  if (!finDeSemana) {
    console.log(`Día: ${j} ${dias[j]}`);
    console.log(`Mensaje del día ${mensaje}`);
  }
  j++;
}

console.log(
  "%c8.- Ciclo Condicionales, que se ejecuta al menos una vez - (DO WHILE))",
  style_console
);

//Simulamos una lista de episodios de una temporada

let episodios = [
  "Episodio 1: El nombre del juego",
  "Episodio 2: Cereza",
  "Episodio 3: Conseguir algo",
  "Episodio 4: La hembra de la especie",
  "Episodio 5: Bueno para el alma",
];

let indice = 0;
let continuarViendo = true; //Esta variable simula la decision del uisuario de continuar viendo

do {
  console.log(`Reproduciendo ${episodios[indice]}`);

  //simulamos la reproduccion del episodio
  indice++;

  //simulamos una pregunta al usuario si desea seguir viendo
  if (indice < episodios.length) {
    continuarViendo = confirm("Deseas continuar con el siguiente episodio?");
  } else {
    continuarViendo = false; // cuando se acaba la lista de episodios
  }
} while (continuarViendo && indice < episodios.length);

console.log("Fin de la reproduccion.");

// Ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjunto de datos.
console.log(
  "%c9.- Ciclo para recorrer elementos finitos - (FOR ... OF))",
  style_console
);

let seriesTrending = [
  {
    nombre: "La Casa de Papel",
    temporadas: "5",
    totalViewers: "6.7 M",
    totalReprods: "6.7 M",
  },
  {
    nombre: "The Boys",
    temporadas: "5",
    totalReprods: "29 M",
    totalViewers: "1.329 M",
  },
  {
    nombre: "Los 100",
    temporadas: "7",
    totalReprods: "1 M",
    totalViewers: " 2 M",
  },
  {
    nombre: "Bob Esponja",
    temporadas: "14",
    totalReprods: "20 M",
    totalViewers: "80 M",
  },
  {
    nombre: "Reacher",
    temporadas: "3",
    totalReprods: "3 M",
    totalViewers: "5 M",
  },
];

for (let serie of seriesTrending) {
  console.log(`Serie: ${serie.nombre}, Temporada: ${serie.temporadas}`);
}

try {
  console.log(`La ultima serie leia fue: ${serie.nombre}`);
} catch (error) {
  console.log("Ocurrio un error: " + error.message);
}

console.log(
  "%c10.- Ciclo para recorrer las propiedades de elementos finitos - (FOR ... IN))",
  style_console
);

//Usando for...in para recorrer cada serie
for (let i in seriesTrending) {
  console.log(`Serie ${parseInt(i) + 1}:`);
  for (let propiedad in seriesTrending[i]) {
    console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
  }
  console.log("------------------");
}

console.log(
  "%c11.- Ciclo para ininterrumpir para cada uno de los elementos del arreglo (FOR EACH)",
  style_console
);

//lista de series de TV trending con temporadas, viewers y reproducciones
let seriesTrending2 = [
  {
    nombre: "La Casa de Papel",
    temporadas: "5",
    viewers: "800000",
    reproducciones: "25000000",
  },
  {
    nombre: "The Boys",
    temporadas: "5",
    viewers: "1200000",
    reproducciones: "1500000",
  },
  {
    nombre: "Los 100",
    temporadas: "7",
    viewers: "1600000",
    reproducciones: "80000000",
  },
  {
    nombre: "Bob Esponja",
    temporadas: "14",
    viewers: "20 M",
    reproducciones: "80 M",
  },
  {
    nombre: "Reacher",
    temporadas: "3",
    viewers: "400000000",
    reproducciones: "70000000000",
  },
];

// Usando forEach para recorrer cada serie y calcular la calificacion
seriesTrending2.forEach((serie, index) => {
  // Cambié 'Serie' a 'serie'
  let calificacion = (serie.reproducciones / serie.viewers).toFixed(2);
  //Calcula la calificación y la redondea a 2 decimales
  console.log(`Serie: ${index + 1}:`);
  console.log(`Nombre: ${serie.nombre}:`);
  console.log(`Temporadas: ${serie.temporadas}:`);
  console.log(`Viewers: ${serie.viewers}:`);
  console.log(`Reproducciones: ${serie.reproducciones}:`);
  console.log(`Calificación: ${calificacion}:`);
  console.log(`--------------------`);
});

//Usando filter para filtrar y map para transformar la informacion
//Lista de series que queremos verificar
let seriesDeseasas = ["The Witcher", "The Boys", "Loki"];
//Usando map e includes para filtrar y obtener los nombres de las series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
  .filter((serie) => serie.temporadas === 3)
  .map((Serie) => serie.nombre)
  .filter((nombre) => seriesDeseasas.includes(nombre));

//Mostrar los resultados
console.log("Series con 3 temporadas que estan en la lista deseada");
console.log(seriesConTresTemporadas);
