// tipos de datos en JS
// 1. Undefined
let cliente;
console.log("El cliente es: ", cliente);
console.log("El tipo de dato de la variable del cliente es: ", typeof cliente);
cliente = "Al Farias";
console.log("El cliente es: ", cliente);
console.log("El tipo de dato de la variable del cliente es: ", typeof cliente);
cliente = "230389";
console.log("El cliente es: ", cliente);
console.log("El tipo de dato de la variable del cliente es: ", typeof cliente);
//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas
// 2. BOOLEAN
console.warn("--- Tipo de dato : Booelan (booleano - true/false)");
let esPremium = "No lo se";
console.log("¿Es el cliente premium? : ", esPremium);
esPremium = true;
console.log("¿Es el cliente premium? : ", esPremium);
if (esPremium) console.log("El cliente paga por usar el servicio");
// 3. Number
var cantidad;
const costo_producto = 10.5;
let saldo_cuenta = -2500.4;
let monto_transaccion;
console.warn(
  "--- Tipo de dato: Number (numeros, positivos, negativos, decimales, flotantes)"
);
console.log(
  "Tu saldo al dia de hoy es de: ",
  saldo_cuenta,
  "tipo de dato = ",
  typeof saldo_cuenta
);
console.log("El producto que has seleccionado cuesta: ", costo_producto);
cantidad = 8;
console.log("Has elegido comprar: ", cantidad, "de productos");
console.log("El importe total de la compra es: ", cantidad * costo_producto);
saldo_cuenta = saldo_cuenta - cantidad * costo_producto;
console.log("Tu nuevo saldo es de: ", saldo_cuenta);
// El cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(
  "Tu abono de : ",
  monto_transaccion,
  " ha sido recibida, tu nuevo saldo es De : ",
  saldo_cuenta + monto_transaccion
);

//String o cadenas de texto
const alumno = "Al Farias Leyva";
let producto = "Monitor de 20 pulgadas";

const numeroo = "30";
const numerooo = 30;

console.log(typeof numeroo);
console.log(typeof numerooo);

//BigInt (Enteros de Dimensiones Amplias)

console.warn("--- Tipo de dato - BIGINT (Numero amplio)");
const numeroGrande = BigInt(981264654165465489);
const numeroGrande2 = BigInt(9878489787987897987987);
let numeroGrande3 = BigInt(9848787897897987897894798798);
let numeroGrande4 = BigInt(98487878978979878978947987988778);

console.log(
  "El primer experimento de un numero grande es: ",
  numeroGrande,
  " que si es soportado por NUMBER, y su tipo de dato es: ",
  typeof numeroGrande
);
console.log(
  "El segundo experimento de un numero grande es: ",
  numeroGrande2,
  " que si es soportado por NUMBER, y su tipo de dato es: ",
  typeof numeroGrande2
);
console.log(
  "El tercer experimento de un numero grande es: ",
  numeroGrande3,
  " que ya no es soportado por NUMBER, y su tipo de dato es: ",
  typeof numeroGrande3
);
console.log(
  "El primer cuarto de un numero grande es: ",
  numeroGrande4,
  " que ya no es soportado por NUMBER, y su tipo de dato es: ",
  typeof numeroGrande4
);

// Para definir ekl tipo de dato BigInt debemos invocar la funcion BigInt o usar la letra "n" al final del numero en la asignacion de valor
console.log("Declaramos los valores numericos gran tamaño...");
numeroGrande3 = BigInt(9848787897897987897894798798);
numeroGrande4 = 98487878978979878978947987988778n;

console.log(
  "El quinto experimento de un numero grande es : ",
  numeroGrande3,
  " que si es soportado por tipo NUMBER, y su tipo de dato es ",
  typeof numeroGrande3
);
console.log(
  "El sexto experimento de un numero grande es: ",
  numeroGrande4,
  " y su tipo de dato es ",
  typeof numeroGrande4
);

// Hay que considerar que los tipos de datos declarados como BigInt no son operables con los tipos de number
let numero = 238;

console.log(
  "El resultado de la operacion de: numeroGrande4/numero es = a : ",
  numeroGrande4 / BigInt(numero)
);

//console.log(typeof numeroGrande);
// const numero = 10;
// const numero2 = 20;
// console.log(numero + Number(numeroGrande));

// const numero = "30";
// const numero2 = 30;
// console.log(typeof String(numero2));
// console.log(typeof Number(numero));

//Symbol
console.warn("--- Tipo de dato - SYMBOL (Simbolo o forzar la unidad)");
const numero1 = 2;
const numero2 = 2.0;
const numero3 = "2";
const numero4 = "2.0";
const numero5 = Symbol(2);
const numero6 = Symbol(2.0);
const numero7 = Symbol("2");
const numero8 = Symbol("2.0");
const numero9 = Symbol("2");

// Prueba de generacion 1
console.log("Prueba de comparación 1");
if (numero == numero2)
  console.log(
    "se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor"
  );
else
  console.log(
    "Se han comparado los valores de numero1 y numero2, dettectando que NO tienene le mismo valor"
  );

// Prueba de generacion 2
console.log("Prueba de comparación 2");
if (numero1 == numero3)
  console.log(
    "Se han comparado los valores de numero1 y numero3, confirmando que tienen el mismo valor"
  );
else
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que NO tienen el mismo valor"
  );

// Prueba de comparacion 3
console.log("Prueba de comparación 3");
if (numero1 === numero3)
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que tienen el mismo valor"
  );
else
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que NO tienen el mismo valor"
  );

// Prueba de comparacion 4
console.log('Prueba de comparación 5: es 2 = "2"?');
if (numero1 === numero4)
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que tienen el mismo valor"
  );
else
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que NO tienen el mismo valor"
  );

// Prueba de comparacion 6
console.log("Prueba de comparación 6: es 2 = symbol(2)");
if (numero1 === numero5)
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que tienen el mismo valor"
  );
else
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que NO tienen el mismo valor"
  );

// Prueba de comparacion 7
console.log("Prueba de comparación 7:");
if (numero5 === numero7)
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que tienen el mismo valor"
  );
else
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que NO tienen el mismo valor"
  );

// Prueba de comparacion 8
console.log("Prueba de comparación 8:");
if (numero5 === numero9)
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que tienen el mismo valor"
  );
else
  console.log(
    "Se han comparado los valores de numero1 y numero3, detectando que NO tienen el mismo valor"
  );
// const primerSymbol = Symbol(30);
// const segundoSymbol = Symbol(30);
// console.log(primerSymbol === segundoSymbol);
// console.log(primerSymbol.valueOf());
// console.log(segundoSymbol.valueOf());
