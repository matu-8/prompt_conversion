let opciones,menu, pesos;
const precioUSD = 1300;
let history = []

//Creación de funciones 'conversion de pesos a usd'.
function convertCurrency(pesos){
 return pesos/precioUSD;
}

//Creación del bucle con opciones de cliente.
do {
opciones =parseFloat(prompt ('¿Desea realizar una conversion? \n 1)Si \n 2)No'));
switch (opciones){
   case 1: 
    pesos = prompt('Ingrese cantidad en pesos'); //Bloque de ingreso de datos.
    alert('El monto ingresado es de '+ convertCurrency(pesos).toFixed(2)+ 'USD');
    history.push({
    tipo : 'divisa',
    entrada : pesos,
    salida: convertCurrency(pesos).toFixed(2)+'USD',
    fecha :new Date().toLocaleString()}) //Imprime la fecha en el array de salida.
     
}
//Evalúa si las opciones ingresadas son correctas, sino alerta de un error
if (opciones != 2 && opciones != 1){ 
    alert ('El valor que ingresó es inválido, porfavor seleccione 1 o 2');
}
}
while(opciones!=2);
console.log(history);
