// Repaso de arreglos

//Estilizacion de mensajes de salida
const bg =
  "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Pesonalizacion de lss Salidas a Consola
console.warn("Practica 06: Arreglos en JavaScript");

//DECLARACION DE UN ARREGLO
console.log("%c1.- Declaracion de un Arreglo (Array)", style_console);
//Para declarar un arreglo (array) de datos en JS basta con agregar [], y dentro los datos contenidos del arreglo
const mesesAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo,",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
//VISUALIZACION DE OS ELEMENTOS DE UN ARREGLO
console.log(mesesAnio);
console.table(mesesAnio);
//ACCEDER A LOS VALORES DE UN ARREGLO DE DATOS PARA ACCEDER AL VALOR SOLO BASTA ENVIAR LAPOSICION DEL DATO QUE QUEREMOS DEBNTRO DE OS LIMITES ESTABLECIDOS, SIENDO EL LIMITE INFERIOR 0 Y EL SUPERIOR TAMANO -1

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log("El primer mes del año es:", mesesAnio[0]);
console.log("El ultimo mes del año es:", mesesAnio[mesesAnio.length - 1]);

//MP SE PUEDE ACCEDER A ELEMENTOS CON POSICIONES NEGATIVAS O POSICIONES SUPERIROES AL TAMANO DEFINIDO

console.log("El mes del año en la posicion -1 es:", mesesAnio[-1]);
console.log("El treceavo mes del anio en la posicion es:", mesesAnio[12]);
console.log("Que tipo de dato es un arreglo?:", typeof mesesAnio);

//AL SER JAVASCERIPT UN LENGUAJE DEBILMENTE TIPADO PODEMOS CREAR ARREGLOS MIXTOS DE TIPOS DE DATOS
console.log("Declaramos un Arreglo Mixto");
const saludar = function (nombre) {
  return `Hola, ${nombre}!`;
};

let arregloMixto = [
  "String",
  5,
  45.26,
  -200,
  -0.16854,
  Symbol("AFL"),
  `z`,
  false,
  BigInt(1111122222333344444455555666667777),
  true,
  { latitud: "20°18'0\" N", longitud: "97°58'00\" W", altitud: 796 },
  saludar,
  null,
];

console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof arregloMixto);

console.log("Verificamos los tipos de datos de los elementos del arreglo: ");

console.log(
  `El dato en la posición[0]= ${
    arregloMixto[0]
  } y es del tipo: ${typeof arregloMixto[0]}`
);
console.log(
  `El dato en la posición[1]= ${
    arregloMixto[1]
  } y es del tipo: ${typeof arregloMixto[1]}`
);
console.log(
  `El dato en la posición[2]= ${
    arregloMixto[2]
  } y es del tipo: ${typeof arregloMixto[2]}`
);
console.log(
  `El dato en la posición[3]= ${
    arregloMixto[3]
  } y es del tipo: ${typeof arregloMixto[3]}`
);
console.log(
  `El dato en la posición[4]= ${
    arregloMixto[4]
  } y es del tipo: ${typeof arregloMixto[4]}`
);
console.log(
  `El dato en la posición[5]= ${
    arregloMixto[5].toString
  } y es del tipo: ${typeof arregloMixto[5]}`
);
console.log(
  `El dato en la posición[6]= ${
    arregloMixto[6]
  } y es del tipo: ${typeof arregloMixto[6]}`
);
console.log(
  `El dato en la posición[7]= ${
    arregloMixto[7]
  } y es del tipo: ${typeof arregloMixto[7]}`
);
console.log(
  `El dato en la posición[8]= ${
    arregloMixto[8]
  } y es del tipo: ${typeof arregloMixto[8]}`
);
console.log(
  `El dato en la posición[9]= ${
    arregloMixto[9]
  } y es del tipo: ${typeof arregloMixto[9]}`
);
console.log(
  `El dato en la posición[10]= ${
    arregloMixto[10]
  } y es del tipo: ${typeof arregloMixto[10]}`
);
console.log(
  `El dato en la posición[11]= ${
    arregloMixto[11]
  } y es del tipo: ${typeof arregloMixto[11]}`
);
console.log(
  `El dato en la posición[12]= ${
    arregloMixto[12]
  } y es del tipo: ${typeof arregloMixto[12]}`
);

console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);

console.log("Declarando una matriz regular");
//UNA MATRIZ ES UNA ESTRUCTURA DE DATOS MULDIMENSIONAL (TABLA) DE N COLUMNAS O M FILAS

let matriz = [
  [1, 2, 3, 4],
  ["a", "b", "c", "d"],
];

//ESTE ES UN MATRIZ REGULAR DE 4X4

console.log(matriz);
console.table(matriz);

console.log("Declaramos una matriz irregular");

const matrizIrregular = [
  ["Juan", "Pedro", "Maria", "Inés"],
  [true, false, null],
  [9.2],
];

console.log(matrizIrregular);
console.table(matrizIrregular);

//ACCEDIENDO A LOS VALORES DE UNA MATRIZ

console.log("Leyendo las Propiedades de una Matriz Regular");

console.log(`Elementos en la posición [0][0]: ${matriz[0][0]}`);
console.log(`Elementos en la posición [1][2]: ${matriz[1][2]}`);

//ACCEDIENDO A LOS VALOFRES DE LA MATRIZ IRREGULAR
console.log("Leyendo las Propiedades de una Matriz Irregular");

console.log(`Elementos en la posición [0][0]: ${matrizIrregular[0][0]}`);
console.log(
  `Elementos en la posición [1][2] (¿Es Maria mayor?): ${matrizIrregular[1][2]}`
);
console.log(
  `Elementos en la posición [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`
);

//FUNCIONES Y METODOS DE ARREGLOS
//los metodos de ubn objeto siempre son invocados usando un . y su termino se delimitan los parametros entre(), en caso de que no lleve(), no es un metodo, sino una propiedad.

//
console.log(
  "%c4.- Funciones o Métodos de los Arreglos (Array Methos or Array functions)",
  style_console
);
console.log("¿cómo sabemos cuál es el tamaño de un arreglo?");
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`);
console.log(`ArregloMixto es un arreglo de tamaño: ${arregloMixto.length}`);

console.log("¿Qué pasa con los multidimensionales?");
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`);
console.log(
  "mmmmmmmm dejame pensarlo, eso me da el tamaño de numero de las filas de la matriz, pero cómo saber el número de columna?"
);
console.log(`matriz regular tiene un numero de ${matriz[0].length}`);

console.log(`Y para la matrizIrregular?`);

//PARA SABER LA DEIMENSION DE UNA MATRIZ IRREGULAR PODEMOS HACER EL USO DEL CICLO

let numeroFilas = matrizIrregular.length;
for (let i = 0; i < numeroFilas; i++)
  console.log(
    `La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`
  );

console.log(
  "%c5.- Agregar un nuevo elemento a un arreglo (PUSH)",
  style_console
);

let estudiantes = [
  "Al Garcia",
  "Richi Otero",
  "Chayo Swift",
  "Carlos Chicontlas",
  "Joan Wecs",
];
console.log("Los elementos actuales del arreglo son: ");
console.table(estudiantes);
console.log("Agregamos a un nuevo estudiante llamado: Paco Olarte");
estudiantes.push("Paco Olarte");
console.log("Despues de agregar los elementos del arreglo son: ");
console.table(estudiantes);
console.log("¿Qué pasa con los Mixtos?");
console.log("El arregloMixto actualmente tiene los siguientes elementos: ");
console.table(arregloMixto);
console.log('Agregamos la palabra: "Hola", como nuevo elemento');
arregloMixto.push("Hola");
console.log(
  "Y también agregamos el numero -31215282838822828288251548.2959828288284949, siendo este un BigInt"
);
arregloMixto.push(BigInt(-31215282838822828288251548.2959828288284949));
console.log(
  "Después de estas dos operaciones el arreglo queda con los siguientes elementos: "
);
console.table(arregloMixto);

console.log(
  "%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT)",
  style_console
);

console.table(estudiantes);
console.log("Ahora agregamos a Angel de Jesus, al comienza del arreglo.");
estudiantes.unshift("Angel De Jesus");
console.log("La lista actual es: ");
console.table(estudiantes);

console.log(
  "%c7.- Eliminar elementos de un arreglo en la última posición (POP)",
  style_console
);
console.log("El arreglo tiene los siguientes elemntos: ");
console.table(estudiantes);
console.log("Para este caso eliminaremos a Paco Olarte en la posición última");
estudiantes.pop();
console.log(
  "Despues de eliminar el elemento el arreglo queda de la sig manera: "
);
console.table(estudiantes);
