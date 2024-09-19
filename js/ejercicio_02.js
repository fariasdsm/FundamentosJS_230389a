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
  " ha sido recibida, tu nuevo saldo es de : ",
  saldo_cuenta + monto_transaccion
);
